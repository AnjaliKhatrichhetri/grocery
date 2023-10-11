import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-10 z-20">
      <button onClick={handleClick} className="bg-mainColor text-white h-10 w-36  text-lg font-extrabold ">All departments</button>
      {isOpen && (
        <ul className="w-48 border-[1px] border-slate-200 ">
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Fresh Meat</li>
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Vegetables</li>
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Fruit & NutChips</li>
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Fresh Berries</li>
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Fastfood</li>
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Green Herbs</li>
          <li className="bg-white w-22 h-10 p-8  py-1 cursor-pointer text-gray-800 font-serif hover:text-mainColor " >Oatmeal</li>
         
        </ul>
      )}
    </div>
  );
};
export default Dropdown;