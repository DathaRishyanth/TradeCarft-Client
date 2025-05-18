import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { useNavigate } from "react-router-dom";

function BuySell({ symbol, currentvalue, balance, todayHigh, todayLow, pChange }) {
  const [quantity, setQuantity] = useState("");
  const [priceLimit, setPriceLimit] = useState("");
  const [orderPrice, setOrderPrice] = useState("_");
  const [stopLoss, setStopLoss] = useState("");
  const [target, setTarget] = useState("");
  const [userBalance, setUserBalance] = useState(balance);
  const navigate = useNavigate();

  const requiredAmount = quantity && currentvalue ? (quantity * currentvalue).toFixed(2) : 0;

  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handlePriceLimitChange = (e) => {
    const price = e.target.value;
    setPriceLimit(price);
    setOrderPrice(price);
  };


 
    useEffect(() => {
      const fetchBalance = async () => {
        try {
          const userId = localStorage.getItem("userId");
          if (!userId) return;
  
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/your-investments`, {
            method: "POST",
            body: JSON.stringify({ userId }),
            headers: { "Content-Type": "application/json" }
          });
  
          const balanceData = await response.json();
          balance = (balanceData.investments.balance).toFixed(2);
          console.log("balance", balance);
          console.log("balanceData", balanceData);
          setUserBalance(balance);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      };
  
    });



  const handleTrade = async (tradeType) => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      console.error("No token or user ID found, please log in.");
      alert("Please log in to continue");
      return;
    }

    const tradeData = {
      userId: Number(userId),
      stockSymbol: symbol,
      tradeType,
      quantity: Number(quantity),
      price: Number(priceLimit) || Number(currentvalue),
      stopLoss: stopLoss ? Number(stopLoss) : null,
      target: target ? Number(target) : null,
    };

    console.log("Sending trade data:", tradeData);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/trade/current`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tradeData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Trade successful:", result);
        navigate("/wallet");
      }
    } catch (error) {
      console.error("Error placing trade:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <Tabs defaultValue="account" className="w-[350px] text-white">
      <TabsList className="grid w-full grid-cols-2 bg-slate-800 border-gray-500 font-semibold">
        <TabsTrigger className="text-white font-semibold" value="account">Buy</TabsTrigger>
        <TabsTrigger className="text-white font-semibold" value="password">Sell</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="bg-slate-900">
        <Card className="bg-slate-900 text-white">
          <CardHeader>
            <CardTitle>{symbol}</CardTitle>
            <CardDescription>₹{currentvalue} ({pChange})</CardDescription>
          </CardHeader>
          <hr className="border-gray-500 mb-3" />
          <CardContent className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="text" value={quantity} onChange={handleQuantityChange} className="text-black" />
            <Label htmlFor="priceLimit">Price Limit</Label>
            <Input id="priceLimit" type="text" value={priceLimit} onChange={handlePriceLimitChange} className="text-black" />
            <Label htmlFor="target">Target</Label>
            <Input id="target" type="text" value={target} onChange={(e) => setTarget(e.target.value)} className="text-black" />
            <Label htmlFor="stopLoss">Stop Loss</Label>
            <Input id="stopLoss" type="text" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} className="text-black" />
            <div className="text-xs text-center pt-16">Order will be executed at ₹{orderPrice} or lower price</div>
            <hr className="border-gray-500" />
            <div className="flex justify-between items-center text-xs">
              {console.log("userbalcne", userBalance)}
              <div>Balance: ₹{userBalance}</div>
              <div>Required: ₹{requiredAmount}</div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => handleTrade('buy')} className="bg-blue-900 hover:bg-blue-500">Buy</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password" className="bg-slate-900">
        <Card className="bg-slate-900 text-white">
          <CardHeader>
            <CardTitle>{symbol}</CardTitle>
            <CardDescription>₹{currentvalue} ({pChange})</CardDescription>
          </CardHeader>
          <hr className="border-gray-500 mb-3" />
          <CardContent className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="text" value={quantity} onChange={handleQuantityChange} className="text-black" />
            <Label htmlFor="priceLimit">Price Limit</Label>
            <Input id="priceLimit" type="text" value={priceLimit} onChange={handlePriceLimitChange} className="text-black" />
            <Label htmlFor="target">Target</Label>
            <Input id="target" type="text" value={target} onChange={(e) => setTarget(e.target.value)} className="text-black" />
            <Label htmlFor="stopLoss">Stop Loss</Label>
            <Input id="stopLoss" type="text" value={stopLoss} onChange={(e) => setStopLoss(e.target.value)} className="text-black" />
            <div className="text-xs text-center pt-16">Order will be executed at ₹{orderPrice} or lower price</div>
            <hr className="border-gray-500" />
            <div className="flex justify-between items-center text-xs">
              <div>Balance: ₹{balance}</div>
              <div>Required: ₹{requiredAmount}</div>
            </div>
          </CardContent>
          <CardFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={() => handleTrade('sell')} className="bg-blue-900 hover:bg-blue-500">Sell</Button>
              </DialogTrigger>
            </Dialog>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default BuySell;
