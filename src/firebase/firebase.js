
import { initializeApp } from "firebase/app"; 

import  {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAwigG1JtaQOnSI54LAAh3awCq0lGnPJ8I",
  authDomain: "insta-clone-b690c.firebaseapp.com",
  projectId: "insta-clone-b690c",
  storageBucket: "insta-clone-b690c.appspot.com",
  messagingSenderId: "727653462421",
  appId: "1:727653462421:web:442258edd18d965bbc469c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth,firestore,storage}