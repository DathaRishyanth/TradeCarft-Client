/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const InvestmentCard = ({
  symbol,
  name,
  currentValue,
  quantity,
  priceLimit,
  buy = false,
  sell = false,
  stoploss,
  target
}) => {
  const indexName = name;
  const indexValue = currentValue;
  const changeValue = "438.85 (2.01%)";
  const isPositive = true; // You can dynamically calculate this
  const previousInvestments = [
    { date: "2024-09-05", action: "Buy", amount: 10, price: 150, name: "Apple" },
    { date: "2024-08-30", action: "Sell", amount: 5, price: 140, name: "Apple" },
    { date: "2024-08-15", action: "Buy", amount: 20, price: 130, name: "Apple" },
  ];
  return (
    <div className="flex flex-col w-full bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-3">
      {/* Stock Name and Symbol */}
      <div className="flex justify-between w-full mb-4">
        <div className="text-xl font-semibold">
          {indexName} <span className="text-xl text-white">{symbol}</span>
        </div>
        <div
          className={`text-lg font-semibold ${
            isPositive ? "text-green-400" : "text-red-400"
          }`}
        >
          {indexValue}
        </div>
      </div>

      {/* Price Change */}
      <div
        className={`text-md ${isPositive ? "text-green-400" : "text-red-400"}`}
      >
        {changeValue}
      </div>

      {/* Quantity and Price Limit */}
      <div className="flex justify-between mt-4 w-full">
        <div className="text-sm">
          <span className="font-semibold">Quantity:</span> {quantity}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Price Limit:</span> {priceLimit}
        </div>
      </div>
      <div className="flex justify-between mt-4 w-full">
        <div className="text-sm">
          <span className="font-semibold">Stop Loss:</span> {stoploss}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Target:</span> {target}
        </div>
      </div>

      {/* Buy and Sell Buttons */}
      <div className="flex justify-between mt-6 w-full gap-4">
        {buy && (
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Buy
          </button>
        )}
        {sell && (
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Sell
          </button>
        )}
      </div>

      {/* Invest More Button */}
      <div className="mt-4 w-full">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Invest More
        </button>
      </div>
      {/* Previous Investment Logs */}
      <div className="mt-8 w-full">
        <h3 className="text-xl font-semibold mb-4">Previous Investment Logs</h3>
        <div className="bg-gray-700 p-4 rounded-lg max-h-64 overflow-y-auto">
          {previousInvestments.length === 0 ? (
            <p className="text-gray-400">No previous investments found.</p>
          ) : (
            previousInvestments.map((investment, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-600"
              >
                <div className="text-sm">
                  <span className="font-semibold">{investment.date}</span>
                  <span className="text-gray-400"> - {investment.action}</span>
                </div>
                <div className="text-sm font-semibold">
                  {investment.name}  {investment.amount} @ {investment.price} INR
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
