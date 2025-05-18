import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/register");
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <>
      <div className="mt-20">
        <div className="text-7xl px-8 text-gray-700 text-center">
          All things finance,
        </div>
        <div className=" text-7xl px-8 text-gray-700 text-center">
          right here
        </div>
        <div className=" text-7xl px-8 text-gray-600 text-center">
          <button
            onClick={handleLoginClick}
            className="h-10 text-lg text-center bg-emerald-400 hover:bg-emerald-600 text-white px-4 rounded cursor-pointer"
          >
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
