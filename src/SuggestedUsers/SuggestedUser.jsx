import React from 'react' 


import { useState } from 'react';
import { Avatar,Flex,VStack,Box,Button } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import userAuthStore from '../store/authStore';
function SuggestedUser({user}) {

    const authUser = userAuthStore((state)=>state.user)
    //console.log(authUser.followers)
    console.log(user)
    const [isFollowed,setIsFollowed] = useState(false);
  return (
    <>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>


                {/* TO BE CHANGED */}


                <Avatar src={user.profilePicURL   }  size={"md"} />
                <VStack spacing={2}>
                    <Box fontSize={12} fontWeight={"bold"} alignSelf={"flex-start"}>
                        {user.fullName}
                    </Box>
                    <Box fontSize={11} color={"gray.500"}>
                        {user.followers.length} followers
                    </Box>
                </VStack>
            </Flex>
            <Button 
            fontSize={13}
            bg={"transparent"}
            p={0}
            h={"max-content"}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            _hover={{color:"white"}}
            onClick={()=>setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "UnFollow" :"Follow"}
            </Button>
        </Flex> 
    </>
  )
}

export default SuggestedUser
