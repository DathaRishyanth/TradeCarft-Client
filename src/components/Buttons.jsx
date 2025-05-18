/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Buttons = ({text}) => {

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full text-sm">
        {text}
      </button>
    </div>
  )
}

export default Buttons