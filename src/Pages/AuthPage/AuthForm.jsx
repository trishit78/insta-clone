import React from "react";

import logo from "../../../public/logo.png";
import google from "../../../public/google.png";
import { useState } from "react";
import {
  Container,
  Flex,
  VStack,
  Box,
  Image,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
    const navigate=useNavigate();
  const [inputs,setInputs] = useState({
    email:'',
    password:'',
    confirmPassword:''
  });
  const notify = () => toast("Wow so easy !");
  const handleAuth=()=> {
    if(!inputs.email || !inputs.password){
        toast.error("Please fill the input texts")
        return;
    }
    navigate("/");

  }

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src={logo} h={24} cursor={"pointer"} alt="Instagram" />
          <Input placeholder="Email" fontSize={14} type="email" value={inputs.email} onChange={(e)=>setInputs({...inputs,email:e.target.value})} />
          <Input placeholder="Password" fontSize={14} type="password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>

          {!isLogin ? (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={"14"}
            onClick={handleAuth}
          >
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color="white">
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src={google} w={5} alt="Google Logo" />
            <Text mx="2" color={"blue.500"}>
              Log In With Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an Account ?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default AuthForm;
