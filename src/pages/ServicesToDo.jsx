import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import ServiceToDoTable from "../components/ServiceToDoTable";
import { toast } from "react-toastify";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";


const ServicesToDo = () => {
    const axiosSecure=useAxiosSecure();
    const { user } = useContext(authContext)
    console.log(user?.email);
    //===Get 
    const [servicesToDo, setServicesToDo] = useState([]);
    useEffect(() => {
        if(user?.email){
            fetchAllServicesToDo()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.email])
    const fetchAllServicesToDo = async () => {
        const { data } = await axiosSecure.get(`/service-to-do/${user?.email}`)
        setServicesToDo(data)
    }
    // console.log(servicesToDo)

    // _____Handle actions or status Button functionality of bid request____
        const handleStatusChange = async (id,status) => {
            console.table({id,status});
            if (status === "Working" && status !== 'Completed'){
                try {
                    const { data } = await axios.patch(
                    `${import.meta.env.VITE_API_URL}/service-to-do-working-status-update/${id}`,
                    { status }
                    )
                    console.log(data)
                    toast.success(`Status Changed To ${status}`)
                    //___after updating, refresh UI ____
                    fetchAllServicesToDo()
                } catch (err) {
                    console.log(err)
                    toast.error(err.message)
                }
            }else if(status !== "Pending" && status !== "Working" && status === 'Completed'){
                try {
                    const { data } = await axios.patch(
                    `${import.meta.env.VITE_API_URL}/service-to-do-complete-status-update/${id}`,
                    { status }
                    )
                    console.log(data)
                    toast.success(`Status Changed To ${status}`)
                    //___after updating, refresh UI ____
                    fetchAllServicesToDo()
                } catch (err) {
                    console.log(err)
                    toast.error(err.message)
                }
            }else{
                toast.error("Soory,Action not permitted")
            }
        }

    return (
        <div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
            {
                servicesToDo?.map((serviceToDo,index)=>
                <ServiceToDoTable
                key={index}
                serviceToDo={serviceToDo}
                handleStatusChange={handleStatusChange}
                ></ServiceToDoTable>)
            }
            </div>
        </div>
    );
};

export default ServicesToDo;