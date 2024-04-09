import React from 'react' 

import { Flex,Image,Text } from '@chakra-ui/react'
import google from "../../../public/google.png";
function GoogleAuth() {
  return (
    <>
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
    </>
  )
}

export default GoogleAuth
