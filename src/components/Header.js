import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Axios } from "axios";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const [confPass, setConfPass] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };
  const onSubmit = (data) => {
    console.log(data);
    //Axios.post("${import.meta.env.VITE_BACKEND_URL}/signup" , )
  };
  return (
    <header className="relative py-2 w-full">
      <nav className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="h-10 flex justify-center text-gray-600 font-bold text-3xl items-center my-2">
          TradeCraft
        </div>
        <div className="flex justify-center items-center my-2">
          <div className="flex h-10 border border-gray-200 rounded items-center w-3/4 lg:w-5/6 overflow-hidden">
            <div className="px-3">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                  stroke="#64748b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-2">
          <button
            onClick={handleLoginClick}
            className="h-10 text-center bg-emerald-400 hover:bg-emerald-600 text-white px-4 rounded cursor-pointer"
          >
            Login/Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
