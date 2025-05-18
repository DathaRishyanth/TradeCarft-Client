import React from 'react';

const NewsCard = ({ news1, news2, news3 }) => {
  return (
    <div className="bg-slate-900 text-white p-4 rounded-lg">
      <div className="space-y-4">
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <span className="text-xl">{news1 || "news 1"}</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <span className="text-xl">{news2 || "news 2"}</span>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
          <span className="text-xl">{news3 || "news 3"}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
