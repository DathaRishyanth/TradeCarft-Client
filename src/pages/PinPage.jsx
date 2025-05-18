/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const PinPage = () => {
  const [pin, setPin] = useState("");
  const handleResend = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/sendotp`,
        { phone: localStorage.getItem("phone"), CountryCode: "+91" }
      );
      console.log(response.data, "response");
    } catch (error) {
      console.error("Error logging in with phone number: ", error);
    }
    console.log("Resend");
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">Please Enter Your OTP</h2>
      </div>
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-10">
        <div className="text-center mb-4 text-2xl font-bold">
          <p>Welcome back Mandeep</p>
        </div>

        <div className="flex justify-center p-6">
          <InputOTP maxLength={6} value={pin} onChange={setPin}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />

              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="flex justify-center gap-4">
          <Button className="hover:bg-blue-700" onClick={handleResend}>
            Resend
          </Button>
          <Button className="hover:bg-blue-700">
            <Link to="/user">Submit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PinPage;
