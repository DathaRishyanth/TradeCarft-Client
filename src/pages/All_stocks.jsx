import React, { useEffect, useState } from "react";
import StockCard from "../components/StockCard";
import { stocksData } from "@/data/StockData";
import Navbar from "@/components/Navbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useNavigate } from "react-router-dom";

const AllStocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllStocks = async () => {
      try {
        const stockSymbols = [
          "RELIANCE", "HDFCBANK", "INFY", "TCS", "HINDUNILVR", "ICICIBANK", "SBIN",
          "HDFC", "KOTAKBANK", "BAJFINANCE", "BHARTIARTL", "ASIANPAINT", "AXISBANK", 
          "ITC", "MARUTI", "SUNPHARMA", "TATAMOTORS", "NESTLEIND", "POWERGRID", 
          "BRITANNIA", "WIPRO", "TATASTEEL", "JSWSTEEL", "ADANIPORTS", "CIPLA", 
          "INDUSINDBK", "COALINDIA", "HEROMOTOCO", "SIEMENS", "MRF", "GRASIM", 
          "ULTRACEMCO", "HINDALCO", "DIVISLAB", "GAIL", "TATAPOWER", "SHREECEM", 
          "EICHERMOT", "HAL", "APOLLOHOSP", "BANKBARODA", "ADANIGREEN", "NTPC", 
          "UPL", "M&M", "TECHM", "ASHOKLEY"
        ];

        const stockDataPromises = stockSymbols.map(symbol => stocksData(symbol));
        const stocksDataResponse = await Promise.all(stockDataPromises);
        setStocks(stocksDataResponse.flat());
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllStocks();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Navbar />
      <div className="mt-20">
      <hr className="border-gray-500 mt-3 mb-3" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-white text-2xl hover:text-green-500"
              href="/user"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              className="text-white text-2xl hover:text-green-500"
              href="/viewall"
            >
              Stocks
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-white text-2xl hover:text-green-500">
              All Stocks
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      {/*<h1 className="font-semibold text-2xl text-white mb-5 mt-5">All Stocks</h1>*/}
        
        <div className="flex flex-wrap gap-4">
          {stocks.map((stock) => (
            <StockCard
              key={stock.symbol}
              name={stock.name}
              currentvalue={stock.currentValue}
              symbol={stock.symbol}
              change={stock.change}
              pChange={stock.pChange}
            />
          ))}
        </div>
        <button 
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="mb-4 text-green-500 hover:underline"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default AllStocks;