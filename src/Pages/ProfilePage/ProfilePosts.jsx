import React, { useEffect,useState } from 'react' 


import { VStack,Skeleton,Box,Grid } from '@chakra-ui/react';
import ProfilePost from './ProfilePost';


function ProfilePosts() {
  
  const [isLoading,setIsLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false);
    },2000);
  },[]);
    return (
    <Grid 
        templateColumns={{
            sm:"repeat(1,1fr)",
            md:"repeat(3,1fr)",
        }}
        gap={1}
        columnGap={1}
    >
        {isLoading && (
            [0,1,2,3,4,5].map((_,idx) => (
                <VStack key={idx} alignItems={"flex-start"} gap={4} >
                    <Skeleton w={"full"}>
                        <Box h="300px">Content wrapped</Box>
                    </Skeleton>
                </VStack>
            ))
        )}
        {
            !isLoading && (
                <>
                    <ProfilePost img='/img1.png' />
                    <ProfilePost img='/img2.png'  />
                    <ProfilePost img='/img3.png' />
                    <ProfilePost img='/img4.png' />
                </>
            )
        }
      
    </Grid>
  )
}

export default ProfilePosts
