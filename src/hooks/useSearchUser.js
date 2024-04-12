import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { firestore } from '../firebase/firebase';

function useSearchUser() {
  const [isLoading,setIsLoading] = useState(false);
  const [user,setUser] = useState(null)
  const getUserProfile= async (username)=>{
    setIsLoading(true)
    try {
        const q = query(collection(firestore,"users"),where("username","==",username))
        const querySnapShot = await getDocs(q)
        if(querySnapShot.empty){
            toast.error("User not found")
            return
        
        }

        querySnapShot.forEach((doc)=>{
            setUser(doc.data())
        })
    } catch (error) {
        toast.error(error.message)
        setUser(null)
    }finally{
        setIsLoading(false)
    }
  }
  return {isLoading,getUserProfile,user}
}

export default useSearchUser
