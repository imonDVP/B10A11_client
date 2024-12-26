import { useContext } from "react";
import { authContext } from './../AuthProvider/AuthProvider';
import { toast } from "react-toastify";
import useAxiosSecure from "../CustomHooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";


const AddService = () => {
    const navigate=useNavigate();
    const axiosSecure=useAxiosSecure();
    // ===Current User Information====
    const {user}=useContext(authContext)
    console.log(user)
    const serviceProvider={
        email:user?.email,
        name: user?.displayName,
        image:user?.photoURL,
    }
    console.log(serviceProvider);

    // ====Form Data Picking up=========
    const handleAddService=async(e)=>{
        e.preventDefault();
        const form=e.target;
        const serviceImage=form.image.value;
        const serviceCategory=form.category.value;
        const servicePrice=form.price.value;
        const serviceArea=form.area.value;
        const serviceDescription=form.description.value;
        // console.table({serviceImage,serviceCategory,servicePrice,serviceArea,serviceDescription});
        const serviceData={serviceImage,serviceCategory,servicePrice,serviceArea,serviceDescription,serviceProvider};
        // console.log(serviceData)
        try{
            // const url=`${import.meta.env.VITE_API_URL}`
            // console.log(url)
            const {data}=await axiosSecure.post(`/add-service`,serviceData);
            console.log(data);
            toast.success('Your service is add successfully!')
            navigate('/');
        }catch(error){
            console.log(error.message);
            toast.error('Form Data is not added successfully');
        }
    }





    return (
            <div className="bg-white dark:bg-black dark:text-white">
                <div className="bg-[#F4F3F0] lg:p-24 dark:bg-black dark:text-white">
                    <h2 className="text-3xl text-center font-bold">Add a Service </h2>
                    <form onSubmit={handleAddService} className="flex flex-col justify-center items-center gap-4 ">
                        <div className="flex justify-center items-center w-full ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                <span className="label-text font-bold">Service URL</span>
                                </label>
                                <input
                                type="text"
                                name="image"
                                placeholder="Type url"
                                className="input input-bordered"
                                required
                                autoComplete='value'
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-6  w-full ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                <span className="label-text font-bold">Service Name( Category)</span>
                                </label>
                                <select className="input input-bordered " name="category" id="day">
                                <option value="Category">Category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Server Management">Server Management</option>
                                <option value="Cyber Security">Cyber Security</option>
                                <option value="App Development">App Development</option>
                                <option value="Software Development">Software Development</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                <span className="label-text font-bold">Service Price</span>
                                </label>
                                <input
                                type="number"
                                name="price"
                                placeholder="Type price"
                                className="input input-bordered"
                                required
                                autoComplete='value'
                                />
                            </div>
                        </div>
                        {/*Service Area */}
                        <div className="flex justify-center items-center w-full ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold">Service Area</span>
                                </label>
                                <input
                                type="text"
                                name="area"
                                placeholder="Type area"
                                className="input input-bordered"
                                required
                                autoComplete='value'
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center w-full ">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                <span className="label-text font-bold">Description </span>
                                </label>
                                <textarea className=" p-4 rounded-xl" name="description" rows="4" cols="50" placeholder="Here type your Description" required></textarea>
                            </div>
                        </div>
                        {/* End of Labels */}
                        <input
                        type="submit"
                        value="Add Service"
                        className="btn w-full bg-green-500 text-white mt-6 md:w-1/2"
                        />
                    </form>
                </div>
            </div>
    );
};

export default AddService;