const strategiesInfo = {
  ADX: {
    title: "Average Directional Index (ADX) Indicator",
    name: "Average Directional Index (ADX) Indicator: Measuring Trend Strength",
    image: "/ADX_pic.jpg",
    shortDesc: "Measures trend strength regardless of direction...",
    fullDesc:
      "**What is the ADX Indicator?**\n\n" +
      "The **Average Directional Index (ADX)** is a technical indicator that measures the strength of a trend, regardless of its direction. " +
      "It helps traders determine whether an asset is **trending strongly or moving sideways**.\n\n" +
      "**The ADX is composed of three lines:**\n\n" +
      "- **ADX Line** – Measures trend strength (**values above 25 indicate a strong trend, while values below 20 suggest a weak or no trend**).\n" +
      "- **+DI (Positive Directional Indicator)** – Measures the strength of **upward movements**.\n" +
      "- **-DI (Negative Directional Indicator)** – Measures the strength of **downward movements**.\n\n" +
      "**ADX Trading Strategy: Trend Strength Confirmation**\n\n" +
      "Traders use the ADX to confirm whether a trend is **worth trading**. " +
      "A common strategy involves combining the ADX with **moving averages or price action analysis**.\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. **Identify Trend Strength:** Look for **ADX values above 25** to confirm a strong trend.\n" +
      "2. **Determine Trend Direction:**\n" +
      "   - If **+DI is above -DI**, the trend is **bullish**.\n" +
      "   - If **-DI is above +DI**, the trend is **bearish**.\n" +
      "3. **Entry Signals:**\n" +
      "   - **Buy** when **ADX > 25** and **+DI crosses above -DI**.\n" +
      "   - **Sell** when **ADX > 25** and **-DI crosses above +DI**.\n" +
      "4. **Exit or Avoid Trades:** If **ADX is below 20**, the market is **weak or ranging**, making it riskier to trade.\n\n" +
      "**Example: ADX Strategy in Action**\n\n" +
      "Let's say we have the following ADX values for a stock over 12 days:\n\n" +
      "- **Day 1:** ADX 18, +DI 22, -DI 20\n" +
      "- **Day 2:** ADX 22, +DI 25, -DI 18\n" +
      "- **Day 3:** ADX 24, +DI 28, -DI 17\n" +
      "- **Day 4:** ADX 26, +DI 30, -DI 15\n" +
      "- **Day 5:** ADX 30, +DI 33, -DI 14\n" +
      "- **Day 6:** ADX 34, +DI 35, -DI 13\n" +
      "- **Day 7:** ADX 38, +DI 38, -DI 12\n" +
      "- **Day 8:** ADX 40, +DI 40, -DI 10\n" +
      "- **Day 9:** ADX 42, +DI 42, -DI 8\n" +
      "- **Day 10:** ADX 39, +DI 38, -DI 10\n" +
      "- **Day 11:** ADX 35, +DI 35, -DI 12\n" +
      "- **Day 12:** ADX 28, +DI 30, -DI 15\n\n" +
      "In this example, we can see that the **ADX rises above 25 on Day 4**, confirming a **strong trend**. " +
      "Additionally, **+DI is above -DI**, signaling a **bullish trend**, making it a potential **buy opportunity**.\n\n" +
      "By **Day 10, the ADX starts declining**, indicating that the trend is **losing strength**. " +
      "If **ADX falls below 25**, it would suggest traders should consider **closing their positions or being cautious**.\n\n" +
      "**Conclusion**\n\n" +
      "Both **Moving Averages** and **ADX indicators** can help traders make better decisions. " +
      "While **moving averages help identify trends and entry points**, **ADX confirms the trend’s strength**. " +
      "Using them together enhances **trading accuracy, reducing false signals**.",
  },
  CCI: {
    title: "Commodity Channel Index (CCI) Indicator",
    name: "Commodity Channel Index (CCI) Indicator: Identifying Overbought and Oversold Conditions",
    image: "/CCI_pic.jpg",
    shortDesc:
      "A momentum oscillator that identifies overbought and oversold conditions...",
    fullDesc:
      "**What is the CCI Indicator?**\n\n" +
      "The **Commodity Channel Index (CCI)** is a **momentum-based oscillator** that measures an asset’s **deviation from its average price**. " +
      "It helps traders identify **overbought and oversold conditions**, which can indicate potential **trend reversals**.\n\n" +
      "The **CCI typically oscillates between +100 and -100:**\n\n" +
      "- **Above +100** – Indicates **overbought conditions** (possible price drop).\n" +
      "- **Below -100** – Indicates **oversold conditions** (possible price increase).\n\n" +
      "**CCI Trading Strategy: Reversal and Trend Confirmation**\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. **Identify Extreme Conditions:**\n" +
      "   - If **CCI > +100**, the asset may be **overbought**, signaling a potential **sell**.\n" +
      "   - If **CCI < -100**, the asset may be **oversold**, signaling a potential **buy**.\n" +
      "2. **Look for Confirmations:**\n" +
      "   - A **reversal in CCI** from extreme levels can **confirm trade signals**.\n" +
      "   - Combine with **moving averages** or **ADX** to strengthen accuracy.\n" +
      "3. **Entry Signals:**\n" +
      "   - **Buy** when **CCI crosses above -100** after being in **oversold territory**.\n" +
      "   - **Sell** when **CCI crosses below +100** after being in **overbought territory**.\n\n" +
      "**Example: CCI Strategy in Action**\n\n" +
      "Assume a stock's **CCI readings** over 10 days:\n\n" +
      "- **Day 1:** CCI -120 (**oversold**)\n" +
      "- **Day 2:** CCI -110\n" +
      "- **Day 3:** CCI -90\n" +
      "- **Day 4:** CCI -60\n" +
      "- **Day 5:** CCI 0\n" +
      "- **Day 6:** CCI 50\n" +
      "- **Day 7:** CCI 110 (**overbought**)\n" +
      "- **Day 8:** CCI 130\n" +
      "- **Day 9:** CCI 105\n" +
      "- **Day 10:** CCI 80\n\n" +
      "On **Day 1**, CCI is **below -100**, indicating an **oversold condition**. " +
      "If it **rises above -100 on Day 3**, a **buy signal** is generated.\n\n" +
      "On **Day 7**, CCI crosses **+100**, indicating **overbought conditions**. " +
      "If it **falls below +100 on Day 9**, a **sell signal** is triggered.\n\n" +
      "**Conclusion**\n\n" +
      "**Moving Averages, ADX, and CCI indicators** can enhance **trading accuracy** by providing **trend signals and confirmations**. " +
      "Using them together allows traders to **better manage risk** and **avoid false signals**.",
  },
  MVA: {
    title: "Moving Average (MA) Indicator",
    name: "Moving Average (MA) Indicator: A Simple Yet Powerful Tool for Traders",
    image: "/MA_pic.jpg",
    shortDesc: "Smoothens price action...",
    fullDesc:
      "**What is a Moving Average?**\n\n" +
      "A Moving Average (MA) is a widely used technical indicator that helps traders identify trends by smoothing out price fluctuations. " +
      "It calculates the average price of an asset over a specified period, making it easier to spot trends and reversals.\n\n" +
      "**There are two main types of moving averages:**\n\n" +
      "- **Simple Moving Average (SMA)** – The arithmetic mean of prices over a set period.\n" +
      "- **Exponential Moving Average (EMA)** – Gives more weight to recent prices, making it more responsive to price changes.\n\n" +
      "**Moving Average Trading Strategy**\n\n" +
      "One of the most popular strategies using moving averages is the **Moving Average Crossover Strategy**. It involves using two MAs of different periods to generate buy and sell signals.\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. Choose a short-term moving average (e.g., **10-day EMA**) and a long-term moving average (e.g., **50-day EMA**).\n" +
      "2. **Buy Signal:** When the short-term MA crosses above the long-term MA (**bullish crossover**), it signals an uptrend.\n" +
      "3. **Sell Signal:** When the short-term MA crosses below the long-term MA (**bearish crossover**), it signals a downtrend.\n\n" +
      "**Example: Moving Average Crossover in Action**\n\n" +
      "Imagine a stock trading at different prices over 10 days:\n\n" +
      "- **Day 1:** $100\n" +
      "- **Day 2:** $102\n" +
      "- **Day 3:** $105\n" +
      "- **Day 4:** $107\n" +
      "- **Day 5:** $110\n" +
      "- **Day 6:** $113\n" +
      "- **Day 7:** $115\n" +
      "- **Day 8:** $118\n" +
      "- **Day 9:** $120\n" +
      "- **Day 10:** $125\n\n" +
      "If we calculate a **10-day EMA** and a **50-day EMA**, we may observe the **10-day EMA crossing above the 50-day EMA** around **Day 6**, signaling a potential **buy opportunity**.\n\n" +
      "Similarly, if the price starts declining and the **10-day EMA crosses below the 50-day EMA**, it would indicate a **selling opportunity**.\n\n" +
      "**Conclusion**\n\n" +
      "The Moving Average is a fundamental yet effective indicator for traders. By combining **short-term and long-term MAs**, traders can create powerful strategies to identify trends and make informed trading decisions. " +
      "However, it’s best to use moving averages alongside **other technical indicators** for higher accuracy.",
  },
  StochasticOscillator: {
    title: "Stochastic Oscillator Indicator",
    name: "Stochastic Oscillator: A Momentum-Based Indicator",
    image: "/Schosicalltor_pic.jpg",
    shortDesc:
      "A momentum indicator that helps traders identify overbought and oversold conditions for potential reversals...",
    fullDesc:
      "**What is the Stochastic Oscillator?**\n\n" +
      "The **Stochastic Oscillator** is a **momentum indicator** that measures the **closing price relative to its price range** over a specific period. It consists of two lines:\n\n" +
      "- **%K Line** – The main line, calculated using recent **high-low ranges**.\n" +
      "- **%D Line** – A **moving average** of the %K line, used as a **signal line**.\n\n" +
      "The **Stochastic Oscillator** ranges from **0 to 100**:\n" +
      "- **Above 80** → Overbought condition (**potential sell signal**).\n" +
      "- **Below 20** → Oversold condition (**potential buy signal**).\n\n" +
      "**Stochastic Oscillator Trading Strategy**\n\n" +
      "The **Stochastic Oscillator** is widely used for **identifying reversals and trend strength**.\n\n" +
      "**Strategy 1: Overbought & Oversold Reversals**\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. **Identify Extreme Readings:**\n" +
      "   - If the **Stochastic is above 80**, the asset is **overbought** (**sell opportunity**).\n" +
      "   - If the **Stochastic is below 20**, the asset is **oversold** (**buy opportunity**).\n" +
      "2. **Wait for a Crossover:**\n" +
      "   - **Buy** when **%K crosses above %D** in the oversold area.\n" +
      "   - **Sell** when **%K crosses below %D** in the overbought area.\n" +
      "3. **Exit Strategy:**\n" +
      "   - Exit when the **Stochastic moves back into the 20-80 range**.\n\n" +
      "**Example: Stochastic Reversal Trade**\n\n" +
      "A stock has the following **Stochastic readings**:\n\n" +
      "- **Day 1:** Stochastic **15** (**oversold**).\n" +
      "- **Day 3:** Stochastic **25** (**buy signal** as **%K crosses above %D**).\n" +
      "- **Day 5:** Stochastic **75**.\n" +
      "- **Day 7:** Stochastic **85** (**overbought**).\n" +
      "- **Day 8:** Stochastic **78** (**sell signal** as **%K crosses below %D**).\n\n" +
      "This strategy helps traders **capture reversal points** with **momentum confirmation**.\n\n" +
      "**Strategy 2: Stochastic Trend Confirmation**\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. **Identify Trend Direction:**\n" +
      "   - If **Stochastic stays above 50**, the trend is **bullish**.\n" +
      "   - If **Stochastic stays below 50**, the trend is **bearish**.\n" +
      "2. **Look for Crossovers in Trend Direction:**\n" +
      "   - **Buy** when **%K crosses above %D** in an **uptrend**.\n" +
      "   - **Sell** when **%K crosses below %D** in a **downtrend**.\n" +
      "3. **Exit Strategy:**\n" +
      "   - Exit when **Stochastic moves back below 50** (for buys) or **above 50** (for sells).\n\n" +
      "**Example: Stochastic Trend Trading**\n\n" +
      "A stock in an **uptrend** has the following **Stochastic values**:\n\n" +
      "- **Day 1:** Stochastic **55** (**bullish trend**).\n" +
      "- **Day 3:** Stochastic **60**.\n" +
      "- **Day 5:** Stochastic **65** (**%K crosses above %D – buy signal**).\n" +
      "- **Day 7:** Stochastic **80**.\n" +
      "- **Day 9:** Stochastic **70** (**exit signal** as trend weakens).\n\n" +
      "This strategy ensures traders **follow the trend** rather than catching **tops and bottoms**.\n\n" +
      "**Conclusion**\n\n" +
      "**Bollinger Bands** and the **Stochastic Oscillator** are powerful tools for traders:\n\n" +
      "- **Bollinger Bands** help analyze **volatility and price swings**.\n" +
      "- **Stochastic Oscillator** helps identify **overbought/oversold levels** and **trend strength**.\n\n" +
      "Combining both indicators can **improve accuracy**. For example, a **Bollinger Band breakout confirmed by a Stochastic crossover** can signal a **high-probability trade**.\n\n",
  },

  BollingerBands: {
    title: "Bollinger Bands Indicator",
    name: "Bollinger Bands: A Versatile Tool for Volatility Trading",
    image: "/BB_pic.jpg",
    shortDesc:
      "A volatility-based indicator that helps traders analyze price trends and identify trading opportunities...",
    fullDesc:
      "**What are Bollinger Bands?**\n\n" +
      "**Bollinger Bands** are a popular technical indicator developed by **John Bollinger** that helps traders analyze **market volatility** and **price trends**. " +
      "The bands consist of three lines:\n\n" +
      "- **Upper Band** – Typically set at **2 standard deviations above** the middle band.\n" +
      "- **Middle Band** – A **simple moving average (SMA)**, usually **20 periods**.\n" +
      "- **Lower Band** – Typically set at **2 standard deviations below** the middle band.\n\n" +
      "The bands **expand and contract** based on **market volatility**:\n" +
      "- **High volatility** → Bands widen.\n" +
      "- **Low volatility** → Bands contract.\n\n" +
      "**Bollinger Bands Trading Strategy**\n\n" +
      "Traders use Bollinger Bands to identify **overbought and oversold conditions, breakouts, and trend reversals**.\n\n" +
      "**Strategy 1: Bollinger Band Mean Reversion**\n\n" +
      "This strategy assumes that prices tend to **revert to the middle band** after moving to the outer bands.\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. **Identify Overbought and Oversold Conditions:**\n" +
      "   - If **price touches the upper band**, the asset may be **overbought** (potential **sell** opportunity).\n" +
      "   - If **price touches the lower band**, the asset may be **oversold** (potential **buy** opportunity).\n" +
      "2. **Confirm with Price Action:**\n" +
      "   - Look for **reversal candlestick patterns** like **Doji** or **Engulfing candles**.\n" +
      "3. **Entry Signals:**\n" +
      "   - **Buy** when the price **touches the lower band** and starts moving back toward the middle band.\n" +
      "   - **Sell** when the price **touches the upper band** and starts declining toward the middle band.\n" +
      "4. **Exit Strategy:**\n" +
      "   - Exit when the price **reaches the middle band** or shows signs of **trend exhaustion**.\n\n" +
      "**Example: Bollinger Band Reversion in Action**\n\n" +
      "Imagine a stock trading as follows:\n\n" +
      "- **Day 1:** Price touches the **lower band** ($100) → **Buy signal**.\n" +
      "- **Day 3:** Price moves to the **middle band** ($105).\n" +
      "- **Day 5:** Price reaches the **upper band** ($110) → **Sell signal**.\n\n" +
      "A trader buying at **$100** and selling at **$110** successfully captures a **price swing**.\n\n" +
      "**Strategy 2: Bollinger Band Breakout**\n\n" +
      "Breakouts occur when **price moves outside the bands**, signaling **strong momentum**.\n\n" +
      "**Strategy Steps:**\n\n" +
      "1. **Identify a Squeeze Phase:**\n" +
      "   - When the bands **contract**, it signals **low volatility** and a potential **breakout**.\n" +
      "2. **Wait for a Breakout:**\n" +
      "   - **Buy** if price **breaks above the upper band** with **strong volume**.\n" +
      "   - **Sell** if price **breaks below the lower band** with **strong volume**.\n" +
      "3. **Exit Strategy:**\n" +
      "   - Exit when **momentum slows** or price **re-enters the bands**.\n\n" +
      "**Example: Bollinger Band Breakout**\n\n" +
      "If a stock’s price has been **consolidating between $95-$100** and then **breaks above $101** with **high volume**, it signals a **buy opportunity**.\n\n",
  },
};

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { ChevronRight, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const StratForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    symbols: "",
    weights: "",
    strategy: {},
  });
  const [stocks, setStocks] = useState("");

  const stockOptions = [
    { symbol: "ADANIENT", name: "Adani Enterprises" },
    { symbol: "ADANIPORTS", name: "Adani Ports & SEZ" },
    { symbol: "APOLLOHOSP", name: "Apollo Hospitals" },
    { symbol: "ASIANPAINT", name: "Asian Paints" },
    { symbol: "AXISBANK", name: "Axis Bank" },
    { symbol: "BAJAJ-AUTO", name: "Bajaj Auto" },
    { symbol: "BAJFINANCE", name: "Bajaj Finance" },
    { symbol: "BAJAJFINSV", name: "Bajaj Finserv" },
    { symbol: "BPCL", name: "Bharat Petroleum" },
    { symbol: "BHARTIARTL", name: "Bharti Airtel" },
    { symbol: "BRITANNIA", name: "Britannia Industries" },
    { symbol: "CIPLA", name: "Cipla" },
    { symbol: "COALINDIA", name: "Coal India" },
    { symbol: "DIVISLAB", name: "Divi's Laboratories" },
    { symbol: "DRREDDY", name: "Dr Reddy's Laboratories" },
    { symbol: "EICHERMOT", name: "Eicher Motors" },
    { symbol: "GRASIM", name: "Grasim Industries" },
    { symbol: "HCLTECH", name: "HCL Technologies" },
    { symbol: "HDFCBANK", name: "HDFC Bank" },
    { symbol: "HDFCLIFE", name: "HDFC Life Insurance" },
    { symbol: "HEROMOTOCO", name: "Hero MotoCorp" },
    { symbol: "HINDALCO", name: "Hindalco Industries" },
    { symbol: "HINDUNILVR", name: "Hindustan Unilever" },
    { symbol: "ICICIBANK", name: "ICICI Bank" },
    { symbol: "ITC", name: "ITC Limited" },
    { symbol: "INDUSINDBK", name: "IndusInd Bank" },
    { symbol: "INFY", name: "Infosys" },
    { symbol: "JSWSTEEL", name: "JSW Steel" },
    { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank" },
    { symbol: "LTIM", name: "LTIMindtree" },
    { symbol: "LT", name: "Larsen & Toubro" },
    { symbol: "M&M", name: "Mahindra & Mahindra" },
    { symbol: "MARUTI", name: "Maruti Suzuki" },
    { symbol: "NTPC", name: "NTPC" },
    { symbol: "NESTLEIND", name: "Nestle India" },
    { symbol: "ONGC", name: "Oil & Natural Gas Corporation" },
    { symbol: "POWERGRID", name: "Power Grid Corporation" },
    { symbol: "RELIANCE", name: "Reliance Industries" },
    { symbol: "SBILIFE", name: "SBI Life Insurance" },
    { symbol: "SBIN", name: "State Bank of India" },
    { symbol: "SUNPHARMA", name: "Sun Pharmaceutical" },
    { symbol: "TCS", name: "Tata Consultancy Services" },
    { symbol: "TATACONSUM", name: "Tata Consumer Products" },
    { symbol: "TATAMOTORS", name: "Tata Motors" },
    { symbol: "TATASTEEL", name: "Tata Steel" },
    { symbol: "TECHM", name: "Tech Mahindra" },
    { symbol: "TITAN", name: "Titan Company" },
    { symbol: "UPL", name: "UPL Limited" },
    { symbol: "ULTRACEMCO", name: "UltraTech Cement" },
    { symbol: "WIPRO", name: "Wipro" },
  ];
  const [response, setResponse] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isFromFooter, setIsFromFooter] = useState(false);

  useEffect(() => {
    const strategyParam = searchParams.get("strategy");
    if (strategyParam && strategiesInfo[strategyParam]) {
      setSelectedStrategy(strategiesInfo[strategyParam]);
      setIsFromFooter(true);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStockSelect = (symbol) => {
    // If there's already content, append with comma
    const newValue = formData.symbols
      ? `${formData.symbols}, ${symbol}`
      : symbol;
    setFormData((prev) => ({ ...prev, symbols: newValue }));
  };

  const handleClosePopup = () => {
    if (isFromFooter) {
      navigate(-1);
    } else {
      setSelectedStrategy(null);
    }
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedStrategy = { ...prev.strategy };
      if (checked) {
        updatedStrategy[value] = value === "MVA" ? ["", "", "", ""] : ["", ""];
      } else {
        delete updatedStrategy[value];
      }
      return { ...prev, strategy: updatedStrategy };
    });
  };

  const handleParameterChange = (strategy, index, value) => {
    setFormData((prev) => ({
      ...prev,
      strategy: {
        ...prev.strategy,
        [strategy]: prev.strategy[strategy].map((param, i) =>
          i === index ? value : param
        ),
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Convert weights input into an array of numbers
    const weightNumbers = formData.weights
      .split(",")
      .map((w) => w.trim()) // Trim whitespace
      .map(Number) // Convert to numbers
      .filter((num) => !isNaN(num)); // Remove invalid entries
    const stockName = formData.symbols.split(",").map((s) => s.trim()); // Trim whitespace
    // Prepare request data with formatted weights
    const requestData = {
      symbols: stockName,
      weights: weightNumbers, // Corrected format for weights
      strategy: formData.strategy, // Keeping strategy as is
    };
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/strategy/stra`,
        requestData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setResponse(res.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 m-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* /* Left Side - Form */} 
                <div className="w-full lg:w-1/2">
                <div className="bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-8 backdrop-blur-lg border border-gray-700">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Strategy Configuration
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-4">
                    <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Stock Symbol
                    </label>
                    <div className="flex gap-2">
                      <input
                      type="text"
                      name="symbols"
                      value={formData.symbols}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Select or type a stock symbol..."
                      required
                      />
                      <DropdownMenu>
                      <DropdownMenuTrigger className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition duration-200 flex items-center justify-center gap-2">
                        <ChevronRight className="h-4 w-4 rotate-90" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="max-h-[225px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 bg-gray-800 border border-gray-700 text-white">
                        {stockOptions.map((stock) => (
                        <DropdownMenuItem
                          key={stock.symbol}
                          onClick={() => handleStockSelect(stock.symbol)}
                          className="cursor-pointer hover:bg-gray-700 h-[45px] flex items-center"
                        >
                          {stock.symbol} - {stock.name}
                        </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    </div>
                    <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Stock Weights
                    </label>
                    <input
                      type="text"
                      name="weights"
                      value={formData.weights}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      placeholder="Enter stock weights(comma-separated, e.g., 0.3,0.4,0.3)..."
                      required
                    />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-white text-sm font-medium mb-4">
                    Select Strategies
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {["ADX", "CCI", "MVA", "Stochasticoscillator"].map((strat) => (
                      <div
                      key={strat}
                      className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg"
                      >
                      <input
                        type="checkbox"
                        value={strat}
                        checked={strat in formData.strategy}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5 rounded border-gray-500 text-blue-500 focus:ring-blue-500"

                      />
                      <span className="text-white font-medium">{strat}</span>
                      </div>
                    ))}
                    </div>
                  </div>

                  {Object.keys(formData.strategy).map((strat) => (
                    <div key={strat} className="space-y-3">
                    <label className="block text-white text-sm font-medium mb-2">
                      {strat} Parameters
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {formData.strategy[strat].map((param, index) => (
                      <input
                        key={index}
                        type="text"
                        value={param}
                        onChange={(e) =>
                        handleParameterChange(strat, index, e.target.value)
                        }
                        className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        placeholder={
                        strat === "ADX" 
                          ? index === 0 
                          ? "+DI (recommend 14)" 
                          : "-DI (recommend 25)"
                          : strat === "CCI"
                          ? index === 0
                          ? "Fast CCI (recommend 10-14)"
                          : "Slow CCI (recommend 50-100)"
                          : strat === "Stochasticoscillator"
                          ? index === 0
                          ? "Upper K(recommend 80)"
                          : "Lower K(recommend 20)"
                          : strat === "MVA"
                          ? index === 0
                          ? "Exit Upper (recommend 1.05)"
                          : index === 1
                          ? "Exit Lower (recommend 0.95)"
                          : index === 2
                          ? "Short term interval (recommend 7)"
                          : "Long term interval (recommend 21)"
                          : `Parameter ${index + 1}`
                        }
                      />
                      ))}
                    </div>
                    </div>
                  ))}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg transition-all duration-200 transform ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-blue-600 hover:to-purple-600 hover:scale-[1.02]"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800`}
                  >
                    {loading ? (
                    <div className="flex items-center space-x-2">
                      <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                      </svg>
                      <span>Analyzing...</span>
                    </div>
                    ) : (
                    "Analyze Strategy"
                    )}
                  </button>
                  </form>

                  {response && (
                  <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-800 rounded-2xl border border-gray-700 shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    🔍 Analysis Results
                    </h3>
                    <div className="bg-gray-900 p-4 rounded-lg text-gray-300 text-base sm:text-lg font-mono">
                    <span className="text-green-400">Result:</span>{" "}
                    <span className="text-blue-400">{response.result} %</span>
                    </div>
                  </div>
                  )}
                </div>
                </div>

                {/* Right Side - Strategy Cards */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(strategiesInfo).map(([key, strat]) => (
                <div
                  key={key}
                  onClick={() => setSelectedStrategy(strat)}
                  className="group bg-gray-800 rounded-2xl overflow-hidden cursor-pointer border border-gray-700 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                >
                  <div className="relative">
                    <img
                      src={strat.image}
                      alt={strat.name}
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {strat.title}
                    </h3>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <span className="text-sm">Learn more</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategy Details Modal */}
      {selectedStrategy && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 text-center">
            <div
              className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
              onClick={handleClosePopup}
            />

            <div className="relative inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClosePopup();
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-colors z-50"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <img
                  src={selectedStrategy.image}
                  alt={selectedStrategy.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <h2 className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-3xl sm:text-4xl font-bold text-white">
                  {selectedStrategy.name}
                </h2>
              </div>

              <div className="p-4 sm:p-8">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {selectedStrategy.fullDesc.split("**").map((chunk, index) =>
                      index % 2 === 1 ? (
                        <strong key={index} className="text-blue-400">
                          {chunk}
                        </strong>
                      ) : (
                        chunk
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StratForm;
