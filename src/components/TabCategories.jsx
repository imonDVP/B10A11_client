import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import ServiceCard from './ServiceCard';


const TabCategories = () => {
      //__get all job data from DB___
      const [services,setServices]=useState([]);
      useEffect(()=>{
          fetchAllServices()
      },[])
      const fetchAllServices=async ()=>{
        const {data}=await axios.get(
            `${import.meta.env.VITE_API_URL}/services`
        );
        setServices(data);
    }
      // console.log(services);

  return (
    <Tabs className="bg-slate-200  dark:bg-black dark:text-white">
      <div className=' container px-6 py-20 mx-auto'>
        <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
          Service By Categorywise
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          These categories available for the time being. They are Web
          Development, Graphics Design, Digital Marketing,Software Development,App Development,Cyber Security,Server Management. Please see them by
          clicking on the tabs below.
        </p>
        <div className='flex items-center justify-center'>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
            <Tab>Software Development</Tab>
            <Tab>App Development</Tab>
            <Tab>Cyber Security</Tab>
            <Tab>Server Management</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='Web Development')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='Graphics Design')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>

        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='Digital Marketing')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='Software Development')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='App Development')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='Cyber Security')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            services
            .filter((service)=>service.serviceCategory==='Server Management')
            .map((service,index)=>(
              <ServiceCard key={index} service={service} ></ServiceCard>
            ))
          }
          </div>
        </TabPanel>
      </div>
    </Tabs>
  )
}

export default TabCategories
