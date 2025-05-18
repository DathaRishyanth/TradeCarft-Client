/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Wallet2, TrendingUp, CircleDollarSign } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Component: StatusBadge
function StatusBadge({ status, className }) {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "partial":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      case "pending":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "open":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border",
        getStatusStyles(),
        className,
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

// Component: TableCell
function TableCell({
  children,
  className,
  ...props
}) {
  return (
    <td className={cn("px-4 py-3 text-sm whitespace-nowrap", className)} {...props}>
      {children}
    </td>
  )
}

// Component: TableHeader
function TableHeader({
  children,
  className,
  ...props
}) {
  return (
    <th
      className={cn("px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider", className)}
      {...props}
    >
      {children}
    </th>
  )
}

const Wallet = () => {
  const [balance, setBalance] = useState(6000);
  const [profit, setProfit] = useState(0);
  const [currentTrades, setCurrentTrades] = useState([]);
  const [openOrders, setOpenOrders] = useState([]);
  const [executedOrders, setExecutedOrders] = useState([]);
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
        console.log("userId", userId);
        if (investments.success) {
          setBalance(investments.investments.balance || 0);
          setProfit(investments.investments.profit || 0);
        }

        const tradesRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/trade/current/${userId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });
        const tradesData = await tradesRes.json();
        setCurrentTrades(tradesData);

        const ordersRes = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/orders/${userId}`);
        const ordersData = await ordersRes.json();
        setOpenOrders(ordersData.filter(order => order.status === "Open"));
        setExecutedOrders(ordersData.filter(order => order.status === "Executed"));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const TableHeader = ({ children }) => (
    <th className="p-3 text-left font-medium text-gray-300">{children}</th>
  );

  const TableCell = ({ children }) => (
    <td className="p-3">{children}</td>
  );

  const StatusBadge = ({ status }) => {
    const getStatusColor = () => {
      switch (status.toLowerCase()) {
        case 'executed':
          return 'bg-green-500/20 text-green-400';
        case 'open':
          return 'bg-blue-500/20 text-blue-400';
        default:
          return 'bg-gray-500/20 text-gray-400';
      }
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor()}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-16 lg:w-[1200px]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-gray-400 hover:text-white transition-colors" href="/user">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white" href="/wallet">
                Wallet
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <Wallet2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <h2 className="text-base sm:text-lg font-medium">Balance</h2>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">₹{balance.toLocaleString()}</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              <h2 className="text-base sm:text-lg font-medium">Profit</h2>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">₹{profit.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-lg sm:text-xl font-semibold">Current Trades</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <TableHeader>Stock</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                    <TableHeader className="hidden sm:table-cell">Filled</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {currentTrades.map((trade) => (
                    <tr key={trade.id} className="hover:bg-gray-700/30 transition-colors">
                      <TableCell>{trade.stockSymbol}</TableCell>
                      <TableCell>{trade.tradeType}</TableCell>
                      <TableCell>{trade.quantity}</TableCell>
                      <TableCell className="hidden sm:table-cell">{trade.filledQty}</TableCell>
                      <TableCell>₹{trade.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <StatusBadge status={trade.status} />
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-lg sm:text-xl font-semibold">Open Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <TableHeader>Stock</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {openOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-700/30 transition-colors">
                      <TableCell>{order.stockSymbol}</TableCell>
                      <TableCell>{order.orderType}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>₹{order.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <StatusBadge status={order.status} />
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-xl overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-lg sm:text-xl font-semibold">Executed Orders</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700/50">
                  <tr>
                    <TableHeader>Stock</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {executedOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-700/30 transition-colors">
                      <TableCell>{order.stockSymbol}</TableCell>
                      <TableCell>{order.orderType}</TableCell>
                      <TableCell>{order.quantity}</TableCell>
                      <TableCell>₹{order.price.toLocaleString()}</TableCell>
                      <TableCell>
                        <StatusBadge status={order.status} />
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;