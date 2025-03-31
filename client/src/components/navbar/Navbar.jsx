import React, { useState } from "react";
import { 
  Box,
  Flex,
  IconButton,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  List,
  ListItem,
  useDisclosure,
  useColorMode,
  Link as ChakraLink,
  Text,
  useBreakpointValue,
  useColorModeValue // Import this
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLogged] = useState(false); // Simulating login state

  // Get colors from custom theme based on current color mode
  const bgColor = useColorModeValue('light.paper', 'dark.paper');
  const textColor = useColorModeValue('light.text.primary', 'dark.text.primary');
  const hoverBgColor = useColorModeValue('light.primary', 'dark.primary');
  const accentColor = useColorModeValue('universalAccent', 'universalAccent');

  // Navigation items
  const navItems = [
    { text: "Home", path: "/" },
    { text: "Feed", path: "/feed" },
    ...(isLogged ? [{ text: "Profile", path: "/profile" }] : [{ text: "Login", path: "/login" }]),
  ];

  return (
    <>
      {/* Navbar for all screens */}
      <Box 
        as="nav"
        bg={bgColor}
        color={textColor}
        boxShadow="md"
        position="sticky"
        top={0}
        zIndex="sticky"
      >
        <Flex 
          as="header" 
          align="center" 
          justify="space-between" 
          px={4} 
          py={3}
          maxW="container.xl"
          mx="auto"
        >
          {/* Mobile menu button */}
          <IconButton
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            variant="ghost"
          />

          {/* Logo */}
          <ChakraLink 
            as={RouterLink} 
            to="/" 
            fontSize="xl" 
            fontWeight="bold"
            color={accentColor}
            _hover={{ textDecoration: "none" }}
          >
            Prohori
          </ChakraLink>

          {/* Desktop navigation */}
          <Flex display={{ base: "none", md: "flex" }} gap={4} >
            {navItems.map((item, index) => (
              <Button
                key={index}
                as={RouterLink}
                to={item.path}
                variant="ghost"
                color={textColor}
                _hover={{ bg: hoverBgColor, opacity: 0.8 }}
              >
                {item.text}
              </Button>
            ))}
          </Flex>

          {/* Theme toggle */}
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <MdDarkMode /> : <MdOutlineLightMode />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
      </Box>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton />
          <DrawerBody pt={10}>
            <List spacing={3}>
              {navItems.map((item, index) => (
                <ListItem key={index} onClick={onClose}>
                  <Button
                    as={RouterLink}
                    to={item.path}
                    w="full"
                    variant="ghost"
                    justifyContent="flex-start"
                  >
                    {item.text}
                  </Button>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
