import React from 'react'
import { FaComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { GridItem,Flex,Avatar ,Text,Image, useDisclosure,Box,Divider,VStack} from '@chakra-ui/react';
import { MdDelete } from "react-icons/md";
import PostFooter from '../../FeedPosts/PostFooter';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import Comment from './Comment';
function ProfilePost({img}) {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <>
        
    <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1/1}
        onClick={onOpen}

    >
        <Flex
            opacity={0}
            _hover={{opacity:1}}
            position={"absolute"}
            top={0}
            left={0}
            bottom={0}
            right={0}
            bg={"blackAlpha.700"}
            transition={"all 0.3s ease"}
            zIndex={1}
            justifyContent={"center"}
        >
            <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={50}
            >
                <Flex>
                <AiFillHeart size={20} />
                <Text fontWeight={"bold"} ml={2}>
                    7
                </Text>

                </Flex>

                <Flex
                alignItems={"center"}
                justifyContent={"center"}
                gap={50}
            >
                <Flex>
                <FaComment size={20} />
                <Text fontWeight={"bold"} ml={2}>
                    7
                </Text>

                </Flex>
            </Flex>
            </Flex>

        </Flex>

        <Image src={img} alt='profile post' w={'100%'} h={'100%'} objectFit={"cover"} />
      
    </GridItem>

    <Modal isOpen={isOpen} onClose={onClose}
        isCentered={true}
        size={{base:"3xl",md:"4xl"}}
    >
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody bg={"black"} pb={5}>
            <Flex 
                gap="4" w={{base:"90%",sm:"70%",md:"full"}}
                mx={"auto"}
            >
                <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
                >
                    <Image src={img} alt="image post" />
                </Box>
                <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}}  >
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Flex alignItems={"center"} gap={4}>
                            <Avatar src='/profilepic.png' size={'sm'} name='Trishit' />
                            <Text fontWeight={"bold"} fontSize={12}>
                                Trishit
                            </Text>                        
                        </Flex> 
                        <Box _hover={{bg:"whiteAlpha.300",color:"red.600"}} borderRadius={4} p={1} >
                        <MdDelete size={20} cursor={"pointer"} />
                        </Box>
                    </Flex>



                    <Divider my={4} bg={"gray.500"} />
                    <VStack w="full" alignItems={"start"} maxH={"350px"} overFlowY={"auto"} >
                        <Comment 
                            createdAt='1d ago'
                            username='john'
                            profilePic='https://images.pexels.com/photos/2860740/pexels-photo-2860740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                            text={"Nice pic"}
                        />
                        <Comment 
                            createdAt='12hr ago'
                            username='kane'
                            profilePic='https://images.pexels.com/photos/3597931/pexels-photo-3597931.jpeg?auto=compress&cs=tinysrgb&w=600'
                            text={"Great"}
                        />
                        <Comment 
                            createdAt='3h ago'
                            username='james'
                            profilePic='https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=600'
                            text={"Beatiful"}
                        />
                    </VStack>

                    <Divider my={4} bg={"gray.500"} />

                <PostFooter isProfilePage={true} />
                </Flex>
            </Flex>
          </ModalBody>

          
        </ModalContent>
      </Modal>


    </>
  )
}

export default ProfilePost
