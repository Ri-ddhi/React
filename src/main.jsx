import React from "react";
import ReactDOM from "react-dom/client";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import GetStarted from "./pages/GetStarted";
import Register from "./pages/Register";

import "./index.css";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Box>
        <Routes>
          {/* Define the Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/getStarted" element={<GetStarted />} />
          <Route path="/register" element={<Register />} />
          {/* New route for question page */}
        </Routes>
      </Box>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
