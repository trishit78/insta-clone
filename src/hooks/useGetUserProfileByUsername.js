


import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

// const useGetUserProfileByUsername = (username) => {
// 	const [isLoading, setIsLoading] = useState(true);
	
// 	const { userProfile, setUserProfile } = useUserProfileStore();

// 	useEffect(() => {
// 		const getUserProfile = async () => {
// 			setIsLoading(true);
// 			try {
// 				const q = query(collection(firestore, "users"), where("username", "==", username));
//                 console.log(q)
// 				const querySnapshot = await getDocs(q);

//                 console.log("Number of documents:", querySnapshot.size);
//                 console.log("First document data:", querySnapshot.docs[0].data());
// 				if (querySnapshot.empty){
//                     setUserProfile(null);
//                     setIsLoading(false);
//                     return 
//                 } 
// 				console.log(userProfile)
//                 let userDoc=null;
// 				querySnapshot.forEach((doc) => {
// 					userDoc = doc.data();
// 				});

// 				setUserProfile(userDoc);
// 				console.log("User profile set:", userDoc);
// 			} catch (error) {
//                 //toast.error(error.message)
//                 console.log(error.message)
// 			} finally {
// 				setIsLoading(false);
// 			}
// 		};

// 		getUserProfile();
// 	}, [setUserProfile,username]);

// 	return { isLoading, userProfile };
// };

// export default useGetUserProfileByUsername;

const useGetUserProfileByUsername = (username) => {
    const [isLoading, setIsLoading] = useState(true);
    
    const { userProfile, setUserProfile } = useUserProfileStore();

    useEffect(() => {
        const getUserProfile = async () => {
            setIsLoading(true);
            try {
                const q = query(collection(firestore, "users"), where("username", "==", username));
                console.log(q)
                const querySnapshot = await getDocs(q);
                console.log(querySnapshot)

                if (querySnapshot.empty) {
                    setUserProfile(null);
                    setIsLoading(false); // Set loading to false here
                    return;
                }
                console.log(userProfile)
                // Check if querySnapshot.docs[0] exists before accessing data
                const userDocData = querySnapshot.docs[0]?.data();
                if (userDocData) {
                    setUserProfile(userDocData);
                    console.log(userDocData);
                } else {
                    console.error("User document data is undefined");
                }
            } catch (error) {
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        getUserProfile();
    }, [setUserProfile, username]);

    return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
