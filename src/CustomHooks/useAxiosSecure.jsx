import axios from "axios";
import { useNavigate } from 'react-router-dom'
import useAuth from "./useAuth";
import { useEffect } from "react";



// ====It is an Intance of axios=====
const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    withCredentials:true,
})


//====Making Customs Hooks======
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(
            (res)=>{
                return res;
            },
            async(error)=>{
                console.log('error caught from our very own axios interceptor',error.response);
                if (error.response.status === 401 || error.response.status === 403) {
                    // ====for logout for error====
                    logOut()
                    //===== navigate to login=====
                    navigate('/login')
                }
            }
        )
    },[navigate,logOut])
    return axiosInstance;
}
export default useAxiosSecure