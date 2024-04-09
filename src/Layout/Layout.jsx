import { Box, Flex,Spinner } from "@chakra-ui/react";
import React from 'react'
import { useLocation } from "react-router-dom";
import Sidebar from "../Pages/Sidebar/Sidebar";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../firebase/firebase'
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
    const { pathname } = useLocation(); 
    
    const [user,loading] = useAuthState(auth);
    const sidebar = pathname !=="/auth" && user;
    const navbar = !user && !loading && pathname !=='/auth';

    const checkingUserIsAuth = !user && loading;
    if(checkingUserIsAuth) return <PageLayoutSpinner/>;

    return (
        <Flex  flexDir={navbar ? "column" :"row"} >
            {
                sidebar ?  (
                    <Box w={{ base: "70px", md: "240px" }}>
                        <Sidebar />
                    </Box>
                ) : null
            }
            {
                navbar ? <Navbar/> :null
            }


            <Box flex={1} w={{ base: "calc(100%-70px", md: "calc(100%-240px)" }} mx={"auto"}>
                {children}
            </Box>
        </Flex>
    )
}

export default Layout;

const PageLayoutSpinner = () =>{
    return (
        <Flex flexDir='column' h='100vh' alignItems={"center"} justifyContent={"center"}>
            <Spinner size='xl'/>
        </Flex>

    )
}
