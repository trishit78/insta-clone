import React from "react";

import logo from "../../../public/logo.png";

import GoogleAuth from "./GoogleAuth";
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
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";
import Signup from "./Signup";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const notify = () => toast("Wow so easy !");

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} mt={2} >
        <VStack spacing={2}>
          <Image src={logo} h={24} cursor={"pointer"} alt="Instagram" />

          {isLogin ? <Login /> : <Signup />}

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

          <GoogleAuth />
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
