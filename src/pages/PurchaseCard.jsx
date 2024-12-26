//======Date fns=========
// import { compareAsc, format } from "date-fns";
//===Date Picker=====
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { authContext } from "../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
//============================================


const PurchaseCard = () => {
        // ===Current(Customer) User Information====
        const {user}=useContext(authContext);
        console.log(user);
        const customer={
            name: user?.displayName,
            email:user?.email,
            image:user?.photoURL,
        }
        console.log(customer);

        //===Booked Service ID======
        const {id}=useParams();
        const bookedServiceId=id;
        console.log(bookedServiceId)
        //===Fetching Booked Service Information from DB by ID====
        const [bookedService,setBookedService]=useState({});
        useEffect(()=>{
            fetchBookedService()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[id])
        const fetchBookedService=async ()=>{
            const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/bookedService/${id}`);
            setBookedService(data);
        }
        console.log(bookedService);
        const {_id,serviceImage,serviceCategory,servicePrice,serviceProvider}=bookedService || {}
        // ==============================

        // ====Form Data Picking up=========
        const [serviceTaking,setServiceTakingDate]=useState(new Date())
        const handlePurchase=async(e)=>{
            e.preventDefault();
            const form=e.target;
            const serviceImage=form.image.value;
            const serviceCategory=form.category.value;
            const serviceId=form.serviceId.value;
            const servicePrice=form.price.value;
            const serviceInstructions=form.instructions.value;
            const purchaseServiceId=_id;
            const serviceTakingDate=serviceTaking;
            console.table({serviceImage,serviceCategory,serviceId,servicePrice,serviceInstructions});
            const purchaseServiceData={
                serviceImage,
                serviceCategory,
                serviceId,
                servicePrice,
                serviceProvider,
                customer,
                purchaseServiceId,
                serviceTakingDate,
                status:'Pending',
                serviceInstructions,
            };
            // console.log(serviceData)
            // ======Saving Purchade service Data at DB==============
            try{
                const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/purchaseService`,purchaseServiceData);
                console.log(data)
                toast.success('Purchase Service Data is added successfully');
            }catch(error){
                console.log(error.message);
                toast.error('Purchase Service Data is not added successfully');
            }
        }


    return (
        <div>
            <div className="bg-[#F4F3F0] lg:p-24">
                <h2 className="text-3xl text-center font-bold">Please Fill Up </h2>
                <form onSubmit={handlePurchase} className="flex flex-col justify-center items-center gap-4 ">
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
                            disabled
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
                    {/* ============================ */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Customer Name  
                            </label>
                            <input
                                id='emailAddress'
                                type='text'
                                name='customerName'
                                disabled
                                defaultValue={user?.displayName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* ========================= */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Customer Email Address
                            </label>
                            <input
                                id='emailAddress'
                                type='email'
                                name='customerEmail'
                                disabled
                                defaultValue={user?.email}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    {/* =============================== */}
                    {/* ___Date Picker Input Field____ */}
                    <div  className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className='text-gray-700'>Service Taking Date </label>
                            <DatePicker
                                className='border p-2 rounded-md w-full'
                                selected={serviceTaking}
                                onChange={(inputDate) => setServiceTakingDate(inputDate)}
                            />
                        </div>
                    </div>
                    {/* ====================================== */}
                    <div className="flex justify-center items-center w-full ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text font-bold">Special Instructions</span>
                            </label>
                            <textarea className=" p-4 rounded-xl" name="instructions" rows="4" cols="50" placeholder="Here type your Description" required></textarea>
                        </div>
                    </div>
                    {/* End of Labels */}
                    {/* ============================= */}
                    <input
                    type="submit"
                    value="Purchase Now"
                    className="btn w-full bg-green-500 text-white mt-6 md:w-1/2"
                    />
                    {/* ============================= */}
                </form>
            </div>
        </div>
    );
};

export default PurchaseCard;