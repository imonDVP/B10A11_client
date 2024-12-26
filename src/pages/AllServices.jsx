import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";


const AllServices = () => {
    //===Filtering State======
    const [filter,setFilter]=useState('');
    //===Searching State======
    const [search,setSearch]=useState('');
    //===Sorting State======
    const [sort, setSort] = useState('')
    //__get all job data from DB___
    const [services,setServices]=useState([]);
    useEffect(()=>{
        const fetchAllServices=async ()=>{
            const {data}=await axios.get(
                `${import.meta.env.VITE_API_URL}/all-services?filter=${filter}&search=${search}&sort=${sort}`
            );
            setServices(data);
        }
        fetchAllServices()
    },[filter,search,sort])

    // console.log(services);
    // console.log(filter);
    // console.log(search);
    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
    }
    


    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between bg-white dark:bg-black dark:text-white'>
            <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                {/* ____Filter By Category____ */}
                <div>
                <select
                onChange={e => {
                        setFilter(e.target.value)
                    }}
                    value={filter}
                    name='category'
                    id='category'
                    className='border p-4 rounded-lg'
                >
                    <option value=''>Filter By Category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphics Design">Graphics Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Server Management">Server Management</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="App Development">App Development</option>
                    <option value="Software Development">Software Development</option>
                </select>
                </div>
                {/* ____search box______ */}
                {/* <form> */}
                <div className='flex p-1 overflow-hidden border rounded-lg  focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                    className='px-6 py-2 text-gray-700 placeholder-gray-500  outline-none focus:placeholder-transparent bg-white dark:bg-black dark:text-white'
                    type='text'
                    name='search'
                    onChange={e => setSearch(e.target.value)}
                    // onBlur={e => setSearch(e.target.value)}
                    value={search}
                    placeholder='Enter service category'
                    aria-label='Enter Job Title'
                    />
    
                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                    Search
                    </button>
                </div>
                {/* </form> */}
                {/* ____Sort By Deadline______ */}
                <div>
                <select
                    name='category'
                    id='category'
                    onChange={e => {
                        setSort(e.target.value)
                    }}
                    value={sort}
                    className='border p-4 rounded-md'
                >
                    <option value=''>Sort By Price</option>
                    <option value='dsc'>Descending Order</option>
                    <option value='asc'>Ascending Order</option>
                </select>
                </div>
                {/* ___Reset____ */}
                <button onClick={handleReset} className='btn'>Reset</button>
            </div>
                {/* ___Content according to above code________ */}
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                    services.map((service,index)=>(
                    <ServiceCard key={index} service={service} ></ServiceCard>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllServices;