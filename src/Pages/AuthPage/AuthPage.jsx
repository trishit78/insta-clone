import React from 'react' 
import authPhoto from '../../../public/auth.png'
import microsoftPhoto from '../../../public/microsoft.png'
import playStore from '../../../public/playstore.png'
import AuthForm from './AuthForm'
import { Container,Flex,VStack,Box,Image } from '@chakra-ui/react'
function AuthPage() {
  return (
    <>
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>

                <Box display={{base:"none",md:"block"}}>
                    <Image src={authPhoto} h={550} alt="Phone Img" />
                </Box>

                <VStack spacing={4} align={"stretch"}>
                    <AuthForm/>
                    {/* <h1>AuthForm</h1> */}
                    <Box textAlign={"center"}>
                        Get the App
                    </Box>
                    <Flex gap={5} justifyContent={"center"} mb={2}>
                        <Image src={microsoftPhoto} h={"10"} alt='Microsoft logo' />
                        <Image src={playStore} h={"10"} alt='Playstore logo' />
                        
                    </Flex>
                </VStack>

                </Flex>
            </Container>    
        </Flex>   
    </>
  )
}

export default AuthPage
