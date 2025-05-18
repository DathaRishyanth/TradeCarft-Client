/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const PerformanceCard = ({ todayLow, todayHigh, week52High, week52Low, peRatio,roe  }) => {
  return (
    <div className="bg-slate-900 text-white p-2 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Performance : </h2>
      <div className="flex justify-between items-center mb-2">
        <span>Today's Low</span>
        <span>Today's High</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl">{todayLow}</span>
        <span className="text-2xl">{todayHigh}</span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span>52W Low</span>
        <span>52W High</span>
      </div>
      <div className="flex justify-between items-center mb-6">
        <span className="text-2xl">{week52Low}</span>
        <span className="text-2xl">{week52High}</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div>PE Ratio</div>
          <div className="text-2xl">{peRatio}</div>
        </div>
        <div>
          <div>ROE</div>
          <div className="text-2xl">{roe}</div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
