// import React, { useState, useEffect, useRef } from "react";
// import { alpha, IconButton, InputBase, styled } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ClearIcon from "@mui/icons-material/Clear";
// import { stocksData } from "@/data/StockData";
// import { Link } from "react-router-dom";

// // Search bar styling
// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// // Icon wrapper styling
// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// // Input field styling
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "42ch",
//       "&:focus": {
//         width: "50ch",
//       },
//     },
//   },
// }));

// const SearchBar = () => {
//   const [search, setSearch] = useState(""); // State to store search input
//   const [filteredStocks, setFilteredStocks] = useState([]); // State to store filtered stocks
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility
//   const searchBarRef = useRef(null); // Reference to the search bar container

//   // Handle search query change
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearch(query); // Update the search state with input

//     if (query !== "") {
//       const filtered = stocksData.filter((stock) =>
//         stock.name.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredStocks(filtered); // Update filtered stocks
//     } else {
//       setFilteredStocks(stocksData.slice(0, 10)); // Show first 10 stocks if input is empty
//     }
//   };

//   // Clear search input and reset stock list
//   const clearSearch = () => {
//     setSearch(""); // Clear search input
//     setFilteredStocks(stocksData.slice(0, 10)); // Reset filtered stocks to the first 10
//     setIsDropdownOpen(false); // Hide dropdown
//   };

//   // Handle search bar focus
//   const handleFocus = () => {
//     setIsDropdownOpen(true); // Open the dropdown when the search bar is focused
//     if (search === "") {
//       setFilteredStocks(stocksData.slice(0, 10)); // Show the first 10 stocks if no search query
//     }
//   };

//   // Handle click outside to close the dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         searchBarRef.current &&
//         !searchBarRef.current.contains(event.target)
//       ) {
//         setIsDropdownOpen(false); // Close dropdown if clicked outside
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener
//     };
//   }, [searchBarRef]);

//   return (
//     <div ref={searchBarRef} className="bg-slate-900 relative">
//       <div className="flex ">
//       <Search className="flex">
//         <div>
//         <SearchIconWrapper>
//           <SearchIcon style={{ color: "white" }} />
//         </SearchIconWrapper>
//         {/* Input field with dynamic search */}
//         <StyledInputBase
//           placeholder="Search…"
//           value={search} // Bind input value to search state
//           onChange={handleSearchChange} // Update search state on input change
//           onFocus={handleFocus} // Open dropdown when input is focused
//           inputProps={{ "aria-label": "search" }}
//           style={{ color: "white" }}
//         />
//         </div>
//         <div>
//             {/* Clear search button, shown only if search is not empty */}
//         {search && (
//           <IconButton onClick={clearSearch} aria-label="clear">
//             <ClearIcon style={{ color: "white" }} />
//           </IconButton>
//         )}
//         </div>
//       </Search>
//       </div>

//       {/* Dropdown list of filtered stocks */}
//       {isDropdownOpen && (
//         <div className="absolute bg-transparent text-white w-[541px] z-10 ml-2">
//           {filteredStocks.length > 0 ? (
//             filteredStocks.map((stock) => (
//                 <div
//                 key={stock.id}
//                 className="p-2 hover:bg-gray-700 hover:cursor-pointer"
//                 onClick={() => window.location.href = `/stockid/${stock.symbol}`}
//               >
//                 {stock.name} ({stock.symbol}) - {stock.currentValue}
//               </div>
              
//             ))
//           ) : (
//             <div className="p-2">No results found</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState, useEffect, useRef } from "react";
import { alpha, IconButton, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { stocksData } from "@/data/StockData";

// Search bar styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

// Icon wrapper styling
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Input field styling
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchBarRef = useRef(null);

  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearch(query);

    if (query !== "") {
      const filtered = stocksData.filter((stock) =>
        stock.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredStocks(filtered);
    } else {
      setFilteredStocks(stocksData.slice(0, 10));
    }
  };

  // Clear search input
  const clearSearch = () => {
    setSearch("");
    setFilteredStocks(stocksData.slice(0, 10));
    setIsDropdownOpen(false);
  };

  // Handle search bar focus
  const handleFocus = () => {
    setIsDropdownOpen(true);
    if (search === "") {
      setFilteredStocks(stocksData.slice(0, 10));
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={searchBarRef} className="relative w-full max-w-lg mx-auto">
      <div className="flex items-center bg-slate-700 rounded-lg py-1 w-full">
        {/* Search Icon */}
        <SearchIcon className="text-white mr-2" />

        {/* Input Field */}
        <StyledInputBase
          className="text-white flex-1"
          placeholder="Search…"
          value={search}
          onChange={handleSearchChange}
          onFocus={handleFocus}
          inputProps={{ "aria-label": "search" }}          
        />

        {/* Clear Button */}
        {search && (
          <IconButton onClick={clearSearch} aria-label="clear">
            <ClearIcon className="text-white" />
          </IconButton>
        )}
      </div>

      {/* Dropdown list of filtered stocks */}
      {isDropdownOpen && (
        <div className="absolute left-0 right-0 bg-gray-800 text-white rounded-lg shadow-lg mt-2 w-full max-w-lg z-10">
          {filteredStocks.length > 0 ? (
            filteredStocks.map((stock) => (
              <div
                key={stock.id}
                className="p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => (window.location.href = `/stockid/${stock.symbol}`)}
              >
                {stock.name} ({stock.symbol}) - {stock.currentValue}
              </div>
            ))
          ) : (
            <div className="p-2 text-center">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;