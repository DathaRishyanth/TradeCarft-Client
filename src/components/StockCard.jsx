// import React, { useState } from "react";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { Link } from "react-router-dom";
// import axios from "axios";

// const StockCard = ({name, symbol, currentvalue, change, pChange}) => {
//   const [added, setAdded] = useState(false);

// const toggleAdded = async (e, userId, stockSymbol) => {
//   e.stopPropagation(); // Prevent card's click event

//   // try {
//   //   const response = await axios.post('/api/toggle-watchlist', {
//   //     userId,
//   //     symbol,
//   //   });

//   //   setAdded(response.data.added);
//   // } catch (error) {
//   //   console.error('Error toggling watchlist:', error);
//   // }
// };


//   const stockName = symbol;
//   const stockPrice = currentvalue;
//   let isPositive = false;
//   const percentage = pChange  
  
//   if (parseFloat(percentage) > 0) {
//     isPositive = true;
//   }

//   return (
//     <div className="bg-gray-800 rounded-lg p-6  text-white shadow-lg flex flex-col hover-zoom">
//       <div className="flex justify-between items-center mb-4">
        
//         <Link to={`/stockid/${symbol}`} className="no-underline">
//           <img
//             src={
//               "https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png"
//             }
//             alt={`logo`}
//             className="w-12 h-10 bg-white rounded-sm mr-[65px]"
//           />
//         </Link>
//         <div>
//           <button
//             onClick={toggleAdded}
//             className={`p-[1px] rounded-full 
//               ${added ? "text-green-500" : "hover:bg-gray-500"}`}
//           >
//             {added ? <CheckCircleIcon /> : <AddCircleOutlineIcon />}
//           </button>
//         </div>
//       </div>
//       <Link to={`/stockid/${symbol}`} className="no-underline">
//         <div className="text-lg font-semibold">{stockName}</div>
//         <div className="text-xl mt-2">₹{stockPrice}</div>
//         <div
//           className={`mt-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
//         >
//           {change} ({pChange}%)
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default StockCard;

// import React, { useState } from "react";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./StockCard.css";

// const StockCard = ({ name, symbol, currentvalue, change, pChange }) => {
//   const [added, setAdded] = useState(false);

//   const toggleAdded = (e) => {
//     e.stopPropagation();
//     setAdded(!added);
//   };

//   const isPositive = parseFloat(pChange) > 0;

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="stock-card"
//     >
//       <div className="card-header">
//         <Link to={`/stockid/${symbol}`} className="no-underline flex items-center">
//         </Link>
//         <motion.button
//           onClick={toggleAdded}
//           className={`icon-button ${added ? "added" : "not-added"}`}
//           whileTap={{ scale: 0.85 }}
//         >
//           {added ? <CheckCircleIcon fontSize="large" /> : <AddCircleOutlineIcon fontSize="large" />}
//         </motion.button>
//       </div>
//       <Link to={`/stockid/${symbol}`} className="no-underline flex flex-col items-center">
//         <div className="stock-name">{name}</div>
//         <div className="stock-price">₹{currentvalue}</div>
//         <motion.div
//           className={`stock-change ${isPositive ? "positive" : "negative"}`}
//           initial={{ opacity: 0, y: -5 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           {change} ({pChange}%)
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// };

// export default StockCard;
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StockCard = ({ name, symbol, currentvalue, change, pChange }) => {
  const [added, setAdded] = useState(false);

  const toggleAdded = (e) => {
    e.stopPropagation();
    setAdded(!added);
  };

  const isPositive = parseFloat(pChange) > 0;

  return (
    <motion.div
  whileHover={{ scale: 1.05, borderColor: "#6366f1", boxShadow: "0px 0px 10px #6366f1" }}
  whileTap={{ scale: 0.95 }}
  className="bg-[var(--custom-card-bg,#1F2937)] rounded-xl p-6 text-[var(--custom-card-text,#f8f8f8)] shadow-lg flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl w-[160px] sm:w-48 h-64 mx-auto border-2 border-transparent hover:border-[var(--custom-primary,#6366f1)]"
> 
      <div className="flex justify-between items-center mb-4 ">
        <motion.button
          onClick={toggleAdded}
          className={`p-2 rounded-full transition-all duration-300 ease-in-out ${
            added ? "text-green-400 scale-110" : "text-gray-400 hover:text-gray-200"
          }`}
          whileTap={{ scale: 0.85 }}
        >
          {added ? <CheckCircleIcon fontSize="large" /> : <AddCircleOutlineIcon fontSize="large" />}
        </motion.button>
      </div>
      <Link to={`/stockid/${symbol}`} className="no-underline flex flex-col items-center text-center">
        <div className="text-sm font-semibold text-[var(--custom-foreground,#f8f8f8)]">{name}</div>
        <div className="text-lg font-bold mt-2 text-[var(--custom-primary,#6366f1)]">₹{currentvalue}</div>
        <motion.div
          className={`mt-2 text-md font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {change} ({pChange}%)
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default StockCard;