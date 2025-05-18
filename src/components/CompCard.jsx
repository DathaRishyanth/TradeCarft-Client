import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CompCard = ({ id, name, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-lg overflow-hidden bg-slate-900 border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <div className="p-6 relative">
        <div className="text-white mb-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            {name}
          </h2>
          <p className="text-gray-300 mt-2">{description}</p>
        </div>

        {/*  Content */}
        <div className="text-gray-400 space-y-2">
          <p className="text-sm flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
            Featured · Code Competition
          </p>
          <p className="text-sm flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
            1246 Teams
          </p>
        </div>

        {/* Footer */}
        <div className="my-6 flex justify-between items-center text-white">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            $6969
          </div>
          <div className="text-sm text-gray-400">2 months to go</div>
        </div>
        <Link to={`/competition/${id}`} className="block">
          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
            Enter Competition
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CompCard;
