import React, { useState } from 'react'
import userAuthStore from '../store/authStore';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { firestore, storage } from '../firebase/firebase';
import useUserProfileStore from '../store/userProfileStore'

function useEditProfile() {
  const [isUpdating,setIsUpdating] = useState(false);
  const authUser = userAuthStore((state)=>state.user);
  const setAuthUser = userAuthStore((state)=>state.setUser);
  const setUserProfile = useUserProfileStore((state)=>state.setUserProfile)

  const editProfile = async(inputs,selectedFile)=>{
    if(isUpdating ||!authUser) return ;
    setIsUpdating(true)

    const storageRef = ref(storage,`profilePics/${authUser.uid}`)
    const userDocRef = doc(firestore,"users",authUser.uid)
    let URL=""
    try {
        if(selectedFile){
            await uploadString(storageRef,selectedFile,"data_url")
            URL=await getDownloadURL(ref(storage,`profilePics/${authUser.uid}`))
        }

        const updatedUser = {
            ...authUser,
            fullName:inputs.fullName|| authUser.fullName,
            username:inputs.userName|| authUser.userName,
            bio:inputs.bio||authUser.bio,
            profilePicURL:URL || authUser.profilePicURL,
        }

        await updateDoc(userDocRef,updatedUser)
        localStorage.setItem("user-info",JSON.stringify(updatedUser))
        setAuthUser(updatedUser)
        setUserProfile(updatedUser)
        toast.success("Profile Updated Succesfully")
        
        
    } catch (error) {
        toast.error(error.message)
    }
  }
  return {editProfile,isUpdating}
}

export default useEditProfile
