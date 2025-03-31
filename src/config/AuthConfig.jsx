import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "./baseUrl.jsx";
import { 
  Box, 
  Flex, 
  Spinner, 
  Text, 
  useColorModeValue 
} from "@chakra-ui/react";

const VERIFY_AUTH_URL = `${BASE_URL}/auth/verify`;

const AuthConfig = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const textColor = useColorModeValue("light.text.primary", "dark.text.primary");

  useEffect(() => {
    const verifyUser = async () => {
      const sessionKey = localStorage.getItem("sessionKey");
      if (!sessionKey) {
        setIsAuthenticated(false);
        toast.error("You are not logged in");
        return;
      }
      toast.success("You are logged in");
      // try {
      //   const response = await axios.post(VERIFY_AUTH_URL, {}, {
      //     headers: {
      //       Authorization: `Bearer ${sessionKey}`,
      //     },
      //   });

      //   if (response.data.success) {
      //     setIsAuthenticated(true);
      //   } else {
      //     setIsAuthenticated(false);
      //   }
      // } catch (error) {
      //   console.error("Authentication failed:", error);
      //   setIsAuthenticated(false);
      // }
    };

    verifyUser();
  }, []);

  if (isAuthenticated === null) {
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        textAlign="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="primary.500"
          size="xl"
        />
        <Text 
          fontSize="xl" 
          mt={4} 
          color={textColor}
          fontWeight="medium"
        >
          Verifying authentication, please wait...
        </Text>
      </Flex>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthConfig;