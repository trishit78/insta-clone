import React from "react";
import {
  InstagramLogo,
  InstagramMobileLogo,
  SearchLogo,
  NotificationsLogo,
  CreatePostLogo,
} from "../../assets/constants";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Flex, Link, Tooltip,Button } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import pic from "../../../public/profilepic.png";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
function Sidebar() {
  const sidebarItems = [
    {
      icon: <FaHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: <Avatar size={"sm"} name="Trishit" src={pic} />,
      text: "Profile",
      link: "/trishit",
    },
  ];

  const {handleLogout,isLoggingOut,error} = useLogout();



  return (
    <Box
      height="100vh"
      borderRight="1px solid"
      borderColor="whiteAlpha.300"
      py={8}
      position="sticky"
      top="0"
      left="0"
      px={{ base: 2, md: 4 }}
    >
      <Flex direction="column" gap={10}>
        <Link
          to="/"
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <InstagramLogo />
        </Link>

        <Link
          to="/"
          p={2}
          as={RouterLink}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
          cursor="pointer"
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={300}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={{ base: "10", md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

           {/* LOGOUT */}


        <Tooltip
        hasArrow
        label={"Logout"}
        placement='right'
        ml={1}
        openDelay={300}
        display={{ base: "block", md: 'none' }}
    >
        <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            w={{ base: "10", md: "full" }}
            mt={{ base: "8rem", md: "8.6rem" }}
            justifyContent={{ base: "center", md: "flex-start" }}
        >
            <CiLogout size={25} />
            <Button display={{ base: "none", md: "block" }}
            varaint={"ghost"}
            _hover={{bg:"transparent"}}
            isLoading={isLoggingOut}
            >
                Logout
            </Button>
        </Flex>
    </Tooltip>
    
        {/* <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            alignItems={"center"}
            to={"/auth"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={{ base: "150%", md: "8.6rem" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <CiLogout size={25} />
            <Box
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
            >
              Logout
            </Box>
          </Flex>
        </Tooltip> */}
      </Flex>
    </Box>
  );
}

export default Sidebar;
