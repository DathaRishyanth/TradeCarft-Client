/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import "./App.css";
import Competitions from "./pages/Competitions";
import CompetitionPage from "./pages/CompetitionPage";
import AddFunds from "./pages/ImportFunds";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUppage";
import HomePage from "./pages/HomePage";
import { useLocation } from "react-router-dom";
import ListPage from "./pages/ListPage";
import PinPage from "./pages/PinPage";
import OIPage from "./pages/OCPage";
import Wallet from "./pages/Wallet";
import Investments from "./pages/Investments";
import StratForm from "./pages/StratForm";
import { indicesData } from "./data/indexdata";
import Codepage from "./pages/CodePage";
import StrategyTester from "./pages/StrategyTester";
import Stocks from "./pages/Stocks";
import Footer from "./components/Footer";
import StockInfo from "./components/StockInfo";
import AllStocks from "./pages/All_stocks"
import { stocksData } from "./data/StockData";

function App() {
  const [stockList, setStockList] = useState([]);
  const [indexList, setIndexList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const path = useLocation().pathname;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const indexSymbols = [
          "NIFTY 50",
          "NIFTY FIN SERVICE",
          "NIFTY BANK",
        ];
        const stockSymbols = [
          "RELIANCE",
          "HDFCBANK",
          "INFY",
          "TCS",
          "HINDUNILVR",
          "ICICIBANK",
          "SBIN",
          "HDFC",
          "KOTAKBANK",
          "BAJFINANCE",
          "BHARTIARTL",
          "ASIANPAINT",
          "AXISBANK",
          "ITC",
          "MARUTI",
          "SUNPHARMA",
          "TATAMOTORS",
          "NESTLEIND",
          "POWERGRID",
          "BRITANNIA",
          "WIPRO",
          "TATASTEEL",
          "JSWSTEEL",
          "ADANIPORTS",
          "CIPLA",
          "INDUSINDBK",
          "COALINDIA",
          "HEROMOTOCO",
          "SIEMENS",
          "MRF",
          "GRASIM",
          "ULTRACEMCO",
          "HINDALCO",
          "DIVISLAB",
          "GAIL",
          "TATAPOWER",
          "SHREECEM",
          "EICHERMOT",
          "HAL",
          "APOLLOHOSP",
          "BANKBARODA",
          "ADANIGREEN",
          "NTPC",
          "UPL",
          "M&M",
          "TECHM",
          "ASHOKLEY",
        ];

        // Fetching stock data
        const stockDataPromises = stockSymbols.map((symbol) =>
          stocksData(symbol)
        );
        const fetchedStockData = await Promise.all(stockDataPromises);
        setStockList(fetchedStockData);

        // Fetching index data
        const indexDataPromises = indexSymbols.map((symbol) =>
          indicesData(symbol)
        );
        const fetchedIndexData = await Promise.all(indexDataPromises);
        setIndexList(fetchedIndexData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-slate-900">
      <div className="min-h-screen mb-5">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user" element={<HomePage />} />
          {/* <Route path="/pin" element={<PinPage />} /> */}
          <Route path="/oi" element={<OIPage />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet" element={<Investments />} />\
          <Route path="/importfunds" element={<AddFunds />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/codepage" element={<Codepage />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/all-stocks" element={<AllStocks />} />
          <Route path="/viewall" element={<ListPage />} />
          {/* <Route path="/backtester" element={<StrategyTester />} /> */}
          <Route path="/backtester" element={<StratForm />} />
          {/* Route for Stock Info will be handled in Stocks.jsx */}
          {/* <Route path="/stockid/:symbol" element={<StockInfo />} /> */}
          <Route path="/competition/:id" element={<CompetitionPage />} />


          {stockList.map((stock) => (
            // console.log(stock[0].symbol),

            <Route
              key={stock[0].symbol}
              path={`/stockid/${stock[0].symbol}`}
              element={
                <StockInfo
                  symbol={stock[0].symbol}
                  name={stock[0].name}
                  currentvalue={stock[0].currentValue}
                  peRatio={stock[0].peRatio}
                  roe={stock[0].roe}
                  todayHigh={stock[0].todayHigh}
                  todayLow={stock[0].todayLow}
                  week52High={stock[0].week52High}
                  week52Low={stock[0].week52Low}
                  change={stock[0].change}
                  pChange={stock[0].pChange}
                />
              }
            />
          ))}
          {indexList.map((index) => (
            // console.log(index),

            <Route
              key={index[0].symbol}
              path={`/index/${index[0].symbol}`}
              element={
                <StockInfo
                  symbol={index[0].symbol}
                  name={index[0].name}
                  currentvalue={index[0].currentValue}
                />
              }
            />
          ))}
        </Routes>
      </div>
      {path === "/user" ? <Footer /> : null}
    </div>
  );
}

export default App;