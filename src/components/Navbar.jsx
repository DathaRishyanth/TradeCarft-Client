// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import WalletIcon from "@mui/icons-material/Wallet";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import DropDownAvatar from "./DropDownAvatar";
// import SearchBar from "./SearchBar";

// const Navbar = () => {
//   const path = useLocation().pathname;
//   const [scrolling, setScrolling] = useState(false);
//   const welcomeRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.5 }
//     );
//     if (welcomeRef.current) {
//       observer.observe(welcomeRef.current);
//     }
//     return () => {
//       if (welcomeRef.current) {
//         observer.unobserve(welcomeRef.current);
//       }
//     };
//   }, []);

//   return (
//     <>
//       <motion.nav
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between backdrop-blur-lg transition-all duration-300 border-b border-cyan-500 shadow-lg ${scrolling ? "bg-opacity-90 bg-gray-900" : "bg-opacity-20"}`}
//       >
//         {/* Logo Section */}
//         <Link to="/user" className="flex items-center">
//           <motion.img
//             src="/icon.jpeg"
//             alt="Logo"
//             width={50}
//             className="mr-3 rounded-lg shadow-lg"
//             whileHover={{ scale: 1.1, rotate: 5 }}
//             transition={{ duration: 0.3 }}
//           />
//           <motion.h1
//             className="text-3xl font-extrabold font-mono tracking-widest bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
//             whileHover={{ scale: 1.1 }}
//           >
//             TradeCraft
//           </motion.h1>
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex space-x-12">
//           {[{ to: "/user", label: "Explore" }, { to: "/investments", label: "Investments" }].map((item) => (
//             <motion.div
//               key={item.to}
//               whileHover={{ scale: 1.1 }}
//               className={`relative text-lg font-mono transition-all duration-300 ${path === item.to ? "text-cyan-500" : "text-white hover:text-cyan-300"}`}
//             >
//               <Link to={item.to}>{item.label}</Link>
//               {path === item.to && <motion.div layoutId="underline" className="absolute left-0 bottom-0 w-full h-1 bg-cyan-500" />}
//             </motion.div>
//           ))}
//         </div>

//         {/* Search & Icons */}
//         <div className="flex items-center space-x-6">
//           <SearchBar />
//           <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
//             <Link to="/wallet">
//               <WalletIcon className="text-white hover:text-cyan-400" />
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
//             <Link to="/cart">
//               <ShoppingCartIcon className="text-white hover:text-cyan-400" />
//             </Link>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
//             <NotificationsNoneIcon className="text-white hover:text-cyan-400" />
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
//             <DropDownAvatar />
//           </motion.div>
//         </div>
//       </motion.nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WalletIcon from "@mui/icons-material/Wallet";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DropDownAvatar from "./DropDownAvatar";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const path = useLocation().pathname;
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-lg transition-all duration-300 border-b border-cyan-500 shadow-lg ${
          scrolling ? "bg-opacity-90 bg-gray-900" : "bg-opacity-20"
        }`}
      >
        {/* Logo Section */}
        <Link to="/user" className="flex items-center">
          <motion.img
            src="/icon.jpeg"
            alt="Logo"
            width={40}
            className="mr-2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h1
            className="text-2xl font-extrabold font-mono tracking-widest bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.1 }}
          >
            TradeCraft
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {[
            { to: "/user", label: "Explore" },
            { to: "/wallet", label: "Investments" },
          ].map((item) => (
            <motion.div
              key={item.to}
              whileHover={{ scale: 1.1 }}
              className={`relative text-lg font-mono transition-all duration-300 ${
                path === item.to ? "text-cyan-500" : "text-white hover:text-cyan-300"
              }`}
            >
              <Link to={item.to}>{item.label}</Link>
              {path === item.to && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 w-full h-1 bg-cyan-500"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Icons (Desktop View) */}
        <div className="hidden md:flex items-center space-x-6">
          <SearchBar />
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <Link to="/wallet">
              <WalletIcon className="text-white hover:text-cyan-400" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
            <DropDownAvatar />
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? (
              <CloseIcon className="text-white text-3xl" />
            ) : (
              <MenuIcon className="text-white text-3xl" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu (Right-Aligned with BG & Cyan Border) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-4 w-64 font-mono z-50 bg-gray-800 text-white shadow-lg border border-cyan-400 rounded-lg md:hidden"
          >
            <div className="flex flex-col space-y-6 p-4 text-lg">
              <Link
                to="/user"
                className="hover:text-cyan-400"
                onClick={() => setMenuOpen(false)}
              >
                Explore
              </Link>
              <Link
                to="/wallet"
                className="hover:text-cyan-400"
                onClick={() => setMenuOpen(false)}
              >
                Investments
              </Link>
              <Link
                to="/wallet"
                className="flex items-center hover:text-cyan-400"
                onClick={() => setMenuOpen(false)}
              >
                <WalletIcon className="mr-2" /> Wallet
              </Link>
              <div onClick={() => setMenuOpen(false)}>
                <DropDownAvatar />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
