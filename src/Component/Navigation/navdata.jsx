import React, { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { PiHandbagFill } from "react-icons/pi";
import { MdOutlineKeyboardArrowDown, MdArrowDropDown } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import Dropdown from "../PageComponent/dropdown";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import PageDropDown from "../PageComponent/page_dropdown";
import AiDropdown from "../PageComponent/aidropdown";

function Navdata() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="">
      <div className="flex justify-between h-24 mx-auto max-w-[1240px] px-4">
        <img
          src={require("../Resources/logo.png")}
          className="h-[20px} w-[10rem]"
        />
        <ul className=" p-4 gap-6 sticky z-40 hidden md:flex">
          <Link to="/">
            <li className="uppercase font-mono text-gray-900  text-lg font-semibold p-4">
              Home
            </li>
          </Link>
          <Link to="/shop">
            <li className="uppercase font-mono text-gray-900  text-lg font-semibold p-4">
              Shop
            </li>
          </Link>
          <AiDropdown />
          {/* <li onMouseOver={handleDrop} className=""><PageDropDown className={! drop ? "hidden":"flex"}/></li> */}
          <Link to="/b">
            <li className="uppercase font-mono text-gray-900  text-lg font-semibold p-4">
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li className="uppercase font-mono text-gray-900  text-lg font-semibold p-4">
              Contact
            </li>
          </Link>
        </ul>
        <div className="h-20 w-1/6 hidden flex-row items-center justify-center gap-4 md:flex">
          <BsFillSuitHeartFill className="h-14 w-6" />
          <PiHandbagFill className="h-14 w-6" />
          <div className="flex flex-row gap-1">
            <span className=" text-sm text-gray-500">item</span>
            <span className=" text-sm ">$150.00</span>
          </div>
        </div>

        <div
          onClick={handleNav}
          className="sticky top-4 right-2 ml-[9rem] mt-10 block md:hidden"
        >
          {!nav ? <AiOutlineMenu size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className="md:hidden">
          <ul
            className={
              !nav
                ? " fixed  top-0 left-0 w-[60%] z-30 bg-mainColor h-[90%] gap-4  flex flex-col ease-in-out duration-300 "
                : "fixed left-[-100%]"
            }
          >
            <Link to="/">
              <li className="uppercase font-mono text-gray-900  text-xl font-semibold p-2  border-b-2 border-footer">
                Home
              </li>
            </Link>
            <Link to="/shop">
              {" "}
              <li className="uppercase font-mono text-gray-900  text-xl font-semibold p-2 border-b-2 border-footer">
                Shop
              </li>
            </Link>
            <li className="uppercase font-mono text-gray-900  text-xl font-semibold p-2 border-b-2 border-footer">
              Pages
            </li>
            <Link to="/b">
              {" "}
              <li className="uppercase font-mono text-gray-900  text-xl font-semibold p-2 border-b-2 border-footer">
                Blog
              </li>
            </Link>
            <Link to="/contact">
              <li className="uppercase font-mono text-gray-900  text-xl font-semibold p-2 border-b-2 border-footer">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className="h-20 w-2/6 hidden flex-row items-center justify-center gap-4">
          <BsFillSuitHeartFill className="h-14 w-6" />
          <PiHandbagFill className="h-14 w-6" />
          <div className="flex flex-row gap-1">
            <span className=" text-sm text-gray-500">item</span>
            <span className=" text-sm ">$150.00</span>
          </div>
        </div>
      </div>

      <div className="ml-10 z-20 sm:ml-6 h-11 w-5/6 bg-mainColor flex justify-between md:w-[20%] md:ml-12">
        <FiMenu className="text-white ml-5 mt-2" size={20} />
        <Dropdown className="z-20" />
        <MdArrowDropDown className="text-white mr-4 mt-2" size={25} />
      </div>

      <div className=" md:w-[75%]  relative h-10 flex flex-row items-center px-2 sm:ml-6 ml-[38px] mt-3 md:absolute md:right-0 md:top-[86px] w-[360px] ">
        <div className="flex flex-row justify-center items-center h-[48px]  border-2 border-slate-200">
          <div className=" w-48 z-10  flex-row justify-center gap-2 hidden md:flex sm:hidden  ">
            <p className="font-bold  flex flex-row justify-center items-center ">
              All Categories
            </p>
            <MdOutlineKeyboardArrowDown className="h-16 w-4 " />
          </div>
          <div>
            {" "}
            <span className=" pr-5 text-gray-300">|</span>
          </div>
          <div className="relative">
            {" "}
            <input
              className="h-8 w-[300px] z-10  outline-none pl-3 placeholder-shown:text-gray-200  "
              placeholder="What do you need?"
            />
          </div>
          <div className="pl-20">
            {" "}
            <button className="h-10 md:h-12 w-[110px]  ml-40 bg-mainColor text-white font-mono font-bold text-lg absolute  right-0 md:right-[26rem] top-0">
              SEARCH
            </button>
          </div>
        </div>

        <div className=" w-2/6  flex-row gap-2 hidden md:flex md:bg-white  ml-12">
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
