import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const TimingTab = () => {
    return (
        <Tabs>
            <div className=' container px-6 py-10 mx-auto'>
            <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                Browse Service By Update
            </h1>
    
            <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
                Three categories available for the time being. They are Web
                Development, Graphics Design and Digital Marketing. Browse them by
                clicking on the tabs below.
            </p>
            <div className='flex items-center justify-center'>
                <TabList>
                <Tab>Latest Services</Tab>
                <Tab>Oldest Services</Tab>
                </TabList>
            </div>
            <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <h2>Tab1</h2>
                </div>
            </TabPanel>
    
            <TabPanel>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <h2>Tab2</h2>
                </div>
            </TabPanel>
            </div>
        </Tabs> 
    );
};

export default TimingTab;