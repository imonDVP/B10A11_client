import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import ManageServiceCard from "../components/ManageServiceCard";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";


const ManageService = () => {
    const axiosSecure=useAxiosSecure();
        // ===Current(Customer or Not) User Information====
        const {user}=useContext(authContext);
        console.log(user);
        //===Fetching Added Service Information from DB by User'email====
        const [myAddedServices,setMyAddedServices]=useState([]);
        useEffect(()=>{
            fetchMyAddedServices()
          // eslint-disable-next-line react-hooks/exhaustive-deps
        },[user])
        const fetchMyAddedServices=async ()=>{
            const {data}=await axiosSecure.get(`/myaddedservices/${user?.email}`);
            setMyAddedServices(data);
        }
        console.log(myAddedServices);



    return (
        <div className="bg-white dark:bg-black dark:text-white">
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                    myAddedServices.map((myAddedService,index)=>(
                    <ManageServiceCard 
                    key={index} 
                    myAddedService={myAddedService}
                    fetchMyAddedServices={fetchMyAddedServices}
                    ></ManageServiceCard>
                    ))
                    }
            </div>
        </div>
    );
};

export default ManageService;