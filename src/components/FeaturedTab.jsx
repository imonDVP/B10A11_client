import { Tabs} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import onDemand from '../assets/icons/demand.gif'
import securuty from '../assets/icons/security.gif'
import payment from '../assets/icons/payment.gif'
import price from '../assets/icons/price.gif'
import service from '../assets/icons/service.gif'
import support from '../assets/icons/support.gif'

const FeaturedTab = () => {
    return (
        <Tabs className=" dark:bg-black dark:text-white">
            <div className=' container px-6 py-20 mx-auto bg-slate-300 rounded-lg  dark:bg-black dark:text-white'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
            WHY OUR SERVICE?
            </h1>

            <div className='grid grid-cols-3 gap-8 mt-8  md:grid-cols-6 container mx-auto'>
                <div className='flex flex-col justify-center'>
                    <img className='w-20 h-20' src={onDemand} alt="" />
                    <h4>On Demand</h4>
                </div>
                <div className='flex flex-col justify-center'>
                    <img className='w-20 h-20' src={securuty} alt="" />
                    <h4>High Securuty</h4>
                </div>
                <div className='flex flex-col justify-center'>
                    <img className='w-20 h-20' src={payment} alt="" />
                    <h4>Online Payment</h4>
                </div>
                <div className='flex flex-col justify-center'>
                    <img className='w-20 h-20' src={price} alt="" />
                    <h4>Pricing Others</h4>
                </div>
                <div className='flex flex-col justify-center'>
                    <img className='w-20 h-20' src={service} alt="" />
                    <h4>Service</h4>
                </div>
                <div className='flex flex-col justify-center'>
                    <img className='w-20 h-20' src={support} alt="" />
                    <h4>Online Support</h4>
                </div>
            </div>

            </div>
        </Tabs>        
    );
};

export default FeaturedTab;