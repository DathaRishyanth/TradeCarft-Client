import React, { useState, useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import BuySell from "./BuySell";
import Buttons from "./Buttons";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import PerformanceCard from "./PerformanceCard";
import NewsCard from "./NewsCard";
import EventsCard from "./EventsCard";
import { data as Stockdata } from '../lib/utils';
import { AgCharts } from "ag-charts-react";
import 'ag-charts-enterprise';
import Tradeview from "./Tradeview";
import { stocksData } from "@/data/StockData";
import { newsData } from "@/data/NewsData";
import axios from "axios";
import { useMediaQuery } from "./mobileview";

const StockInfo = ({ symbol, name, currentvalue, todayHigh, todayLow, week52High, week52Low, peRatio, roe, pChange, change }) => {
  const [data, useData] = useState(Stockdata);
  const [mobileView, setMobileView] = useState(window.innerWidth <= 970);
  const userId = localStorage.getItem("userId");

  const [news, setNews] = useState({});
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 970);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const path = useLocation().pathname;
  // const [addedBookmark, setAddedBookmark] = useState(false);
  const [addedNotificatoin, setAddedNotificatoin] = useState(false);
  const [timeFrame, settimeFrame] = useState("1D");

  const toggleAddedNotification = (e) => {
    e.stopPropagation(); // Prevent card's click event
    setAddedNotificatoin(!addedNotificatoin);
  };

  // const toggleAddedBookmark = (e) => {
  //   e.stopPropagation(); // Prevent card's click event
  //   setAddedBookmark(!addedBookmark);
  // };

  const toggleTimeFrame = (time) => {
    settimeFrame(time);
  }
  const isMobile = useMediaQuery("(max-width: 768px)")


  // toggle between overview, news and events
  const [activeTab, setActiveTab] = useState("overview");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  //fetch news data
  useEffect(() => {
    const fetchNewsAndEvents = async () => {
      try {
        const data = await newsData(symbol);
        setNews({
          news1: data.news1,
          news2: data.news2,
          news3: data.news3,
        });
        setEvents({
          event1: data.event1,
          event2: data.event2,
          event3: data.event3,
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news and events:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNewsAndEvents();
  }, [symbol]);


  const [watchlist, setWatchlist] = useState([]);
  const [addedBookmark, setAddedBookmark] = useState(false);

  useEffect(() => {
    fetchWatchlist();
  }, []);

  const fetchWatchlist = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/watchlist/${userId}`);
      setWatchlist(response.data);
    } catch (error) {
      console.error("Error fetching watchlist", error);
    }
  };

  const toggleAddedBookmark = async () => {
    console.log("Button clicked!", userId, symbol);
    try {
      if (!addedBookmark) {
        console.log("Adding to watchlist");
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/watchlist`, {
          userId : Number(userId),
          stockSymbol: symbol, 
        });
        console.log("POST Response:", response.data);
      } else {
        console.log("Removing from watchlist");
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/watchlist`, {
          data: { userId : Number(userId), stockSymbol: symbol },  // DELETE needs `data`
        });        
      }
      setAddedBookmark(!addedBookmark);
      fetchWatchlist();
    } catch (error) {
      console.error("Error updating watchlist", error);
    }
  };
  


  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="pt-[60px] px-4 md:px-6 lg:px-8 max-w-7xl mx-auto lg:w-[1200px]">
        <Navbar />
        <hr className="border-gray-500 mt-3 mb-3" />

        {/* Breadcrumb - Hidden on small screens */}
        <div className="hidden sm:block">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white hover:text-green-500" href="/user">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white hover:text-green-500" href="/viewall">
                  Stocks
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white hover:text-green-500">{name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between mt-5 gap-6">
          {/* Stock Details Section */}
          <div className="bg-gray-900 text-white rounded-lg w-full lg:w-[65%]">
            {/* Stock Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex items-center">
                <img
                  src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png"
                  alt={name}
                  className="w-10 h-10 sm:w-12 sm:h-12 mr-4 bg-white rounded-md"
                />
                <div>
                  <h2 className="text-lg sm:text-xl font-bold">{name}</h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {/* <button
                  onClick={toggleAddedNotification}
                  className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded flex items-center"
                >
                  {addedNotification ? (
                    <NotificationsActiveIcon className="w-4 h-4 mr-1" />
                  ) : (
                    <NotificationAddIcon className="w-4 h-4 mr-1" />
                  )}
                  <span className="hidden xs:inline">Create Alert</span>
                </button> */}
                <button
                  onClick={toggleAddedBookmark}
                  className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded flex items-center"
                >
                  {addedBookmark ? (
                    <BookmarkIcon className="w-4 h-4 mr-1" />
                  ) : (
                    <BookmarkBorderIcon className="w-4 h-4 mr-1" />
                  )}
                  <span className="hidden xs:inline">Watchlist</span>
                </button>
                <Link
                  href="/oi"
                  className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded flex items-center"
                >
                  <InsertLinkIcon className="w-4 h-4 mr-1" />
                  <span className="hidden xs:inline">Option Chain</span>
                </Link>
              </div>
            </div>

            {/* Stock Price */}
            <div className="mt-4">
              <div className="text-2xl sm:text-3xl font-bold">₹{currentvalue}</div>
              {Number.parseFloat(pChange) > 0 ? (
                <span className="text-green-500 text-base sm:text-lg font-semibold">
                  {change} ({pChange}%)
                </span>
              ) : (
                <span className="text-red-500 text-base sm:text-lg font-semibold">
                  {change} ({pChange}%)
                </span>
              )}
              <span className="text-white text-base sm:text-lg ml-2">1D</span>
            </div>

            {/* Chart */}
            <div className="h-[500px] sm:h-[400px] md:h-[500px] mt-4">
              <Tradeview symbol={symbol} interval={timeFrame} />
            </div>

            {/* Tabs */}
            <div className="mt-6">
              <div className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-2 scrollbar-hide">
                <h2
                  className={`text-base sm:text-xl whitespace-nowrap cursor-pointer pb-1 ${
                    activeTab === "overview" ? "text-green-500 border-b-2 border-green-500" : "text-white"
                  }`}
                  onClick={() => handleTabClick("overview")}
                >
                  Overview
                </h2>
                <h2
                  className={`text-base sm:text-xl whitespace-nowrap cursor-pointer pb-1 ${
                    activeTab === "news" ? "text-green-500 border-b-2 border-green-500" : "text-white"
                  }`}
                  onClick={() => handleTabClick("news")}
                >
                  News
                </h2>
                <h2
                  className={`text-base sm:text-xl whitespace-nowrap cursor-pointer pb-1 ${
                    activeTab === "events" ? "text-green-500 border-b-2 border-green-500" : "text-white"
                  }`}
                  onClick={() => handleTabClick("events")}
                >
                  Events
                </h2>
              </div>
              <hr className="border-gray-500 mt-[2px]" />

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "overview" && (
                  <PerformanceCard
                    peRatio={peRatio}
                    roe={roe}
                    todayHigh={todayHigh}
                    todayLow={todayLow}
                    week52High={week52High}
                    week52Low={week52Low}
                  />
                )}
                {activeTab === "news" && <NewsCard news1={news.news1} news2={news.news2} news3={news.news3} />}
                {activeTab === "events" && (
                  <EventsCard event1={events.event1} event2={events.event2} event3={events.event3} />
                )}
              </div>
            </div>
          </div>

          {/* Buy/Sell Section - Moves to bottom on mobile */}
          <div className={`w-full lg:w-[32%] ${isMobile ? "mt-6" : ""}`}>
            <BuySell
              symbol={symbol}
              currentvalue={currentvalue}
              todayHigh={todayHigh}
              todayLow={todayLow}
              pChange={pChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockInfo;
// import React, { useState, useEffect } from "react";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
// import BuySell from "./BuySell";
// import Buttons from "./Buttons";
// import { Link, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
// import InsertLinkIcon from "@mui/icons-material/InsertLink";
// import PerformanceCard from "./PerformanceCard";
// import NewsCard from "./NewsCard";
// import EventsCard from "./EventsCard";
// import Tradeview from "./Tradeview";
// import { newsData } from "@/data/NewsData";
// import axios from "axios";

// const StockInfo = ({ symbol, name, currentvalue, todayHigh, todayLow, week52High, week52Low, peRatio, roe, pChange, change }) => {
//   const [mobileView, setMobileView] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setMobileView(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="mt-[80px]">
//       <Navbar />
//       <hr className="border-gray-500 mt-3 mb-3" />

//       {/* Laptop View */}
//       {!mobileView && (
//         <div>
//           {/* Existing Code (DO NOT MODIFY) */}
//         </div>
//       )}

//       {/* Mobile View */}
      // {mobileView && (
      //   <div className="flex flex-col items-center text-white bg-gray-900 p-4 rounded-lg">
      //     <h2 className="text-xl font-bold mb-2">{name}</h2>
      //     <Tradeview symbol={symbol} interval="1D" className="w-full h-[300px]" />

      //     <div className="w-full mt-4">
      //       <BuySell symbol={symbol} currentvalue={currentvalue} todayHigh={todayHigh} todayLow={todayLow} pChange={pChange} />
      //     </div>

      //     <div className="w-full mt-4">
      //       <div className="flex justify-around border-b border-gray-500 pb-2">
      //         <h2 className="text-lg font-semibold cursor-pointer text-green-500">Overview</h2>
      //         <h2 className="text-lg font-semibold cursor-pointer text-white">News</h2>
      //         <h2 className="text-lg font-semibold cursor-pointer text-white">Events</h2>
      //       </div>

      //       <PerformanceCard
      //         peRatio={peRatio}
      //         roe={roe}
      //         todayHigh={todayHigh}
      //         todayLow={todayLow}
      //         week52High={week52High}
      //         week52Low={week52Low}
      //       />
      //     </div>
      //   </div>
      // )}
//     </div>
//   );
// };

// export default StockInfo;
