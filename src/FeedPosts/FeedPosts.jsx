
import React, { useEffect, useState } from 'react' 
import { Container,Box,Flex, VStack,Skeleton,SkeletonCircle } from '@chakra-ui/react' 
import FeedPost from './FeedPost' 
function FeedPosts() {


  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
      setTimeout(()=>{
          setIsLoading(false)
      },2000)
  },[])

  return (
    <>
      <Container  maxW={Container.sm} py={10} px={2}>

      {isLoading && [0,1,2,3].map((_,idx)=>(
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap="2">
            <SkeletonCircle size='10' />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={'200px'} />
              <Skeleton height='10px' w={'200px'} />
            </VStack>
          </Flex>
          <Skeleton w={'full'}>
            <Box h={"500px"}> Contents Wrapped</Box>
          </Skeleton>

        </VStack>
      ))}

        {!isLoading && (

          <>
          <FeedPost img='./img1.png' username='josh' avatar='./img1.png'/>
            <FeedPost img='./img2.png' username='trishit' avatar='./img2.png'/>
            <FeedPost img='./img3.png' username='nope' avatar='./img3.png'/>
            <FeedPost img='./img4.png' username='james' avatar='./img4.png'/>
            
          </>

            
            )}
      </Container>
    </>
  )
}

export default FeedPosts
