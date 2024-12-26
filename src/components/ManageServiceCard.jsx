import axios from "axios";
import { toast } from "react-toastify";
import { Link} from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const ManageServiceCard = ({myAddedService,fetchMyAddedServices}) => {
    // console.log(myAddedService)
    const {_id,serviceImage,serviceCategory,servicePrice,serviceArea}=myAddedService || {};
        
        // ___handle delete functionality______
        const handleDelete=async (id)=>{
            try{
            const {data}=await axios.delete(`${import.meta.env.VITE_API_URL}/addedservicedeleted/${id}`)
            console.log(data)

            //====After deleting ,Update UI=====
            fetchMyAddedServices()
            toast.success('Your Added Service is Deleted successfully');
            }catch(error){
            console.log(error)
            }
        }
    // ___toast Modal functionality_______
    const modalDelete=(id)=>{
        toast(
        (t) => (
            <div className='flex gap-3 items-center'>
            <div><p>Are you <b>Sure</b></p></div>
            <div className='flex gap-2'>
                <button
                className='bg-red-600 text-white py-1 rounded-full w-16'
                onClick={() => {
                toast.dismiss(t.id)
                handleDelete(id)
                }}>Yes</button>
                <button 
                className='bg-green-600 text-white py-1 rounded-full w-16'
                onClick={() => toast.dismiss(t.id)}
                >Cancel</button>
            </div>
            </div>
        ),
        );
    }
    return (
        <div className="card card-compact mt-7 shadow-xl bg-white dark:bg-black dark:text-white">
            <figure>
                <img
                src={serviceImage}
                alt="serviceImage" 
                className="w-80 h-52 rounded-xl"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceCategory}</h2>
                <div className="flex justify-around items-center gap-[168px]">
                    <p className='text-[16px] text-gray-600'>
                        <span>Area:</span>{serviceArea}
                    </p>
                    <p className='text-[16px] text-gray-600'>
                        <span>Price:</span>{servicePrice}
                    </p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/purchase-service-edit/${_id}`} className="btn btn-success text-white rounded-full skeleton w-24">Edit</Link>
                    <button 
                        onClick={()=>modalDelete(_id)} 
                        className="btn btn-success text-white rounded-full skeleton w-24"
                    >Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;