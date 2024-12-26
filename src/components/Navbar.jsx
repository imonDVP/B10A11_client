import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import logo from '../assets/logo.png'
import { useTheme } from "../DarkModeHook/useTheme";
import sun from '../assets/icons/sun.gif'
import moon from '../assets/icons/moon.gif'


const Navbar = () => {
    const { changeTheme, mode  } = useTheme()
    const contextValue=useContext(authContext);
    const {handleLogout,user}=contextValue;


    return (
        <div className="navbar bg-slate-300 text-black font-bold dark:bg-black dark:text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[50] mt-3  shadow ">
                        <NavLink to='/'><li><a className="">Home</a></li></NavLink>
                        <NavLink to='/allservices'><li><a>All Services</a></li></NavLink>
                        {user &&
                        <li>
                            <a>Dashboard</a>
                            <ul className="w-40">
                                <NavLink to='/addservice'><li><a>Add Service</a></li></NavLink>
                                <NavLink to='/manageservice'><li><a>Manage Service</a></li></NavLink>
                                <NavLink to='/bookedservices'><li><a>Booked Services</a></li></NavLink>
                                <NavLink to='/servicestodo'><li><a>Service-To-Do</a></li></NavLink>
                            </ul>
                        </li>
                        }
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex justify-start items-center gap-4">
                        <img src={logo} className="w-10 h-10" alt="" />
                        <a className="font-extrabold text-black  dark:bg-black dark:text-white text-xl">IT Service Point</a>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-[50]">
                    <NavLink to='/'><li><a>Home</a></li></NavLink>
                    <NavLink to='/allservices'><li><a>All Services</a></li></NavLink>
                    {user &&
                    <li>
                        <details>
                        <summary>Dashboard</summary>
                        <ul className="w-40 text-black">
                            <NavLink to='/addservice'><li className="text-black"><a>Add Service</a></li></NavLink>
                            <NavLink to='/manageservice'><li><a>Manage Service</a></li></NavLink>
                            <NavLink to='/bookedservices'><li><a>Booked Services</a></li></NavLink>
                            <NavLink to='/servicestodo'><li><a>Service-To-Do</a></li></NavLink>
                        </ul>
                        </details>
                    </li>
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div  className="animate__animated animate__bounceInDown">
                    {user && user?.email ? (
                    <div>
                    <img title={user?.email} className="w-12 h-12 rounded-full" src={user?.photoURL} referrerPolicy='no-referrer' alt="" />
                    </div>
                ) :''}
                </div>
                <div className='flex gap-2'>
                    {user && user?.email ? (
                        <NavLink to='/login' className="btn btn-neutral text-white bg-success rounded-full skeleton">
                            <button onClick={handleLogout} className=" btn-neutral ">
                                Log-Out
                            </button>
                        </NavLink>
                        ) : (
                        <Link to='/login' className="btn btn-neutral text-white bg-success rounded-full skeleton">
                            Login
                        </Link>
                        
                        )}
                </div>
                {/* ====Dark Mode Button===== */}
                <button onClick={changeTheme}>
                    {
                        mode==="dark" ?
                        <img className="" src={sun} alt="" /> :
                        <img className="bg-slate-400" src={moon} alt="" />
                    }
                </button>
        </div>
        </div>
    );
};

export default Navbar;