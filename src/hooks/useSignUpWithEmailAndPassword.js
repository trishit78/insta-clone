import React from 'react' 

import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import {collection, doc,setDoc,query,where,getDocs} from 'firebase/firestore'
import { toast } from "react-toastify";
import userAuthStore from '../store/authStore';
function useSignUpWithEmailAndPassword() {
  
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);

    const loginUser = userAuthStore(state=>state.login)
    


    const signup = async(inputs)=>{
        
        if(!inputs.email ||!inputs.password ||!inputs.userName ||!inputs.fullName ){
            toast.error("Please fill all the input forms")
            return;
        }
        const usersRef = collection(firestore,"users");
        const q = query(usersRef,where("username","==",inputs.userName));
        const querySnapshot = await getDocs(q);
        if(!querySnapshot.empty){
            toast.error("Username already exists");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                toast.error(error.message)
                return;
            }
            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    userName:inputs.userName,
                    fullName:inputs.fullName,
                    bio:"",
                    profilePicURL:"",
                    followers:[],
                    following:[],
                    posts:[],
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore,"users",newUser.user.uid),userDoc);
                toast.info("user logged in")
                localStorage.setItem("user-info",JSON.stringify(userDoc));

                loginUser(userDoc)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return {loading,error,signup}
}

export default useSignUpWithEmailAndPassword;
