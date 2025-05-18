// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import IndexCard from "../components/IndexCard";
// import StockCard from "../components/StockCard";
// import { Link } from "react-router-dom";
// import { stocksData } from "@/data/StockData";
// import { indicesData } from "@/data/indexdata";

// const Stocks = () => {
//   const [indices, setIndices] = useState([]);
//   const [stocks, setStocks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const indexSymbols = ['NIFTY 50', 'NIFTY FIN SERVICE', 'NIFTY BANK', 'NIFTY NEXT 50'];
//         const stockSymbols = [
//           "RELIANCE", "HDFCBANK", "INFY", "TCS", "HINDUNILVR", "ICICIBANK", "SBIN",
//           "HDFC", "KOTAKBANK", "BAJFINANCE", "BHARTIARTL", "ASIANPAINT", "AXISBANK", 
//           "ITC", "MARUTI", "SUNPHARMA", "TATAMOTORS", "NESTLEIND", "POWERGRID", 
//           "BRITANNIA", "WIPRO", "TATASTEEL", "JSWSTEEL", "ADANIPORTS", "CIPLA", 
//           "INDUSINDBK", "COALINDIA", "HEROMOTOCO", "SIEMENS", "MRF", "GRASIM", 
//           "ULTRACEMCO", "HINDALCO", "DIVISLAB", "GAIL", "TATAPOWER", "SHREECEM", 
//           "EICHERMOT", "HAL", "APOLLOHOSP", "BANKBARODA", "ADANIGREEN", "NTPC", 
//           "UPL", "M&M", "TECHM", "ASHOKLEY"
//         ];

//         const indexDataPromises = indexSymbols.map(symbol => indicesData(symbol));
//         const indexDataResponse = await Promise.all(indexDataPromises);
//         setIndices(indexDataResponse.flat());

//         const stockDataPromises = stockSymbols.map(symbol => stocksData(symbol));
//         const stocksDataResponse = await Promise.all(stockDataPromises);
//         setStocks(stocksDataResponse.flat());
        
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div className="text-white">Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
  

//   return (
//     <div>
//       <div className="text-white flex justify-between items-center">
//         <h1 className="font-semibold text-xl text-white mb-5 mt-1">Index</h1>
//         <Link to="/viewall">
//           <h3 className="text-green-500">View all</h3>
//         </Link>
//       </div>    
//       <div className="flex flex-wrap gap-4">
//         {indices.map((index) => (
//           <Link to={`/index/${index.symbol}`} key={index.symbol}>
            
//             <IndexCard
//               name={index.name}
//               currentvalue={Math.floor(index.currentValue*100)/100}
//               symbol={index.name}
//               change={Math.floor(index.change*100)/100}
//               pChange={Math.floor(index.pChange*100)/100}
//             />
//           </Link>
//         ))}
//       </div>

//       <h1 className="font-semibold text-xl text-white mb-5 mt-3">Most Famous Stocks</h1>
//       <div className="flex flex-wrap gap-4">
//         {stocks.map((stock) => (
//           <Link to={`/stockid/${stock.symbol}`} key={stock.symbol}>
//             <StockCard
//               name={stock.name}
//               currentvalue={stock.currentValue}
//               symbol={stock.symbol}
//               change={stock.change}
//               pChange={stock.pChange}
//             />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stocks;
import React, { useEffect, useState } from "react";
import IndexCard from "../components/IndexCard";
import StockCard from "../components/StockCard";
import { Link } from "react-router-dom";
import { stocksData } from "@/data/StockData";
import { indicesData } from "@/data/indexdata";

const Stocks = () => {
  const [indices, setIndices] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const indexSymbols = ['NIFTY 50', 'NIFTY FIN SERVICE', 'NIFTY BANK'];
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

        const indexDataPromises = indexSymbols.map(symbol => indicesData(symbol));
        const indexDataResponse = await Promise.all(indexDataPromises);
        setIndices(indexDataResponse.flat());

        const stockDataPromises = stockSymbols.map(symbol => stocksData(symbol));
        const stocksDataResponse = await Promise.all(stockDataPromises);
        setStocks(stocksDataResponse.flat());
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ml-5 0">
      <div className="flex justify-between items-center mt-5">
        <h1 className="font-semibold text-xl text-white mb-5">Most Famous Stocks</h1>
        <Link to="/all-stocks" className="text-green-500">
          View More
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        {stocks.slice(0, 4).map((stock) => (
          <Link to={`/stockid/${stock.symbol}`} key={stock.symbol}>
            <StockCard
              name={stock.name}
              currentvalue={stock.currentValue}
              symbol={stock.symbol}
              change={stock.change}
              pChange={stock.pChange}
            />
          </Link>
        ))}
      </div>
      <div className="text-white flex justify-between items-center ">
        <h1 className="font-semibold text-xl text-white mb-5 mt-1">Index</h1>
        <Link to="/viewall">
          <h3 className="text-green-500">View all</h3>
        </Link>
      </div>    
      <div className="flex flex-wrap gap-4">
        {indices.map((index) => (
          <Link to={`/index/${index.symbol}`} key={index.symbol}>
            <IndexCard
              name={index.name}
              currentvalue={Math.floor(index.currentValue * 100) / 100}
              symbol={index.name}
              change={Math.floor(index.change * 100) / 100}
              pChange={Math.floor(index.pChange * 100) / 100}
            />
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Stocks;