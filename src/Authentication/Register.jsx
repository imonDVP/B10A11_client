import { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Register = () => {
    const {handleRegister,setUser,updateUserProfile}=useContext(authContext);
    const [errMessage,setErrMessage]=useState('');
    // const navigate = useNavigate();



    const handleRegisterSubmit=async(e)=>{
        console.log(e);
        e.preventDefault();
        //get form data
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log({name,email,photo,password})
        //____For password validation______
        // if(password.length < 6){
        //     setError("Password must contain at least 6 characters")
        //     return
        // }
        // if(!/[a-z]/.test(password)){
        //     setError("Password must contain at least one lowercase letter")
        //     return;
        // }
        // if(!/[A-Z]/.test(password)){
        //     setError("Password must contain at least one uppercase letter")
        //     return;
        // }


        //___for saving the user and updateProfile in firebase_______

        try {
            // ====User Registration/create User in firebase====
            const result = await handleRegister(email, password)
            console.log(result)
            //==user Profile update====
            await updateUserProfile(name, photo)
            setUser({ ...result.user,
                photoURL: photo, 
                displayName: name 
            })
            toast.success('Register Successful')
            // navigate('/')
        } catch (error) {
            const errorMessage=error?.message;
            setErrMessage(errorMessage);
            toast.error(error?.message)
        }
    }






    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                Register your account
                </h2>
                <form onSubmit={handleRegisterSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                    autoComplete='value'
                    />
                </div>
                 {/* ====Show error==== */}
                {errMessage.name && (
                    <label className="label text-sx text-red-500">{errMessage.name}</label>
                )}

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Photo URL</span>
                    </label>
                    <input
                    name="photo"
                    type="text"
                    placeholder="photo-url"
                    className="input input-bordered"
                    required
                    autoComplete='value'
                    />
                </div>
                {/* email input  */}
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
                </div>
                {/* ====Show error==== */}
                {errMessage && <label className="label">{errMessage}</label>}
                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-neutral text-white bg-success rounded-full skeleton">Register</button>
                </div>
                {/* ====Show error==== */}
                {errMessage && <p className="text-red-500">{errMessage}</p>}
                </form>
                <p className="text-center font-semibold">
                Already Have An Account ?{" "}
                <Link className="text-red-500" to="/login">
                    Login
                </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;