import React, { useEffect, useState } from 'react' 

import {NotificationsLogo,UnlikeLogo} from '../assets/constants'

import CommentLogo from '../assets/constants'
import { Box,Flex,Text,Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react';




function PostFooter({username}) {
    const [liked,setLiked] = useState(false);
    const [likes,setLikes] = useState(1000);

    const handleLike = () =>{
        if(liked){
            setLiked(false);
            setLikes(likes-1);
        }else{
            setLiked(true);
            setLikes(likes+1);
        }
    }
  return (
    <Box mb={10}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2}  mt={2}>
            <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                {!liked ? (<NotificationsLogo/>) : (<UnlikeLogo/>)}
            </Box>
      <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo/>
      </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      <Text fontSize='sm' fontWeight={700}>
        {username}{" "}
        <Text as='span' fontWeight={400}>
            Feeling Good
        </Text>
        <Text fontSize='sm' color={"gray"}>
            View all 1000 comments
        </Text>
      </Text>

      <Flex 
      alignItems={"center"}
      gap={2}
      justifyContent={"space-between"}
      w={"full"}
        >
            <InputGroup>
                <Input variant={"flushed"} placeholder={"Add a comment..."} fontSize={14} />
                <InputRightElement>
                    <Button
                    fontSize={14}
                    color={"blue.500"}
                    fontWeight={600}
                    cursor={"pointer"}
                    _hover={{color:"white"}}
                    bg={"transparent"}
                    >Post

                    </Button>
                </InputRightElement>
            </InputGroup>

      </Flex>
    </Box>
  )
}

export default PostFooter
