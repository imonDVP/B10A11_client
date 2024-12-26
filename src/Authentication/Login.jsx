import { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import { toast } from "react-toastify";



const Login = () => {
    //===Context API declare=====
    const contextValue=useContext(authContext);
    const {handleGoogleLogin,handleLogin,user,loading,imon}=contextValue;
    console.log(imon)
    const location=useLocation();
    // console.log(location);
    const navigate=useNavigate();


    //====During loading====
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const from = location.state || '/'



    // ====Email & Password Authentication=====
    const handleLoginSubmit=async (e)=>{
        console.log(e);
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        try{
        //___for saving the user in firebase___
        const result=await handleLogin(email,password);
        console.log(result.user);
        navigate(from, { replace: true })
        toast.success('Signin Successful')
        }
        catch(error){
            console.log(error)
            toast.error(error?.message)
        }
    }
    // ====Google Authentication=====
    const handleGoogleSubmit=async()=>{
        try {
            //====google sign in from firebase=====
            const result = await handleGoogleLogin();
            console.log(result.user)
            toast.success('Signin Successful')
            navigate(from, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    if (user || loading) return;
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-6">
                <h2 className="text-2xl font-semibold text-center">
                    Login your account
                </h2>
                <form onSubmit={handleLoginSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                        autoComplete='value'
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                        autoComplete='value'
                    />
                    {/* {error && (
                        <label className="label text-sm text-red-600">
                        {error}
                        </label>
                    )} */}
                    <label className="label">
                        <Link to='/forgetpassword'>
                            <a href="#" className="btn label-text-alt link link-hover text-blue-700">
                            Forgot password?
                            </a>
                        </Link>
                    </label>
                    </div>
                    <div className="form-control mt-6 gap-4">
                        <button className="btn btn-neutral w-[400px] text-white bg-success rounded-full skeleton">Login</button>
                    </div>
                </form>
                
                <div className=" items-center text-center">
                <p className="flex flex-col items-center text-center font-semibold">
                    <span>Dont’t Have An Account ?{" "} Please{' '}  <Link className="text-red-500" to="/register">Register</Link></span>
                </p>
                <h2 className="mx-auto font-semibold text-green-600 text-lg">Or</h2>
                <button onClick={handleGoogleSubmit}  className="btn btn-neutral w-[400px] text-white bg-success rounded-full skeleton">Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;