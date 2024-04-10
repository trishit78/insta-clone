import React from 'react' 

import { Flex,Avatar,Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import userAuthStore from '../store/authStore';
function SuggestedHeader() {
  const {handleLogout,isLoggingOut} = useLogout();
  const authUser = userAuthStore((state) =>state.user);
  if(!authUser) return null;
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to={`${authUser.userName}`}>
          <Avatar name={authUser.userName} size={'sm'} src={authUser.profilePicURL} />
          </Link>
          <Link to={`${authUser.userName}`}>
          <Text fontSize={12} fontWeight={"bold"}>
            {authUser.userName}
          </Text>
          </Link>
            
        </Flex>
        <Button
        size={"xs"}
        background={"transparent"}
        _hover={{background:"transparent"}}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        onClick={handleLogout}
        isLoading={isLoggingOut}
        >
          Logout
        </Button>
      </Flex>
    </>
  )
}

export default SuggestedHeader
