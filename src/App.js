/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import Landing from "./components/Landing.js";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { UserProvider } from "./context/user.jsx";
function App() {
  const [Mode, setMode] = useState("Dark Mode"); //Wther dark mode is enabled or not
  const toggleMode = () => {
    if (Mode === "Dark Mode") {
      setMode("Light Mode");

      document.getElementById("mode").className = "dark h-full";
    } else {
      setMode("Dark Mode");

      document.getElementById("mode").className = "light h-full";
    }
  };
  return (
    <div id="mode" className="light h-full">
      <UserProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            exact
            path="/login"
            element={<Login mode={Mode} toggleMode={toggleMode}></Login>}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Register mode={Mode} toggleMode={toggleMode}></Register>}
          ></Route>
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
