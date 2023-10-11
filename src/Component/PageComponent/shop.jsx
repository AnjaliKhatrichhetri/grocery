import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from './container';

import{BsArrowLeftSquare,BsArrowRightSquare} from "react-icons/bs"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from './slide';
import { RangeSlider } from 'flowbite-react';

function Shop() {
  const settings = {
    
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 };

  return (
    <div>
        <div className='h-40 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9'
       style={{
        backgroundImage:`url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`
      }}>
        <h1 className='font-bold text-4xl text-white'>Organi Shop</h1>
     
     <div className='pt-1 flex flex-row gap-3'> <span className='font-bold text-white'>Home -</span><span className='text-gray-500 font-bold '>Shop</span></div>   
      </div>



      <div className="flex flex-col md:flex-row  w-5/6 justify-center items-center  ml-0 md:ml-28  gap-12 mt-5">

        <div className=" w-5/6 md:w-2/6 flex flex-col gap-8">
          <div className="h-96 w-full  pl-6 rounded-2xl flex flex-col">
           

            <div className="flex flex-col gap-2 text-left pt-8">
              <h1 className="font-extrabold text-2xl text-gray-900">
                Department
              </h1>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
                Fresh Meat
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
                Vegetables
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
              Fruit & Nut Gifts 
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2  "
              >
              Fresh Berries
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
              Ocean Foods
              </Link>

              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
                Butter & Eggs
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
                FastFood
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
                Fresh Onion
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
                Papayaya & Crisps
              </Link>
              <Link
                to="/shop"
                className=" text-gray-700 hover:text-mainColor pt-2 "
              >
               Oatmeal
              </Link>
             
            </div>
          </div>
          <div className="h-32 w-5/6 text-left pl-3 mt-20">
            <h1 className="font-extrabold text-2xl">Price</h1>
           {/* <Slide/> */}
           <RangeSlider/>
          </div>
          <div className="h-38 w-full  text-left pl-3 mt-4">
            <h1 className="font-extrabold text-2xl pb-4">Colors</h1>
            <div className='grid grid-cols-2  w-4/6 '>
             <div className='h-8 w-16 pl-3  flex flex-row justify-center items-center'>
                <img src={require('../Resources/green.png')}/>
                <p>Green</p>
             </div>
             <div className='h-8 w-16 pl-3 flex flex-row justify-center items-center'>
             <img src={require('../Resources/orange.png')}/>
                <p>Orange</p>
             </div>
             <div className='h-8 w-16 flex flex-row justify-center items-center'>
              <img src={require('../Resources/red.png')} />
              <p>Red</p>
             </div>
             <div className='h-8 w-16 flex flex-row justify-center items-center'>
             <img src={require('../Resources/black.png')} />
              <p>Black</p>
             </div>
             <div className='h-8 w-16 flex flex-row justify-center items-center'>
             <img src={require('../Resources/blue.png')} />
              <p>Blue</p>
             </div>
             <div className='h-8 w-16 flex flex-row justify-center items-center'>
             <img src={require('../Resources/white.png')} />
              <p>White</p>
             </div>

            </div>
            
          </div>

          <div className="h-36 w-full text-left pl-3 mt-4">
            <h1 className="font-extrabold text-2xl">Popular Size</h1>
            <div className='flex flex-row gap-3 pt-6'>
              <div className='flex gap-2 flex-col'>
              <div className='h-8 w-28 bg-footer text-slate-500 text-sm text-center pt-1'>Large</div>
              <div className='h-8 w-28 bg-footer text-slate-500 text-sm text-center pt-1'>Small</div>
              </div>

              <div className='flex gap-2 flex-col'>
              <div className='h-8 w-28 bg-footer text-slate-500 text-sm text-center pt-1'>Medium</div>
              <div className='h-8 w-28 bg-footer text-slate-500 text-sm text-center pt-1'>Tiny</div>
              </div>
             
            </div>
            
          </div>


         
          
        </div>
        <div className=" w-5/6 md:w-4/6  gap-3  md:pl-4 pt-4 mt-4">
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-4xl text-left'>Sale Off</h1>
            <span className='h-1 w-32 mt-2 bg-mainColor'></span>

          </div>
        
      {/* saleslider */}
        <div className='flex flex-col mt-8'>

<div className='   w-full  h-40  bg-white '>
  <Slider {...settings}>
    <div className=' flex flex-col justify-center    items-center'>
     <div className='pl-8'> <img  className='flex justify-center h-52 w-96' src={require('../Resources/veggie.webp')} alt="Image 1" />
     <div className='bg-red-600 text-white text-center h-9 w-9 rounded-full pt-2 text-xs font-semibold absolute top-1 ml-2'>-20%</div>

     <div className='h-32 pt-4 flex flex-col'>
        <h1 className='text-slate-400'>Dried Fruit</h1>
        <p className='font-semibold text-lg' >Raisin'n'nuts</p>
        <div className='flex flex-row justify-center items-center gap-3 '>
           <p className='font-bold text-lg '>$30.00</p>
            <s className='text-slate-400 font-light'>$36.00</s>
        </div>
     </div>
     </div> 
     
    </div>
    <div className=' flex flex-col justify-center    items-center'>
     <div className='pl-8'> <img  className='flex justify-center h-52 w-96' src={require('../Resources/burger.png')} alt="Image 1" />
     <div className='bg-red-600 text-white text-center h-9 w-9 rounded-full pt-2 text-xs font-semibold absolute top-1 ml-2'>-20%</div>

     <div className='h-32 pt-4 flex flex-col'>
        <h1 className='text-slate-400'>Fast Foods</h1>
        <p className='font-semibold text-lg' >Raisin'n'nuts</p>
        <div className='flex flex-row justify-center items-center  gap-3 '>
           <p className='font-bold text-lg '>$30.00</p>
            <s className='text-slate-400 font-light'>$36.00</s>
        </div>
     </div>
     </div> 
     
    </div>
    <div className=' flex flex-col justify-center    items-center'>
     <div className='pl-8'> <img  className='flex justify-center h-52 w-96' src={require('../Resources/juice.jpg')} alt="Image 1" />
     <div className='bg-red-600 text-white text-center h-9 w-9 rounded-full pt-2 text-xs font-semibold absolute top-1 ml-2'>-20%</div>

     <div className='h-32 pt-4 flex flex-col'>
        <h1 className='text-slate-400'>Dried Fruit</h1>
        <p className='font-semibold text-lg' >Raisin'n'nuts</p>
        <div className='flex flex-row justify-center items-center  gap-3 '>
           <p className='font-bold text-lg '>$30.00</p>
            <s className='text-slate-400 font-light'>$36.00</s>
        </div>
     </div>
     </div> 
     
    </div>
    <div className=' flex flex-col justify-center    items-center'>
     <div className='pl-8'> <img  className='flex justify-center h-52 w-96' src={require('../Resources/nuts.avif')} alt="Image 1" />
     <div className='bg-red-600 text-white text-center h-9 w-9 rounded-full pt-2 text-xs font-semibold absolute top-1 ml-2'>-20%</div>

     <div className='h-32 pt-4 flex flex-col'>
        <h1 className='text-slate-400'>Dried Fruit</h1>
        <p className='font-semibold text-lg' >Raisin'n'nuts</p>
        <div className='flex flex-row justify-center items-center  gap-3 '>
           <p className='font-bold text-lg '>$30.00</p>
            <s className='text-slate-400 font-light'>$36.00</s>
        </div>
     </div>
     </div> 
     
    </div>
    <div className=' flex flex-col justify-center    items-center'>
     <div className='pl-8'> <img  className='flex justify-center h-52 w-96 ' src={require('../Resources/veggieee.webp')} alt="Image 1" />
     <div className='bg-red-600 text-white text-center h-9 w-9 rounded-full pt-2 text-xs font-semibold absolute top-1 ml-2'>-20%</div>
     <div className='h-32 pt-4 flex flex-col'>
        <h1 className='text-slate-400'>Dried Fruit</h1>
        <p className='font-semibold text-lg' >Raisin'n'nuts</p>
        <div className='flex flex-row justify-center items-center  gap-3 '>
           <p className='font-bold text-lg '>$30.00</p>
            <s className='text-slate-400 font-light'>$36.00</s>
        </div>
     </div>
     </div> 
     
    </div>


  </Slider>
</div>
</div>

<div className='text-gray-500 mt-40'>____________________________________________________________________________________________________________</div>
          <div className='mt-8'>
            <div className='flex flex-row  gap-40 '>
           <div className='flex flex-row gap-4 pl-2'>  
            <p className='text-gray-500 '>Sort By</p>
             <p className='font-bold'>Default</p>
             </div>
             <div className='flex flex-row gap-2'>
              <p className='font-bold text-lg'>16</p>
              <p className='text-gray-400'>Products found</p>
             </div>


            </div>

            <div className=' w-full pt-5  grid  grid-cols-2 md:grid-cols-3  gap-3 ' >

                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/meat.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/banana.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/guava.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/watermelon.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/berry.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/burger.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/mango.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/apple.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/meat.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/banana.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/guava.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64  w-56 flex flex-col items-center'>
                <div className='h-48 w-56'>
                    <img src={require('../Resources/apple.png')}/>
                </div>
                <div className='h-10 w-5/6 flex flex-col bg-white justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
              

            </div>
          </div>
         
         
        </div>
      </div>



    </div>
  )
}

export default Shop
