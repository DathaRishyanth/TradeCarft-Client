// StrategyFormModal.jsx
import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const StrategyFormModal = ({ competitionId, entryId, onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    symbols: "",
    weights: "",
    strategy: {},
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    console.log(entryId)
    
    if (!entryId) {
      alert("Missing entry ID. Please register first.");
      return;
    }

    try {
      const weightNumbers = formData.weights
        .split(",")
        .map((w) => w.trim())
        .map(Number)
        .filter(num => !isNaN(num));
        
      const stockName = formData.symbols.split(",").map((s) => s.trim());
      
      console.log({
        entryId: Number(entryId),
        symbols: stockName,
        weights: weightNumbers,
        strategy: formData.strategy,
      });

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/competition/strategy`,
        {
          entryId: Number(entryId),
          symbols: stockName,
          weights: weightNumbers,
          strategy: formData.strategy,
        },
        {
          headers: { 
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          },
        }
      );      

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Submission failed: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Submit Strategy</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          {/* Form fields from StratForm */}
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Stock Symbol
            </label>
            <input
              type="text"
              name="symbols"
              value={formData.symbols}
              onChange={handleChange}
              list="stockOptions"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
            <datalist id="stockOptions">
              {stockOptions.map((stock) => (
                <option key={stock.symbol} value={stock.symbol}>
                  {stock.name}
                </option>
              ))}
            </datalist>
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
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
          </div>

          <div className="space-y-4">
            <label className="block text-white text-sm font-medium">
              Select Strategies
            </label>
            <div className="grid grid-cols-2 gap-3">
              {["ADX", "CCI", "MVA", "Schosicalltor"].map((strat) => (
                <div
                  key={strat}
                  className="flex items-center space-x-3 bg-gray-700 p-3 rounded-lg"
                >
                  <input
                    type="checkbox"
                    value={strat}
                    checked={strat in formData.strategy}
                    onChange={handleCheckboxChange}
                    className="w-5 h-5"
                  />
                  <span className="text-white font-medium">{strat}</span>
                </div>
              ))}
            </div>
          </div>

          {Object.keys(formData.strategy).map((strat) => (
            <div key={strat} className="space-y-3">
              <label className="block text-white text-sm font-medium">
                {strat} Parameters
              </label>
              <div className="grid grid-cols-2 gap-3">
                {formData.strategy[strat].map((param, index) => (
                  <input
                    key={index}
                    type="text"
                    value={param}
                    onChange={(e) =>
                      handleParameterChange(strat, index, e.target.value)
                    }
                    className="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white"
                  />
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Strategy"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StrategyFormModal;