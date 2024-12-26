

// eslint-disable-next-line react/prop-types
const ServiceToDoTable = ({serviceToDo,handleStatusChange}) => {
    // console.log(serviceToDo)
    const {serviceImage,serviceCategory,status,_id}=serviceToDo || {};
    console.log(_id)
    const handleSpecificStatusChange=(id,status)=>{
        handleStatusChange(id,status)
    }
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                src={serviceImage}
                className="rounded-xl w-80 h-52"
                alt="serviceImage" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceCategory}</h2>
                <p>{status}</p>
                <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                <div className="dropdown dropdown-right">
                    <div tabIndex={0}
                        role="button" 
                        className="btn m-1"
                        >Status</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow">
                        <li><a onClick={() => handleSpecificStatusChange(_id,'Pending')}>Pending</a></li>
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