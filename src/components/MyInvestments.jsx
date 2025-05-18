import React, { useEffect, useState } from "react";

const MyInvestments = () => {
  const [balance, setBalance] = useState(0);
  const [profit, setProfit] = useState(0);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data for user ID:", userId);
        const investmentsRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/your-investments`, {
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: { "Content-Type": "application/json" }
        });
        const investments = await investmentsRes.json();
        console.log("Investments data:", investments);
        if (investments.success) {
          setBalance(investments.investments.balance || 0);
          setProfit(investments.investments.profit || 0);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="bg-gray-800 flex justify-between items-center text-white rounded-md p-4 border-white font-semibold">
      <div className="text-center">
        <div>₹{balance}</div>
        <div>Balance</div>
      </div>
      <div className="text-center">
        <div>₹{6000 - balance}</div>
        <div>Current value</div>
      </div>
    </div>
  );
};

export default MyInvestments;