import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <button onClick={handleClick} className="uppercase font-mono text-gray-900  text-lg font-semibold pt-4 p-2 border-footer">Pages</button>
      {isOpen && (
        <ul className=" ">
          <Link to="/shoppingdetails"><li className="w-40 text-left p-5 font-[poppins] h-10 z-30  text-white  border-slate-200 py-1 cursor-pointer bg-[#333333] text-lg hover:text-mainColor " >Shop Details</li></Link>
         <Link to="/shoppingcart"><li className="w-40 text-left p-5 font-[poppins] h-10 z-30  text-white  border-slate-200 py-1 cursor-pointer bg-[#333333] text-lg hover:text-mainColor " >Shipping Cart</li></Link>
          <Link to="/checkout"><li className="w-40 text-left p-5 font-[poppins] h-10 z-30  text-white  border-slate-200 py-1 cursor-pointer bg-[#333333] text-lg hover:text-mainColor " >Check Out</li></Link>
         <Link to="/blogdetails"><li className="w-40 text-left p-5 font-[poppins] h-10 z-30  text-white  border-slate-200 py-1 cursor-pointer bg-[#333333] text-lg hover:text-mainColor " >Blog Details</li>
</Link>
         
        </ul>
      )}
    </div>
  );
};
export default PageDropDown;