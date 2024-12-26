import { createContext, useEffect, useState } from 'react';
import { toast } from "react-toastify";
import auth from './../firebase/firebase.config';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile 
} from 'firebase/auth';
import axios from 'axios';







// eslint-disable-next-line react-refresh/only-export-components
export const authContext=createContext(null)

const AuthProvider = (props) => {
    // ====Context API testing=====
        const imon='A Student of  Batch 10 of Programming Hero from AuthProvider';
    // ===========================
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)
    // console.table({user,loading});

    // _____Authentication start_____________
    //=========Email & Password Register========
    //===Register=CreateUser=====
    const handleRegister=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //=========Email & Password Login========
    const handleLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ============GoogleLogin===============
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    // ===========Logout===================
    const handleLogout=async ()=>{
        setLoading(true);
        // return signOut(auth);
        try {
            await signOut(auth);
            toast.success('successfully Log-out');
            setUser(null);
        } catch (err) {
            toast.info('Log-out',err.message)
        }
    }
    // _____Authentication end_______________

    // ====Update user profile at firebse=====
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    //____The following Observer on the Auth object always observes on user.Any kind of user's change,The observer record the the change,then the useEffect is rerendered___ 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,async(currentUser)=>{
            // console.log('Current User:',currentUser)
            if(currentUser?.email){
                setUser(currentUser);
                // ====get token from server using email start====
                //----make token request--------
                const { data } = await axios.post(
                    `${import.meta.env.VITE_API_URL}/jwt`,
                    {email: currentUser?.email},
                    { withCredentials: true }
                )
                console.log("Token:",data)
                // ====get token from server using email end====
            }
            else{
                setUser(currentUser)
                const { data } = await axios.get(
                    `${import.meta.env.VITE_API_URL}/logout`,
                    { withCredentials: true }
                )
                console.log(data);
            }
            setLoading(false);
        })


        // ===if this website is changed/unmount,the observer is inactive by the following statement because parameter is null======
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        imon,
        user,
        setUser,
        loading,
        setLoading,
        updateUserProfile,
        handleRegister,
        handleLogin,
        handleLogout,
        handleGoogleLogin,
    }

        return (
            <div>
                <authContext.Provider value={authInfo}>
                    {
                        // eslint-disable-next-line react/prop-types
                        props.children
                    }
                </authContext.Provider>
            </div>
        );
};

export default AuthProvider;