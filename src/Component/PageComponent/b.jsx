import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Footer from "./footer";

function Blg() {
  return (
    <div className="">
      <div
        className="h-40 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`,
        }}
      >
        <h1 className="font-bold text-4xl text-white">Blog</h1>

        <div className="pt-1 flex flex-row gap-3">
          {" "}
          <span className="font-bold text-white">Home -</span>
          <span className="text-gray-500 font-bold ">Blog</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row  w-5/6 ml-3 md:w-5/6 justify-center items-center md:ml-28  gap-12 mt-8">
        <div className="md:w-2/6 flex flex-col gap-8">
          <div className="h-96 w-full pt-8 pl-6 rounded-2xl flex flex-col">
            <div className=" h-12 w-5/6  bg-white rounded-3xl flex flex-row pt-3 pr-4 border-2">
              <input
                type="text"
                className="h-4 w-full pl-4 text-gray-400 "
                placeholder="Search...."
              />
              <HiOutlineSearch className="text-gray-700 h-4 w-6" />
            </div>

            <div className="flex flex-col gap-2 text-left pt-8">
              <h1 className="font-extrabold text-2xl text-gray-900">
                Categories
              </h1>
              <Link
                to="/b"
                className=" text-gray-400 hover:text-mainColor pt-2"
              >
                All
              </Link>
              <Link
                to="/b"
                className=" text-gray-400 hover:text-mainColor pt-2"
              >
                Beauty(20)
              </Link>
              <Link
                to="/b"
                className=" text-gray-400 hover:text-mainColor pt-2"
              >
                Food(5)
              </Link>
              <Link
                to="/b"
                className=" text-gray-400 hover:text-mainColor pt-2"
              >
                Life Style(9)
              </Link>
              <Link
                to="/b"
                className=" text-gray-400 hover:text-mainColor pt-2"
              >
                Travel(10)
              </Link>
            </div>
          </div>
          <div className="h-96 w-full ml-4 md:ml-0 text-left">
            <h1 className="font-extrabold text-2xl">Recent News</h1>
            <div className="grid grid-cols-1 gap-8 ">
              <div className=" w-80 flex flex-row gap-2 p-1 mt-4 hover:shadow-md shadow-slate-400">
                <div className="h-10 w-36 ">
                  <img src={require("../Resources/blog2.png")} />
                </div>
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-lg font-bold text-gray-900 cursor-pointer hover:text-gray-800">
                    09 Kinds of Vegetables Protect The Liver
                  </h1>
                  <p className="text-gray-400 font-light text-sm">
                    Mar 05,2019
                  </p>
                </div>
              </div>
              <div className="  w-80 flex flex-row gap-2 p-1 hover:shadow-md shadow-slate-400 ">
                <div className="h-10 w-36 ">
                  <img src={require("../Resources/blog4.png")} />
                </div>
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-lg font-bold text-gray-900 cursor-pointer hover:text-gray-800">
                    Tips You To balance Nutrition Meal Day
                  </h1>
                  <p className="text-gray-400 font-light text-sm">
                    Mar 05,2019
                  </p>
                </div>
              </div>
              <div className="  w-80 flex flex-row gap-2 hover:shadow-md shadow-slate-400">
                <div className="h-10 w-36 ">
                  <img src={require("../Resources/blog4.png")} />
                </div>
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-lg font-bold text-gray-900 cursor-pointer hover:text-gray-800">
                    4 Principles Help You Lose Weight with
                  </h1>
                  <p className="text-gray-400 font-light text-sm">
                    Mar 05,2019
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-96 w-full ml-4 md:ml-0  mt-8">
            <h1 className="font-extrabold text-2xl text-left">Search By</h1>
            <div className=" pt-5  flex flex-row">
              <div >
                <button className="text-gray-500 bg-slate-300 h-8 w-20 mb-1 mx-2">
                  Apple
                </button>
                <button className="text-gray-500 bg-slate-300 h-8 w-20 mb-1">
                  Beauty
                </button>
                <button className="text-gray-500 bg-slate-300 h-8 w-32">
                  Vegetables
                </button>
              </div>
              <div>
                <button className="text-gray-500 bg-slate-300 h-8 w-20 mb-2">
                  Fruit
                </button>
                <button className="text-gray-500 bg-slate-300 h-8 w-32 mb-2">
                  Healthy Food
                </button>
                <button className="text-gray-500 bg-slate-300 h-8 w-32 mb-2">
                  Lifestyle
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/6  grid md:grid-cols-2 grid-cols-1 gap-3 pt-8 pl-4">
          <div className=" w-80  flex flex-col text-left px-2 pb-8">
            <div className="">
              <img src={require("../Resources/blog1.png")} />
            </div>
            <div className="flex flex-row items-center gap-3 px-2 pt-3">
              <div className="flex  gap-3 text-slate-400 justify-center items-center">
                <AiOutlineCalendar className="" /> May4,2019
              </div>
              <div className="text-slate-400">
                <GoComment />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-2">
              6 ways to prepare breakfast for 30
            </h1>
            <p className="text-sm text-gray-700 pt-2">
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat
            </p>

            <div className="py-3 w-32 hover:border-blue-200 rounded-3xl flex flex-row items-center gap-2 pl-3 border-2 border-gray-300 mt-4">
              <p className="text-xs">READ MORE</p>
              <BsArrowRight />
            </div>
          </div>
          <div className=" w-80  flex flex-col text-left px-2 pb-8">
            <div className="">
              <img src={require("../Resources/blog2.png")} />
            </div>
            <div className="flex flex-row items-center gap-3 px-2 pt-3">
              <div className="flex  gap-3 text-slate-400 justify-center items-center">
                <AiOutlineCalendar className="" /> May4 ,2019
              </div>
              <div className="text-slate-400">
                <GoComment />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-2">
              6 ways to prepare breakfast for 30
            </h1>
            <p className="text-sm text-gray-700 pt-2">
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat
            </p>

            <div className=" py-3 hover:border-blue-200 w-32  rounded-3xl flex flex-row items-center gap-2 pl-3 border-2 border-gray-300 mt-4">
              <p className="text-xs">READ MORE</p>
              <BsArrowRight />
            </div>
          </div>
          <div className=" w-80  flex flex-col text-left px-2 pb-8">
            <div className="">
              <img src={require("../Resources/blog3.png")} />
            </div>
            <div className="flex flex-row items-center gap-3 px-2 pt-3">
              <div className="flex  gap-3 text-slate-400 justify-center items-center">
                <AiOutlineCalendar className="" /> May4,2019
              </div>
              <div className="text-slate-400">
                <GoComment />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-2">
              6 ways to prepare breakfast for 30
            </h1>
            <p className="text-sm text-gray-700 pt-2">
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat
            </p>

            <div className="py-3 w-32 hover:border-blue-300 rounded-3xl flex flex-row items-center gap-2 pl-3 border-2 border-gray-300 mt-4">
              <p className="text-xs">READ MORE</p>
              <BsArrowRight />
            </div>
          </div>
          <div className=" w-80  flex flex-col text-left px-2 pb-8">
            <div className="">
              <img src={require("../Resources/blog4.png")} />
            </div>
            <div className="flex flex-row items-center gap-3 px-2 pt-3">
              <div className="flex  gap-3 text-slate-400 justify-center items-center">
                <AiOutlineCalendar className="" /> May4,2019
              </div>
              <div className="text-slate-400">
                <GoComment />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-2">
              6 ways to prepare breakfast for 30
            </h1>
            <p className="text-sm text-gray-700 pt-2">
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat
            </p>

            <div className="w-32  py-3 hover:border-blue-200  rounded-3xl flex flex-row items-center gap-2 pl-3 border-2 border-gray-300 mt-4">
              <p className="text-xs">READ MORE</p>
              <BsArrowRight />
            </div>
          </div>
          <div className=" w-80  flex flex-col text-left px-2 pb-8">
            <div className="">
              <img src={require("../Resources/blog5.png")} />
            </div>
            <div className="flex flex-row items-center gap-3 px-2 pt-3">
              <div className="flex  gap-3 text-slate-400 justify-center items-center">
                <AiOutlineCalendar className="" /> May4,2019
              </div>
              <div className="text-slate-400">
                <GoComment />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-2">
              6 ways to prepare breakfast for 30
            </h1>
            <p className="text-sm text-gray-700 pt-2">
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat
            </p>

            <div className=" w-32  py-3 hover:border-blue-200  rounded-3xl flex flex-row items-center gap-2 pl-3 border-2 border-gray-300 mt-4">
              <p className="text-xs">READ MORE</p>
              <BsArrowRight />
            </div>
          </div>
          <div className=" w-80  flex flex-col text-left px-2 pb-8">
            <div className="">
              <img src={require("../Resources/blog2.png")} />
            </div>
            <div className="flex flex-row items-center gap-3 px-2 pt-3">
              <div className="flex  gap-3 text-slate-400  justify-center items-center">
                <AiOutlineCalendar className="" /> May4,2019
              </div>
              <div className="text-slate-400">
                <GoComment />
              </div>
            </div>
            <h1 className="font-bold text-lg pt-2">
              6 ways to prepare breakfast for 30
            </h1>
            <p className="text-sm text-gray-700 pt-2">
              Sed quia non numquam modi tempora indunt ut labore et dolore
              magnam aliquam quaerat
            </p>

            <div className="py-3 hover:border-blue-200 w-32  rounded-3xl flex flex-row items-center gap-2 pl-3 border-2 border-gray-300 mt-4">
              <p className="text-xs">READ MORE</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Blg;
