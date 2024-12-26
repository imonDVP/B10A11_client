
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({service}) => {
    // console.log(service);
    const {_id,serviceImage,serviceCategory,servicePrice,serviceArea,serviceDescription,serviceProvider}=service || {};

    useEffect(()=>{
        AOS.init({
            duration:'1000',
            // delay:'500'
        });
    },[])

    return (
        <div data-aos="zoom-in" className="card shadow-xl bg-white dark:bg-black dark:text-white">
            <figure className="px-2 pt-2">
                <img
                src={serviceImage}
                alt="serviceImage"
                className="rounded-xl w-80 h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{serviceCategory}</h2>
                <div className="flex justify-around items-center gap-[168px]">
                    <p className='text-[10px] text-gray-600'>
                        <span>Area:</span>{serviceArea}
                    </p>
                    <p className='text-[10px] text-gray-600'>
                        <span>Price:</span>{servicePrice}
                    </p>
                </div>
                <div className="flex justify-around items-center gap-32">
                    <p className='text-[10px] text-gray-600'>
                        <span>Provider :</span>{serviceProvider?.name}
                    </p>
                    <img className="w-10 h-10 rounded-full" src={serviceProvider?.image} alt="" />
                </div>
                <p className='text-[10px] text-gray-600'>
                    <span>Description:</span>{serviceDescription.substring(0,60)}...
                </p>
                <div className="card-actions">
                    <Link to={`/service/${_id}`} className="btn btn-primary">View Detail</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;