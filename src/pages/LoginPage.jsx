/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider } from "../lib/firebaseConfig";
import {
  signInWithPopup,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res, "userData");
        navigate("/user");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  const handleLogin = async () => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // If input is a valid email
    if (isEmail) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/login`,
          { email, password }
        );

        if (response.status === 200) {
          // Store token and navigate to /pin
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userId", JSON.stringify(response.data.user));
          navigate("/user");
        } else {
          alert("Login failed: " + response.data.message);
        }
      } catch (error) {
        console.error("Error during login with email: ", error);
        if (error.response?.status === 401) {
          alert("Invalid credentials or user not found.");
        } else {
          alert("An error occurred during login. Please try again.");
        }
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(auth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
          navigate("/pin");
        })
        .catch((error) => {
          console.error("Error signing in with email link: ", error);
        });
    }
  }, [auth, navigate]);

  return (
    <div className="flex h-screen bg-slate-900">
      <div className="w-1/2 flex items-center justify-center text-white">
        <div>
          <img
            src="https://cfi.iitm.ac.in/assets/WebopsandBlockchainLogo-207245f0.png"
            width="340"
            height="auto"
            alt="Logo"
          />
          <h1 className="text-4xl font-bold mb-4">Simple, Free Investing.</h1>
          <p className="text-xl">Test Your Quant skills here </p>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-800">
        <div className="bg-gray-700 p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Welcome to TradeCraft
          </h2>
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4 flex justify-center items-center"
          >
            <GoogleIcon className="p-[2px] mr-1" />
            Login with Google
          </button>
          <p className="text-white mb-4">Or</p>

          {/* Email input */}
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-500 bg-gray-600 text-white py-2 px-4 w-full mb-4 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-500 bg-gray-600 text-white py-2 px-4 w-full mb-4 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Login button */}
          <button
            onClick={handleLogin}
            className="bg-green-500 text-white py-2 px-4 rounded w-full"
          >
            Continue
          </button>

          <p className="text-sm mt-4 text-gray-400">
            By proceeding, I agree to{" "}
            <a href="#" className="text-blue-400">
              T&C
            </a>
            ,{" "}
            <a href="#" className="text-blue-400">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-400">
              Tariff Rates
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
