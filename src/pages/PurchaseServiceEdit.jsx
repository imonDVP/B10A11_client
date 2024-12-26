import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PurchaseServiceEdit = () => {
            const {id}=useParams();
            console.log(id)
            // ======Using this Information for Form fill up=====
            //===Fetching Booked Service Information from DB by ID====
            const [purchaseEditService,setPurchaseEditService]=useState({});
            useEffect(()=>{
                fetchPurchaseEditService()
            // eslint-disable-next-line react-hooks/exhaustive-deps
            },[id])
            const fetchPurchaseEditService=async ()=>{
                const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/purchaseEditService/${id}`);
                setPurchaseEditService(data);
            }
            console.log(purchaseEditService);
            const {_id,serviceImage,serviceCategory,servicePrice,serviceProvider}=purchaseEditService || {}
            console.table({id,_id});
            // ====================================



        // ====Form Data Picking up=========
        // const [purchaseDate,setPurchaseDate]=useState(new Date())
        const handlePurchaseServiceEdit=async(e)=>{
            e.preventDefault();
            const form=e.target;
            const serviceImage=form.image.value;
            // console.table({serviceImage});
            const purchaseServiceEditData={
                serviceImage,
            };
            // console.log(serviceData)
            // ======Saving Purchade-service-edit Data at DB============
            try{
                const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/purchaseServiceEdit/${_id}`,purchaseServiceEditData);
                console.log(data)
                toast.success('Purchase Service Data is edited successfully');
            }catch(error){
                console.log(error.message);
                toast.error('Purchase Service Data is not edited successfully');
            }
        }


    return (
            <div className="bg-[#F4F3F0] lg:p-24">
                <h2 className="text-3xl text-center font-bold">Please Fill Up </h2>
                <form onSubmit={handlePurchaseServiceEdit} className="flex flex-col justify-center items-center gap-4 ">
                    {/* =================================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text font-bold">Service Image</span>
                            </label>
                            <input
                            type="text"
                            name="image"
                            placeholder="Type url"
                            required
                            autoComplete='value'
                            defaultValue={serviceImage}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* =========================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text font-bold">Service Name( Category)</span>
                            </label>
                            <input
                            type="text"
                            name="category"
                            placeholder="Type id"
                            required
                            autoComplete='value'
                            disabled
                            defaultValue={serviceCategory}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* ============================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text font-bold">Service ID</span>
                            </label>
                            <input
                            type="text"
                            name="serviceId"
                            placeholder="Type id"
                            required
                            autoComplete='value'
                            disabled
                            defaultValue={_id}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* =============================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text font-bold">Service Price</span>
                            </label>
                            <input
                            type="number"
                            name="price"
                            placeholder="Type price"
                            required
                            autoComplete='value'
                            disabled
                            defaultValue={servicePrice}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* =============================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className='level'>
                                Service Provider Name  
                            </label>
                            <input
                                id='emailAddress'
                                type='text'
                                name='serviceProviderName'
                                disabled
                                defaultValue={serviceProvider?.name}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* ========================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Service Provider Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='serviceProviderEmail'
                                disabled
                                defaultValue={serviceProvider?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* ============================= */}
                    <input
                    type="submit"
                    value="Edit Now"
                    className="btn w-full bg-green-500 text-white mt-6 md:w-1/2"
                    />
                    {/* ============================= */}
                </form>
            </div>
    );
};

export default PurchaseServiceEdit;