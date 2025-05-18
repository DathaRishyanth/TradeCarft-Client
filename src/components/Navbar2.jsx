import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WalletIcon from "@mui/icons-material/Wallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DropDownAvatar from "./DropDownAvatar";
import SearchBar from "./SearchBar";
import { Menu } from "lucide-react";

const Navbar2 = () => {
  const path = useLocation().pathname;
  const welcomeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }
    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  const navItems = [
    { to: "/user", label: "Stocks" },
    { to: "/competitions", label: "Competitions" },
    { to: "/codepage", label: "CodeRunner" },
    { to: "/backtester", label: "StrategyTester" },
  ];

  return (
    <>
      {/* Welcome Section */}
      <div ref={welcomeRef} className="mt-20 md:mt-32 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-8xl font-extrabold font-serif text-white drop-shadow-lg"
            >
              Welcome to <span className="bg-gradient-to-r from-blue-900 to-blue-400 text-transparent bg-clip-text">TradeCraft</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-xl md:text-2xl lg:text-3xl mt-4 font-serif text-white drop-shadow-md"
            >
              Welcome to the world of <span className="font-bold bg-gradient-to-r from-blue-900 to-blue-400 text-transparent bg-clip-text">Trading</span>
            </motion.p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              src="https://miro.medium.com/v2/resize:fit:849/1*XRwNvWsFBWEfV1u-0ecBqQ.png" 
              alt="Trading Illustration" 
              className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 px-4 md:px-8">
        {/* Mobile Menu Button */}
        {/* <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-blue-900 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div> */}

        {/* Navigation Links */}
        <div className={`flex flex-col md:flex-row justify-between items-center w-full gap-2 md:gap-4 block`}>
          {navItems.map((item) => (
            <Link
              to={item.to}
              key={item.to}
              className="w-full md:flex-1 md:mx-[2%]"
            >
              <button
                className={`w-full px-4 md:px-6 py-2 md:py-3 rounded-lg text-base md:text-lg font-bold transition-all duration-300 border-2 border-blue-500 text-white hover:bg-blue-900 hover:text-white ${
                  path === item.to
                    ? "bg-gradient-to-r from-blue-900 to-blue-400 border-none"
                    : "bg-transparent"
                }`}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 px-4 md:px-8">
        <hr className="border-gray-500" />
      </div>
    </>
  );
};

export default Navbar2;