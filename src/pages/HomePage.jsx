import React, { useEffect, useState } from "react";
import Stocks from "./Stocks";
import MyInvestments from "@/components/MyInvestments";
import Accordion from "@/components/AccordWatchList";
import "./greenline.css";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Navbar2 from "@/components/Navbar2";

const HomePage = () => {
  const path = useLocation().pathname;
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4">
        <Navbar2 />

        <div className="flex flex-col lg:flex-row mt-3 gap-6 ">
          {/* Main content */}
          <div className="w-full lg:w-[69%]">
            <Stocks />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[31%]">
            {/* Investments Section */}
            <div className="mb-8">
              <div className="flex text-white justify-between items-center mt-6">
                <div className="text-xl font-bold">Your Investments</div>
                <Link to="/wallet">
                  <div className="text-green-500 hover:text-green-400 transition-colors">
                    Dashboard
                  </div>
                </Link>
              </div>
              <div className="mt-2">
                <MyInvestments />
              </div>
            </div>

            {/* Watchlists Section */}
            <div className="mb-8">
              <div className="flex text-white justify-between items-center mt-6">
                <div className="text-xl font-bold">All Watchlists</div>
              </div>
              <div className="mt-2">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;