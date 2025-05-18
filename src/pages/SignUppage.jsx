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

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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

  const handleRegister = async () => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isEmail) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/signup`,
          { phone, email, password }
        );

        if (response.status === 201) {
          localStorage.setItem("token", response.data.token);
          console.log("User ID:", response.data.userId);
          localStorage.setItem("userId", response.data.userId);
          navigate("/user");
        } else if (response.status === 400) {
          alert("User already exists");
        } else {
          alert("Signup failed: " + response.data.error);
        }
      } catch (error) {
        console.error("Error during signup with email: ", error);
        alert("An error occurred during signup. Please try again.");
      }
    } else if (phone.length === 10) {
      localStorage.setItem("phone", phone);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/sendotp`,
          {
            phone,
            countryCode: "+91",
          }
        );
        if (response.data.success) {
          navigate("/user");
        } else {
          alert("Failed to navigate to user: " + response.data.message);
        }
      } catch (error) {
        console.error("Error sending OTP: ", error);
        alert("An error occurred while sending OTP. Please try again.");
      }
    } else {
      alert("Invalid email or phone number");
    }
  };

  const handleLogin = async () => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isEmail) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/login`,
          { email, password }
        );

        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          axios.defaults.headers.common[
            "authorization"
          ] = `Bearer ${response.data.token}`;
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
          navigate("/user");
        })
        .catch((error) => {
          console.error("Error signing in with email link: ", error);
        });
    }
  }, [auth, navigate]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center md:text-left">
            <img
              src="https://cfi.iitm.ac.in/assets/WebopsandBlockchainLogo-207245f0.png"
              className="w-64 md:w-80 mx-auto md:mx-0 mb-8"
              alt="Logo"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white bg-clip-text">
              Simple, Free Investing.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Test Your Quant skills here
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 p-8 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
        <div className="max-w-md w-full space-y-6 bg-gray-700 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Welcome to TradeCraft
          </h2>

          {/* <button
            onClick={handleClick}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <GoogleIcon className="mr-2" />
            Login with Google
          </button> */}

          {/* <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-500"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gray-700 text-gray-300">Or</span>
            </div>
          </div> */}

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Email"
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-500 bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <button
              onClick={handleRegister}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Register
            </button>

            <button
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200"
            >
              Login
            </button>
          </div>

          <p className="text-sm text-center text-gray-400 mt-6">
            By proceeding, I agree to{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              T&C
            </a>
            ,{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              Tariff Rates
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;