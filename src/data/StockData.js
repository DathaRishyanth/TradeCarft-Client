// const url = "${import.meta.env.VITE_BACKEND_URL}/api/v1/fetch/stock-details";

// const fetchStockDetails = async (symbol) => {
//   try {
//     console.log(symbol);
//     // Send a POST request with the symbol in the request body
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': '<calculated when request is sent>'
//       },
//       body: JSON.stringify({ symbol })
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(`Network response was not ok: ${response.statusText}`);
//       console.error(`Response body: ${errorText}`);
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Error fetching stock details for symbol ${symbol}:`, error);
//     throw new Error('Failed to fetch stock details.');
//   }
// };

// // Ensure that stockData is always an array
// export const stocksData = async (symbol) => {
//   try {
//     const temp = await fetchStockDetails(symbol);

//     // Wrap single object in an array if necessary
//     const stockDataArray = Array.isArray(temp) ? temp : [temp];

//     return stockDataArray.map(stock => ({
//       name: stock.name,
//       symbol: stock.id,
//       industry: stock.industryInfo,
//       peRatio: stock.peRatio,
//       roe: stock.roe,
//       indexes: stock.indexes,
//       faceValue: stock.faceValue,
//       issuedSize: stock.issuedSize,
//       currentValue: stock.currentValue,
//       change: stock.change,
//       pChange: stock.pChange,
//       open: stock.open,
//       close: stock.close,
//       todayHigh: stock.todayHigh,
//       todayLow: stock.todayLow,
//       weekHigh: stock.week52High,
//       weekLow: stock.week52Low,
//       industryInfo: stock.industryInfo,
//       grapthData: stock.grapthData,
//       yearHigh: stock.yearHigh,
//       yearLow: stock.yearLow,
//     }));
//   } catch (error) {
//     console.error(`Error fetching data for symbol ${symbol}:`, error);
//     throw new Error("Failed to fetch stock data.");
//   }
// };
// // export const fetchStockDetails = async (symbol) => {
// //   try {
// //     const response = await fetch("${import.meta.env.VITE_BACKEND_URL}/api/v1/fetch/stock-details", {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ symbol }),
// //     });

// //     if (!response.ok) {
// //       const errorText = await response.text();
// //       console.error(`Network response was not ok: ${response.statusText}`);
// //       console.error(`Response body: ${errorText}`);
// //       throw new Error('Network response was not ok');
// //     }

// //     return response.json();
// //   } catch (error) {
// //     console.error(`Error fetching stock details for symbol ${symbol}:`, error);
// //     throw new Error('Failed to fetch stock details.');
// //   }
// // };

// // export const stocksData = async (symbols) => {
// //   try {
// //     // Ensure symbols is an array
// //     if (!Array.isArray(symbols)) {
// //       symbols = [symbols]; // Convert single symbol to an array
// //     }

// //     // Fetch stock details for each symbol
// //     const stockDataPromises = symbols.map(symbol => fetchStockDetails(symbol));
// //     const stockDataArray = await Promise.all(stockDataPromises);
    
// //     return stockDataArray; // Return the array of stock data
// //   } catch (error) {
// //     console.error('Error fetching stock data:', error);
// //     throw new Error("Failed to fetch stock data.");
// //   }
// // };
// stockdata.js
// stockdata.js
const url = `${import.meta.env.VITE_BACKEND_URL}/api/v1/fetch/stock-details`;

const fetchStockDetails = async (symbol) => {
  const token = localStorage.getItem('token'); 
  console.log("token is",token);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ symbol })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Network response was not ok: ${response.statusText}`);
      console.error(`Response body: ${errorText}`);
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching stock details for symbol ${symbol}:`, error);
    throw new Error('Failed to fetch stock details.');
  }
};

export const stocksData = async (symbol) => {
  try {
    const temp = await fetchStockDetails(symbol);
    const stockDataArray = Array.isArray(temp) ? temp : [temp];

    return stockDataArray.map(stock => ({
      name: stock.name,
      symbol: stock.id,
      industry: stock.industryInfo,
      peRatio: stock.peRatio,
      roe: stock.roe,
      indexes: stock.indexes,
      faceValue: stock.faceValue,
      issuedSize: stock.issuedSize,
      currentValue: stock.currentValue,
      change: stock.change,
      pChange: stock.pChange,
      open: stock.open,
      close: stock.close,
      todayHigh: stock.todayHigh,
      todayLow: stock.todayLow,
      weekHigh: stock.week52High,
      weekLow: stock.week52Low,
      industryInfo: stock.industryInfo,
      grapthData: stock.grapthData,
      yearHigh: stock.yearHigh,
      yearLow: stock.yearLow,
    }));
  } catch (error) {
    console.error(`Error fetching data for symbol ${symbol}:`, error);
    throw new Error("Failed to fetch stock data.");
  }
};
