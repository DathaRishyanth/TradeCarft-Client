import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:text-left">
        
        {/* Brand Information */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">TradeCraft</h2>
          <address className="not-italic leading-relaxed">
            Center of Innovation, Near GC<br />
            IIT Madras, Chennai<br />
            Tamil Nadu - 600036<br />
            <a href="mailto:cfi@iitm.ac.in" className="text-blue-500 hover:underline">
              Contact Us
            </a>
          </address>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
          {/* <a href="/user" className="text-blue-500 hover:text-white text-xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a> */}
          {/* <a href="/user" className="text-red-500 hover:text-white text-xl">
            <FontAwesomeIcon icon={faYoutube} />
          </a> */}
          {/* <a href="/user" className="text-[#E1306C] text-xl">
            <AiFillInstagram/>
          </a> */}
          {/* <a href="/user" className="text-blue-500 hover:text-white text-xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a> */}
          {/* <a href="/user" className="text-blue-400 hover:text-white text-xl">
            <FontAwesomeIcon icon={faTelegram} />
          </a> */}
          </div>
          
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link to="/user" className="hover:text-white">Stocks</Link></li>
            <li><Link to="/futures-options" className="hover:text-white">Futures & Options</Link></li>
            <li><Link to="/competitions" className="hover:text-white">Competition</Link></li>
            <li><Link to="/backtester" className="hover:text-white">Strategy</Link></li>
            <li><Link to="/codepage" className="hover:text-white">CodeRunner</Link></li>
          </ul>
        </div>

        {/* TradeCraft Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">TradeCraft</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://cfi.iitm.ac.in/clubs/webops-and-blockchain-club" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/webopsblockchainclub-iitm/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="hover:text-white">
                Help & Support
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/webopsblockchainclub_iitm/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="hover:text-white">
                Connect
              </a>
            </li>
          </ul>
        </div>

        {/* Strategies */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Strategies</h3>
          <ul className="space-y-2">
            <li><Link to="/backtester?strategy=StochasticOscillator" className="hover:text-white">Stochastic Oscillator Indicator</Link></li>
            <li><Link to="/backtester?strategy=BollingerBands" className="hover:text-white">Bollinger Bands Indicator</Link></li>
            <li><Link to="/backtester?strategy=MVA" className="hover:text-white">Moving Average (MA)</Link></li>
            <li><Link to="/backtester?strategy=CCI" className="hover:text-white">Commodity Channel Index (CCI)</Link></li>
            <li><Link to="/backtester?strategy=ADX" className="hover:text-white">Average Directional Index (ADX)</Link></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-6 mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>© 2023-2025 TradeCraft. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const IndexCard = ({ symbol, name, currentvalue, pChange, change }) => {
//   const [added, setAdded] = useState(false);

//   const toggleAdded = (e) => {
//     e.stopPropagation();
//     setAdded(!added);
//   };

//   const indexName = name ? name.toUpperCase() : "";
//   const isPositive = parseFloat(pChange) > 0;

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, borderColor: "#6366f1", boxShadow: "0px 0px 10px #6366f1" }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-[var(--custom-card-bg,#1F2937)] rounded-xl p-6 text-[var(--custom-card-text,#f8f8f8)] shadow-lg flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl w-60 h-64 border-2 border-transparent hover:border-[var(--custom-primary,#6366f1)] mx-2 my-2 text-left"
//     >
//       <div className="flex justify-between items-center">
//         <div className="text-left text-sm font-semibold text-[var(--custom-foreground,#f8f8f8)]">
//           {indexName}
//         </div>
//         <motion.button
//           onClick={toggleAdded}
//           className={`p-2 rounded-full transition-all duration-300 ease-in-out ${
//             added ? "text-green-400 scale-110" : "text-gray-400 hover:text-gray-200"
//           }`}
//           whileTap={{ scale: 0.85 }}
//         >
//           {added ? <CheckCircleIcon fontSize="large" /> : <AddCircleOutlineIcon fontSize="large" />}
//         </motion.button>
//       </div>
//       <div className="text-lg font-bold mt-4 text-[var(--custom-primary,#6366f1)]">
//         ₹{currentvalue}
//       </div>
//       <motion.div
//         className={`mt-2 text-md font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}
//         initial={{ opacity: 0, y: -5 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         {change} ({pChange}%)
//       </motion.div>
//     </motion.div>
//   );
// };

// export default IndexCard;
