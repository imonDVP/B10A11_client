import { Link } from "react-router-dom";


const ErrorMessage = () => {
    return (
        <div className="min-h-screen grid grid-flow-col justify-center items-center bg-slate-400">
            <h2 className="text-5xl text-red-700 font-extrabold">Oops!!! Not Found Page || 404 Page</h2>
            <Link to='/'
                className='w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600'
                >
                Take me home
            </Link>
        </div>
    );
};

export default ErrorMessage;