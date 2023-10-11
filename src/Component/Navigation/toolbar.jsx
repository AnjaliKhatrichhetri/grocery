import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PiHandbagFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import Dropdown from "../PageComponent/dropdown";
import {Link} from "react-router-dom"

function Navdata() {
  return (
    <div className="flex flex-col">
      <div className="h-20 w-full bg-white flex flex-row">
        <div className="h-20 w-2/6  justify-center items-center pl-3">
          <img
            className=""
            src={require("../../Component/Resources/logo.png")}
          />
        </div>
        <div className="h-20 w-4/6 flex flex-row justify-center align-items">
          <nav className="h-20 flex flex-row gap-16 justify-center items-center">
            <Link to="/" className="font-mono text-lg text-gray-800 font-semibold">
              HOME
            </Link>
            <Link to="/shop" className="font-mono text-lg text-gray-800 font-semibold">
              SHOP
            </Link>
            <a className="font-mono text-lg text-gray-800 font-semibold">
              PAGES
            </a>
            <Link to="/b" className="font-mono text-lg text-gray-800 font-semibold">
              BLOG
            </Link>
            <Link to="/contact" className="font-mono text-lg text-gray-800 font-semibold">
              CONTACT
            </Link>
          </nav>
        </div>
        <div className="h-20 w-2/6 flex flex-row items-center justify-center gap-4">
          <BsFillSuitHeartFill className="h-14 w-6" />
          <PiHandbagFill className="h-14 w-6" />
          <div className="flex flex-row gap-1">
            <span className=" text-sm text-gray-500">item</span>
            <span className=" text-sm ">$150.00</span>
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-row  gap-1 justify-center items-center">
        <div className="w-2/6 h-10 bg-mainColor flex flex-row justify-center ml-10 items-center gap-3 ">
          <HiOutlineMenu className="h-8 w-6 text-white" />
        
        <div className=""><Dropdown/>  </div>          

          <MdOutlineKeyboardArrowDown className="h-8 w-6 text-white" />
        </div>

        <div className=" w-4/6  h-10 flex flex-row border-2 border-gray-100 bg-white px-2">
          <div className=" w-48 flex flex-row justify-center gap-2 ">
            <p className="font-bold  flex flex-row justify-center items-center">
              All Categories
            </p>
            <MdOutlineKeyboardArrowDown className="h-16 w-4 pb-6" />
          </div>
          <span className=" pr-5 text-gray-300">|</span>
          <input
            className="h-8 w-52  outline-none placeholder-shown:text-gray-200 "
            placeholder="What do you need?"
          />
          <button className="h-10 w-28 ml-40 bg-mainColor text-white font-mono font-bold text-lg">
            SEARCH
          </button>
        </div>

        <div className=" w-2/6 flex flex-row gap-2 pl-10">
          <div className="h-10 w-10 rounded-full ">
            <img src={require("../../Component/Resources/call.png")} />
          </div>
          <div className="flex flex-col ">
            <p className="font-extrabold">+65 11.188.888</p>
            <p className="text-gray-400 text-sm">support 24/7 time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navdata;
