/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

const StrategyTester = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const strats = [
    { strat: "ADX Strategy", route: "/adxstrat" },
    { strat: "Mean Reversion", route: "/meanrev" },
    { strat: "Bollinger Breakout", route: "/bollingerband" },
    { strat: "Moving Average Strategy", route: "/movavg" },
  ];
  return (
    <div>
      <Navbar />
      <Navbar2 />

      <div className="text-center text-white text-4xl font-bold mt-4">
        Select a Strategy
        <div className="flex flex-wrap justify-center mt-8">
          {/* Use flexbox for layout */}
          {strats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg p-6 h-48 w-[30%] mx-2 flex flex-col justify-between mb-4"
            >
              <h3 className="text-2xl">{item.strat}</h3>
              <button
                className="mt-2 bg-blue-500 text-white py-1 px-2 rounded"
                onClick={() => {
                  navigate(`/strategy${item.route}`, { state: { stratName: item.strat } });
                }}
              >
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StrategyTester;