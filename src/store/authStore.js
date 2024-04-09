import {create} from "zustand";

const userAuthStore = create((set)=>({
    user:JSON.parse(localStorage.getItem("user-info")),
    login:(user)=>set({user}),
    logoout:()=>set({user:null}),
    setUser:(user)=>set({user})
}))

export default userAuthStore;
