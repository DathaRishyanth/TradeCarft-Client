const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/fetch/index-details`;

const fetchIndexDetails = async (symbol) => {
  const token = localStorage.getItem('token'); 
  try {
    // Send a POST request with the symbol in the request body
    const response = await fetch(BASE_URL, {
      method: 'POST',  // Change to POST
      headers: {
        'Content-Type': 'application/json',  // Indicate that we're sending JSON
        'Content-Length': '<calculated when request is sent>',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ symbol })  // Send the symbol in the body
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
    console.error(`Error fetching index details for symbol ${symbol}:`, error);
    throw new Error('Failed to fetch index details.');
  }
};

export const indicesData = async (symbol) => {
  try {
    const indexDetails = await fetchIndexDetails(symbol);
    
    // Wrap the indexDetails in an array if it is not already an array
    return Array.isArray(indexDetails) ? indexDetails : [indexDetails];
  } catch (error) {
    console.error(`Error fetching data for symbol ${symbol}:`, error);
    throw new Error("Failed to fetch index data.");
  }
};
// indexdata.js
// indexdata.js
// const BASE_URL = "${import.meta.env.VITE_BACKEND_URL}/api/v1/fetch/stock-details";

// const fetchIndexDetails = async (symbol) => {
//   try {
//     const response = await fetch(BASE_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
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
//     console.error(`Error fetching index details for symbol ${symbol}:`, error);
//     throw new Error('Failed to fetch index details.');
//   }
// };

// export const indicesData = async (symbol) => {
//   try {
//     const indexDetails = await fetchIndexDetails(symbol);
//     return Array.isArray(indexDetails) ? indexDetails : [indexDetails];
//   } catch (error) {
//     console.error(`Error fetching data for symbol ${symbol}:`, error);
//     throw new Error("Failed to fetch index data.");
//   }
// };
