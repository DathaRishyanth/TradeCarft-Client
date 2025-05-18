/* eslint-disable no-unused-vars */
import React from 'react';

const ProductToolCard = () => {
  const iconUrl = 'path/to/your/icon.jpeg'; // Replace with actual path to the icon image
  const title = "F&O";

  return (
    <div className="bg-gray-800 rounded-lg pr-10 pl-10 pt-3 pb-3 text-white shadow-lg flex flex-col items-center hover-zoom">
      <img src={"https://storage.googleapis.com/groww-assets/web-assets/img/stock/fno_mint_dark.svg"} alt={`${title} icon`} className="w-16 h-16 mb-4" />
      <div className="text-lg font-bold">{title}</div>
    </div>
  );
};

export default ProductToolCard;
