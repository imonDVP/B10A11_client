import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const ServiceToDoTable = ({serviceToDo,handleStatusChange}) => {
    // console.log(serviceToDo)
    const {serviceImage,serviceCategory,status,_id}=serviceToDo || {};
    console.log(_id)
    const handleSpecificStatusChange=(id,status)=>{
        handleStatusChange(id,status)
    }
        useEffect(()=>{
            AOS.init({
                duration:'1000',
                // delay:'500'
            });
        },[])
    
    return (
        <div data-aos="zoom-in" className="card card-compact mt-5 w-96 shadow-xl bg-white dark:bg-black dark:text-white z-10">
            <figure>
                <img
                src={serviceImage}
                className="rounded-xl w-80 h-52  mt-7"
                alt="serviceImage" />
            </figure>
            <div className="card-body z-10">
                <h2 className="card-title">{serviceCategory}</h2>
                <p>{status}</p>
                <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <div className="dropdown dropdown-right z-50">
                    <div tabIndex={0}
                        role="button" 
                        className="btn m-1 z-50 btn-success text-white rounded-full skeleton"
                        >Status</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-50 w-48 p-2 shadow">
                        <li ><a onClick={() => handleSpecificStatusChange(_id,'Pending')}>Pending</a></li>
                        <li><a onClick={() => handleSpecificStatusChange(_id,'Working')}>Working</a></li>
                        <li><a onClick={() => handleSpecificStatusChange(_id,'Completed')}>Completed</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceToDoTable;