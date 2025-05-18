/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";

// const IndexCard = ({symbol, name, currentvalue, pChange, change}) => {
//   const indexName = name.toUpperCase()
//   const indexValue = currentvalue;
//   // const changeValue = "438.85 (2.01%)";
//   let isPositive = false;
//   const percentage = pChange  
  
//   if (parseFloat(percentage) > 0) {
//     isPositive = true;
//   }

//   return (
//     <div className="bg-gray-800 bodyBaseHeavy rounded-lg p-4 text-white shadow-lg hover-zoom">
//       <div className="">{indexName}</div>
//       <div className="flex justify-between">
//         <div className=" mt-2 mr-2">{indexValue}</div>
//         <div
//           className={`mt-2 mr-6 ${
//             isPositive ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {change} ({pChange}%)
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IndexCard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const IndexCard = ({ symbol, name, currentvalue, pChange, change }) => {
  const [added, setAdded] = useState(false);

  const toggleAdded = (e) => {
    e.stopPropagation();
    setAdded(!added);
  };

  const indexName = name.toUpperCase();
  const isPositive = parseFloat(pChange) > 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: "#6366f1", boxShadow: "0px 0px 10px #6366f1" }}
      whileTap={{ scale: 0.95 }}
      className="bg-[var(--custom-card-bg,#1F2937)] rounded-xl p-6 text-[var(--custom-card-text,#f8f8f8)] shadow-lg flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl w-[160px] sm:w-48 h-64 mx-auto border-2 border-transparent hover:border-[var(--custom-primary,#6366f1)]"
    > 
      <div className="flex justify-between items-center mb-4">
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
      <div className="text-center text-sm font-semibold text-[var(--custom-foreground,#f8f8f8)]">
        {indexName}
      </div>
      <div className="text-lg font-bold mt-2 text-[var(--custom-primary,#6366f1)] text-center">
        ₹{currentvalue}
      </div>
      <motion.div
        className={`mt-2 text-md font-medium text-center ${isPositive ? "text-green-500" : "text-red-500"}`}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {change} ({pChange}%)
      </motion.div>
    </motion.div>
  );
};

export default IndexCard;