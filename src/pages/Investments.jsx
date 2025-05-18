/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Buttons from "@/components/Buttons";
import InvestmentCard from "@/components/InvestmentsCard";
import Navbar from "@/components/Navbar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { stocksData } from "@/data/StockData";
import React from "react";
import { useLocation } from "react-router-dom";

const Investments = () => {
  const location = useLocation();
  const {quantity, pricelimit, currentValue, symbol, name, stoploss, target} = location.state;
  return (
    <div className="">
      <Navbar />
      <hr className="border-gray-500 mt-5 mb-6" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-white hover:text-green-500"
              href="/user"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-white hover:text-green-500"
              href="/wallet"
            >
              Investments
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center w-[600px] mt-3">
        <Buttons text="Booked" />
        <Buttons text="Processing" />
        <Buttons text="Prev Holdings" />
        <Buttons text="Positions" />
        <Buttons text="Wishlist" />
      </div>
      <div>
        <InvestmentCard symbol={symbol} currentValue={currentValue} name={name} priceLimit={pricelimit} quantity={quantity} stoploss={stoploss} target={target}  />
      </div>
    </div>
  );
};

export default Investments;
