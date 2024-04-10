import React from 'react' 

import { Flex,Image,Text } from '@chakra-ui/react'
import google from "../../../public/google.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../../firebase/firebase'
import {collection, doc,setDoc,query,where,getDoc} from 'firebase/firestore'
import userAuthStore from '../../store/authStore';
import { toast } from 'react-toastify';



function GoogleAuth({prefix}) {

    const [signInWithGoogle,user,loading,error] = useSignInWithGoogle(auth);
    const loginUser = userAuthStore((state)=>state.login);

    
    const handleGoogleAuth = async()=>{
        try {
            const newUser = await signInWithGoogle();
            if(!newUser && error){
                toast.error(error.message)
                return
            }

            const userRef = doc(firestore,"users",newUser.user.uid);
            const userSnap = await getDoc(userRef);

            if(userSnap.exists()){
                const userDoc = userSnap.data();
                localStorage.setItem("user-info",JSON.stringify(userDoc));
                loginUser(userDoc);
            }
            else{
                const userDoc = {
                    uid:newUser.user.uid,
                    email:newUser.user.email,
                    userName:newUser.user.email.split("@")[0],
                    fullName:newUser.user.displayName,
                    bio:"",
                    profilePicURL:newUser.user.photoURL,
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

    return (
    <>
     <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
        onClick={handleGoogleAuth}
    >
            <Image src={google} w={5} alt="Google Logo" />
            <Text mx="2" color={"blue.500"}>
              {prefix} In With Google
            </Text>
          </Flex> 
    </>
  )
}

export default GoogleAuth
