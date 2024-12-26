
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";


const ServiceDetails = () => {
    const axiosSecure=useAxiosSecure();
    // ===Using this ID bearing service for another route=====
    const {id}=useParams()

    const [serviceDetails,setServiceDetails]=useState({})
    useEffect(()=>{
        fetchServiceDetails()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id])
    const fetchServiceDetails=async ()=>{
        const {data}=await axiosSecure.get(`/service/${id}`);
        setServiceDetails(data);
    }
    console.log(serviceDetails);
    const {_id,serviceImage,serviceCategory,servicePrice,serviceArea,serviceDescription,serviceProvider}=serviceDetails || {}
    console.table({id,_id,});



    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-52 ">
                <img
                src={serviceImage}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div className="px-10">
                <h1 className="text-5xl font-bold">{serviceCategory}</h1>
                <div className="flex justify-around items-center gap-[220px] mt-4">
                    <p className='text-[20px] text-gray-600'>
                        <span>Area:</span>{serviceArea}
                    </p>
                    <p className='text-[20px] text-gray-600'>
                        <span>Price:</span>{servicePrice}
                    </p>
                </div>
                <div className="flex justify-around items-center gap-32 mt-2">
                    <p className='text-[20px] text-gray-600'>
                        <span>Service Provider :</span>{serviceProvider?.name}
                    </p>
                    <img className="w-10 h-10 rounded-full" src={serviceProvider?.image} alt="" />
                </div>
                <p className='text-[14px] text-gray-600 py-4'>
                    <span>Description:</span>{serviceDescription}
                </p>
                    <Link to={`/purchaseservice/${id}`} className="btn btn-primary">Book Now</Link>
                    {/* <Navigate to='/purchaseservice' state={{from:location.pathname}} className="btn btn-primary">Book Now</Navigate> */}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;