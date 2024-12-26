import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';

const MainLayout = () => {
    return (
        <div  className="container px-4 mx-auto">
        {/* Static Section */}
        <Navbar></Navbar>

        {/* Dynamic Section */}
        <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
        </div>

        {/* Static Section */}
        <Footer></Footer>
    </div>
    );
};

export default MainLayout;