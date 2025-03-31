import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"; // Import your Navbar component
import Demo from "./pages/Demo"; // Import your Demo component

function App() {
  return (
    <div>
      {/* Navbar will be visible on every page */}
      <Navbar /> 

      {/* Routes */}
      <Routes>
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
