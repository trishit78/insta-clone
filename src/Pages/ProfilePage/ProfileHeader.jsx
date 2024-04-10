import React from 'react' 

import { Flex,AvatarGroup,Avatar,VStack,Text,Button,useDisclosure } from '@chakra-ui/react'

import userAuthStore from '../../store/authStore'
import useUserProfileStore from '../../store/userProfileStore';
import EditProfile from './EditProfile';

function ProfileHeader() {

    const authUser = userAuthStore((state) =>state.user);
    //console.log(authUser.userName)
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const  {userProfile} = useUserProfileStore();
    // console.log(userProfile)
    // const visitingOwnProfileAndAuth = authUser && authUser.userName===userProfile.userName;
    
  return (
    <Flex gap={{base:4,sm:10}} py={10} direction={{base:"column",sm:"row"}} >
        <AvatarGroup
            size={{base:'xl',md:"2xl"}}
            justifySelf={"center"}
            alignSelf={"flex-start"}
            mx={"auto"}
        >
            <Avatar name="As a programmer" src={authUser.
profilePicURL} alt='As a programmer logo' />
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
            <Flex
                gap={4}
                direction={{base:"center",sm:"flex-start"}}
                alignItems={'center'}
                w={"full"}
            >
                <Text 
                    fontSize={{base:'sm',md:'lg'}}
                >{authUser.userName}
                </Text>

{/* {
    visitingOwnProfileAndAuth ? (
<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"white"} color={'black'} _hover={{bg:"whiteAlpha.800"}} 
                        size={{base:'xs',md:"sm"}}
                        onClick={onOpen}
                    >Edit Profile
                    </Button>
                </Flex>
    ):(
        <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"white"} color={'black'} _hover={{bg:"whiteAlpha.800"}} 
                        size={{base:'xs',md:"sm"}}
                        onClick={onOpen}
                    >Follow
                    </Button>
                </Flex>
    )
} */}

<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                    <Button bg={"white"} color={'black'} _hover={{bg:"whiteAlpha.800"}} 
                        size={{base:'xs',md:"sm"}}
                        onClick={onOpen}
                    >Edit Profile
                    </Button>
                </Flex>






                
            </Flex>




            <Flex alignItems={"center"} gap={{base:2,sm:4}}>
                <Text fontSize={{base:"xs",md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>{authUser.posts.length}</Text>
                    Posts
                </Text>
                <Text fontSize={{base:"xs",md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>{authUser.followers.length}</Text>
                    Followers
                </Text>
                <Text fontSize={{base:"xs",md:"sm"}}>
                    <Text as="span" fontWeight={"bold"} mr={1}>{authUser.following.length}</Text>
                    Following
                </Text>
            </Flex>


            <Flex alignItems={"center"} gap={4}>
                <Text fontSize={"sm"} fontWeight={"bold"}>{authUser.fullName}</Text>
            </Flex>

            <Text fontSize={"sm"} overflow={'hidden'}>

            {authUser.bio}

            </Text>
        </VStack>
                {isOpen && <EditProfile  isOpen={isOpen} onClose={onClose}/>}
    </Flex>
  )
}

export default ProfileHeader
