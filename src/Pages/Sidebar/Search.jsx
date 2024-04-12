import { Box, Flex, Tooltip,Button,useDisclosure,FormControl,FormLabel,Input} from "@chakra-ui/react";

import { SearchLogo } from "../../assets/constants";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useRef } from "react";
import useSearchUser from "../../hooks/useSearchUser";
import SuggestedUser from "../../SuggestedUsers/SuggestedUser";

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const searchRef = useRef(null)
    const {isLoading,getUserProfile,user} = useSearchUser();
    const handleSearchUser = (e)=>{
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    }
    console.log(user)
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems={"center"}
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
				>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
				</Flex>
			</Tooltip>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInLeft"
            >
                <ModalOverlay />
                <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
                    <ModalHeader>Search user</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input placeholder="trishit" ref={searchRef} />
                            </FormControl>
                            <Flex w={'full'} justifyContent={"flex-end"}>
                                <Button type='submit' ml="auto" size={"sm"} my={4} isLoading={isLoading}   >
                                    Search
                                </Button>
                            </Flex>
                        </form>


                    {
                        user && <SuggestedUser user={user}/>
                    }


                    </ModalBody>
                </ModalContent>
                

            </Modal>

		</>
	);
};

export default Search;