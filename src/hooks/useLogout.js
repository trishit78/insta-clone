import React from 'react' 

import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import { toast } from "react-toastify";
import userAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

function useLogout() {
    const [signOut,isLoggingOut,error] = useSignOut(auth);
    const logoutUser = userAuthStore(state=> state.logout);
    const navigate = useNavigate();

    const handleLogout = async()=>{
        try{
            await signOut();
            localStorage.removeItem('user-info')
            logoutUser();
            navigate('/auth')
            toast.info("Logged Out")


        }
        catch(error){
           console.log(error.message);
        }
    }
  return {handleLogout,error,isLoggingOut}
}

export default useLogout
