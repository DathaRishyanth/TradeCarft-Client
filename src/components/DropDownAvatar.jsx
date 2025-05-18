/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

const DropDownAvatar = () => {
  const [userData, setUserData] = useState({ name: '', email: '' });

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
        // console.log("Token:", token);
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/me`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // Include token in Authorization header
          },
        });
        
        if (response.status === 401) {
          console.log("Unauthorized access");
          return;
        }

        const data = await response.json();
        console.log(data.user.id);
        localStorage.setItem("userId", data.user.id);
        
        setUserData({
          email: data.user.email,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center ml-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
            <KeyboardArrowDownIcon style={{ color: "white" }} className="ml-2" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-slate-800 text-white w-60">
          <DropdownMenuLabel className="text-lg"><div className="ml-2 text-white">
              <p>{ userData.email }</p>
              <p className="text-sm text-gray-400">{userData.email}</p>
            </div></DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Bank & AutoPay</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <Link to="/importfunds"><span className="ml-2">Import Funds</span></Link>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Watchlist</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Orders</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Reports</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">SIPs</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Customer Support 24x7</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="ml-2">Settings</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center">
              <Link to="/"><span className="ml-2">Log Out</span></Link>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDownAvatar;