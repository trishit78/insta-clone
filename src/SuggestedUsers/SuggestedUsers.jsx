import React from 'react'

import SuggestedHeader from './SuggestedHeader'
import { VStack,Flex,Text,Box,Link } from '@chakra-ui/react'
import SuggestedUser from './SuggestedUser'
import useGetSuggestedUsers from '../hooks/useGetSuggestedUsers'
function SuggestedUsers() {

  const {isLoading,suggestedUsers} = useGetSuggestedUsers();

  if(isLoading) return null;


  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
            See All
        </Text>
      </Flex>

      {
        suggestedUsers.map((user)=>(
          <SuggestedUser user={user} key={user.id} />
        ))
      }

      {/* <SuggestedUser name="john" followers={2342} avatar='https://images.pexels.com/photos/2860740/pexels-photo-2860740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
      <SuggestedUser name="kittie" followers={4231} avatar='https://images.pexels.com/photos/3597931/pexels-photo-3597931.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <SuggestedUser name="mike" followers={4352} avatar='https://images.pexels.com/photos/2896428/pexels-photo-2896428.jpeg?auto=compress&cs=tinysrgb&w=600'/>
 */}
      <Box
      fontSize={12}
      color={"gray.500"}
      mt={5}
      alignSelf={"start"}
      >
        @ 2024 made by {" "}
        <Link href="https://www.linkedin.com/in/trishit-bhowmik-a0117421b/" target='_blank' color='blue.500' fontSize={14}>
            Trishit Bhowmik
        </Link>

      </Box>
    </VStack>
  )
}

export default SuggestedUsers
