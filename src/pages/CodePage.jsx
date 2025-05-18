/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import CodeEditor from '../components/CodeEditor';
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar2";

const Competition = () => {
  const path = useLocation().pathname;
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <div className=" bg-[#0f0a19] text-gray-500 px-6 py-4">
        <CodeEditor />
      </div>
    </div>
  )
}

export default Competition