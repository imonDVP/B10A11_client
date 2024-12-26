import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import Home from '../pages/Home';
import Login from './../Authentication/Login';
import Register from './../Authentication/Register';
import AllServices from '../pages/AllServices';
import AddService from '../pages/AddService';
import ManageService from '../pages/ManageService';
import BookedServices from '../pages/BookedServices';
import ServicesToDo from '../pages/ServicesToDo';
import ServiceDetails from '../pages/ServiceDetails';
import PurchaseCard from '../pages/PurchaseCard';
import PurchaseServiceEdit from '../pages/PurchaseServiceEdit';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorMessage from '../components/ErrorMessage';



const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorMessage></ErrorMessage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allservices',
                element:<AllServices></AllServices>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path:'/manageservice',
                element:<PrivateRoute><ManageService></ManageService></PrivateRoute>,
            },
            {
                path:'/bookedservices',
                element:<PrivateRoute><BookedServices></BookedServices></PrivateRoute>,
            },
            {
                path:'/servicestodo',
                element:<PrivateRoute><ServicesToDo></ServicesToDo></PrivateRoute>,
            },
            {
                path:'/service/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
            },
            {
                path:'/purchaseservice/:id',
                element:<PurchaseCard></PurchaseCard>
            },
            {
                path:'/purchase-service-edit/:id',
                element:<PurchaseServiceEdit></PurchaseServiceEdit>
            },
        ]
    }
])
export default routes;