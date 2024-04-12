import React, { useEffect, useState } from 'react'
import userAuthStore from '../store/authStore'
import { toast } from 'react-toastify'
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { firestore } from '../firebase/firebase'

function useGetSuggestedUsers() {
  const [isLoading,setIsLoading] = useState(true)
  const [suggestedUsers,setSuggestedUsers] = useState([])
  const authUser = userAuthStore(state=>state.user)
  useEffect(()=>{
    
    const getSuggestedUsers = async()=>{
        setIsLoading(true);
        try {
            const usersRef = collection(firestore,"users")
            const q = query(
                usersRef,
                where("uid","not-in",[authUser.uid,...authUser.following]),
                orderBy("uid"),
                limit(3)
            )
            const querySnapShot = await getDocs(q)
            const users = [];
            querySnapShot.forEach(doc =>{
                users.push({...doc.data(),id:doc.id})
            })
            setSuggestedUsers(users)
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setIsLoading(false)
        }
    }
    if(authUser) getSuggestedUsers()
  },[authUser])



  return {isLoading,suggestedUsers}
}

export default useGetSuggestedUsers
