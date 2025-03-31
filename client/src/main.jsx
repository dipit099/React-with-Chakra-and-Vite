import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // Chakra UI Provider
import { BrowserRouter } from "react-router-dom"; // React Router
import { lightChakraTheme,darkChakraTheme } from "./theme"; // Import your custom theme
import App from "./App";

// Wrap the app with ChakraProvider and BrowserRouter
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={lightChakraTheme}> {/* Use custom theme here */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
