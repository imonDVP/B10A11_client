import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import BookedServiesTable from "../components/BookedServiesTable";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";



const BookedServices = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useContext(authContext);
    console.log(user?.email);
    // ====Get all My purchase service from DB(purchaseServiceCollection) by user'email======
    const [bookedServices,setBookedServices]=useState([]);
    useEffect(()=>{
        if(user?.email){
            fetchAllBookedService()
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[user?.email])
    const fetchAllBookedService=async ()=>{
        const {data}=await axiosSecure.get(`/booked-service-email/${user?.email}`);
        setBookedServices(data);
    }
    console.log(bookedServices)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Service Provider</th>
                        <th>Customer Email</th>
                        <th>Service Category</th>
                        <th>Service Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/*=========row 1 =======*/}
                    {
                    bookedServices?.map((bookedService,index)=>
                    <BookedServiesTable
                    key={index}
                    bookedService={bookedService}
                    ></BookedServiesTable>)
                }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookedServices;