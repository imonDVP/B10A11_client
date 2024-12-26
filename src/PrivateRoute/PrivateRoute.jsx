import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from './../components/LoadingSpinner';
import { authContext } from "../AuthProvider/AuthProvider";



// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(authContext)
    const location=useLocation();
    console.log(location)

    if(loading){
        return <LoadingSpinner></LoadingSpinner>;
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace={true} />;
};

export default PrivateRoute;