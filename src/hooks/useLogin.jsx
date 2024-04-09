// import React from 'react'

// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { auth, firestore } from '../firebase/firebase';
// import { toast } from "react-toastify";
// import { getDoc } from 'firebase/firestore';
// import userAuthStore from '../store/authStore';

// function useLogin() {
//     const [
//         signInWithEmailAndPassword,
//         user,
//         loading,
//         error,
//       ] = useSignInWithEmailAndPassword(auth);

//       const loginUser = userAuthStore((state)=>state.login);

//     const login = async(inputs)=>{
//         if(!inputs.email || !inputs.password){
            
//         }
//         try {
//             const userCred = await signInWithEmailAndPassword(inputs.email,inputs.password);
//             if(userCred){
//                 const docRef = doc(firestore,"users",userCred.user.uid);
//                 const docSnap = await getDoc(docRef);
//                 localStorage.setItem("user-info",JSON.stringify(docSnap.data()));
//                 loginUser(docSnap.data());
//             }
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
//     return {loading,error,login};
// }

// export default useLogin












import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

const useLogin = () => {
	
	const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => state.login);

	const login = async (inputs) => {
		if (!inputs.email || !inputs.password) {
			toast.error("Please fill all the input field")
		}
		try {
			const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

			if (userCred) {
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
				loginUser(docSnap.data());
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return { loading, error, login };
};

export default useLogin;