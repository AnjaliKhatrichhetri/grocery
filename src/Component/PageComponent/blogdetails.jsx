import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsArrowRight,BsTwitter } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import {TbMailFilled} from "react-icons/tb";
import {FaGooglePlusG} from "react-icons/fa"
import{BiLogoFacebook} from "react-icons/bi" 
import SearchBar from './searchbar';

function BlogDetails() {
  return (
    <div>
        <div className='h-80 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9'
       style={{
        backgroundImage:`url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`
      }}>
        <h1 className='font-bold text-4xl text-white'>The Moment You Need To Remove  Garlic From The Menu</h1>
     
     <div className='pt-1 flex flex-row gap-3'> <span className='font-bold text-white'>By Micheal Scofield |</span><span className='font-bold text-white'>January 14,2019|</span><span className='font-bold text-white'>| 8 Comments</span></div>   
      </div>



      <div className="flex flex-col md:flex-row  w-5/6 ml-3 md:w-5/6 justify-center items-center md:ml-28  gap-12 mt-8">
        <div className="md:w-2/6 flex flex-col gap-8">
          <div className="h-96 w-full pt-8 pl-6 rounded-2xl flex flex-col">
            <div className=" h-12 w-5/6  bg-white rounded-3xl flex flex-row pt-3 pr-4 border-2">
              {/* <input
                type="text"
                className="h-4 w-full pl-4 text-gray-400 "
                placeholder="Search...."
              /> */}
              <SearchBar/>
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
            <div className="grid grid-cols-1 ">
              <div className=" h-32 w-80 flex flex-row gap-2 mt-4">
                <div className="h-10 w-36 ">
                  <img src={require("../Resources/blog2.png")} />
                </div>
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-lg font-bold text-gray-900">
                    09 Kinds of Vegetables Protect The Liver
                  </h1>
                  <p className="text-gray-400 font-light text-sm">
                    Mar 05,2019
                  </p>
                </div>
              </div>
              <div className=" h-32 w-80 flex flex-row gap-2 ">
                <div className="h-10 w-36 ">
                  <img src={require("../Resources/blog4.png")} />
                </div>
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-lg font-bold text-gray-900">
                    Tips You To balance Nutrition Meal Day
                  </h1>
                  <p className="text-gray-400 font-light text-sm">
                    Mar 05,2019
                  </p>
                </div>
              </div>
              <div className=" h-32 w-80 flex flex-row gap-2 ">
                <div className="h-10 w-36 ">
                  <img src={require("../Resources/blog4.png")} />
                </div>
                <div className="flex flex-col text-left gap-2">
                  <h1 className="text-lg font-bold text-gray-900">
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
        <div className="w-4/6 gap-3 pt-8 pl-4">
          <div className='flex flex-col'>
            <div><img src={require('../Resources/strawb.jpg')} className='h-[40rem] w-full'/></div>
            <div className='flex flex-col gap-8 mt-4'>
              <p className='text-lg text-gray-600 text-left'>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              <h1 className='font-bold text-xl text-left'>The corner window forms a place within a place that is a resting point within the large space.</h1>
              <p  className='text-lg text-gray-600 text-left'>The study area is located at the back with a view of the vast nature. Together with the other buildings, a congruent story has been managed in which the whole has a reinforcing effect on the components. The use of materials seeks connection to the main house, the adjacent stables</p>

            </div>
            <div className='flex flex-row gap-40  mt-7'>
              <div className='flex h-40 w-full flex-row   items-center gap-2 '>
                <div className=' rounded-full'>
                  <img src={require('../Resources/Screenshot 2023-10-06 at 14-31-56 Colorlib Free Bootstrap Website Template.png')} className='h-[5rem] w-[5rem] rounded-full ' />
                </div>
                <div className='flex flex-col pt-4'>
                  <p className='font-semibold w-32'>Micheal Scofield</p>
                  <p className='font- text-slate-500 text-left'>Admin</p>
                </div>
              </div>
              <div className='text-left flex flex-col pt-8 gap-2'>
               <p className='flex flex-row gap-2'> <span className='font-bold'>Categories:</span><span className='text-slate-500'>Food</span></p>
               <p className='flex flex-row gap-2'> <span className='font-bold'>Tags: </span><span className='text-slate-500'>All,Trending,Cooking,Healthy Food,Life Style</span></p>
               <p className='flex flex-row gap-6 text-slate-500 '><BiLogoFacebook size={25}/><BsTwitter  size={25}/><TbMailFilled  size={25}/><FaGooglePlusG  size={25}/></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogDetails
