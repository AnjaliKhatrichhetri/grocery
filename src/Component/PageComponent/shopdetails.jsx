import React,{useState} from 'react'
import {BsStarHalf,BsStarFill} from "react-icons/bs"
import {IoMdHeartEmpty} from "react-icons/io"
import {FaFacebookF,FaPinterestP} from "react-icons/fa"
import {BiLogoTwitter,BiLogoInstagram} from "react-icons/bi"
import AutoSlider from './food'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from './description'
import Information from './information'
import Reviews from './reviws'



function ShopDetails() {
  const[activeTab,setActiveTab]=useState('description');
  const handleTabChange= (tab) =>{
    setActiveTab(tab);
  }
    const settings = {
       
        infinite: true,
        speed: 500,
       slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
     };
  return (
    <div className='flex flex-col justify-center items-center gap-12'>
          <div className='h-40 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9'
       style={{
        backgroundImage:`url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`
      }}>
        <h1 className='font-bold text-4xl text-white'>Vegetable's Package</h1>
     
     <div className='pt-1 flex flex-row gap-3'> <span className='font-bold text-white'>Home -</span><span className='text-white font-bold '>Vegetables</span><span className='text-gray-500 font-thin'>-Vegetables's Package</span></div>   
      </div>
      
      <div className='flex flex-row w-5/6 gap-10 justify-center items-center'>
        <div className='h-[40rem] w-1/2'>
            <img src={require("../Resources/homeimg.jpg")}/>
           <div className='h-12 w-full bg-pink-950 mt-8'>
           <div className='  justify-center items-center  bg-white '>
      <Slider {...settings} className="">
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='pl-8'> <img  className='flex justify-center h-32 w-32' src={require('../Resources/yum.jpg')} alt="Image 1" /></div> 
        </div>
       
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100 '>
         <div className='pl-8'> <img  className='flex justify-center  h-32 w-32' src={require('../Resources/nuts.avif')} alt="Image 1" /></div> 
        </div>
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100 '>
         <div className='pl-8'> <img  className='flex justify-center  h-32 w-32' src={require('../Resources/juice.jpg')} alt="Image 1" /></div> 
        </div>
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='pl-8'> <img  className='flex justify-center  h-32 w-32' src={require('../Resources/meee.jpg')} alt="Image 1" /></div> 
        </div>
      
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='pl-8'> <img  className='flex justify-center  h-32 w-32' src={require('../Resources/juice2.webp')} alt="Image 1" /></div> 
        </div>
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100 '>
         <div className='pl-8'> <img  className='flex justify-center  h-32 w-32' src={require('../Resources/boquet.jpg')} alt="Image 1" /></div> 
        </div>
    
      </Slider>
    </div>
           </div>
        </div>
        <div className='flex flex-col h-[40rem] w-1/2 text-left gap-20'>
            <div className='flex flex-col gap-4 mb-5'>
                <p className='text-3xl font-bold'>Vegetables's Package</p>
                <p className='flex flex-row  text-yellow-400 gap-2'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/> <span className='text-[#DD2222] text-sm'>( 18 reviews)</span></p>
                <p className='text-2xl font-semibold text-[#DD2222]'>$50.00</p>
                <p className='text-slate-400'>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                <div className='flex flex-row gap-4'>
                    <div className='h-10 w-32 bg-[#F5F5F5]'></div>
                    <div className='h-10 w-32 bg-mainColor flex justify-center items-center'><button className='h-10 w-32 font-semibold text-white hover:bg-green-900 '>ADD TO CART</button></div>
                    <div className='h-10 w-12 bg-[#F5F5F5] flex justify-center items-center'><IoMdHeartEmpty size={20} className='text-gray-500 hover:text-[#DD2222]'/></div>
                </div>
            </div>
            <div className='flex flex-rows gap-12'>
               <div className='flex flex-col gap-2'>
                <p className='font-semibold'>Availbility</p>
                <p className='font-semibold'>Shipping</p>
                <p className='font-semibold'>Weight</p>
                <p className='font-semibold'>Share on</p>
               </div>
               <div  className='flex flex-col gap-2'>
                <p className='font-thin'>In Stock</p>
                <p className='font-thin'>01 day shipping.<span className='font-[poppins] text-[#DD2222]'>Free pickup today</span></p>
                <p className='font-thin'>0.5 kg</p>
                <p className='font-thin flex flex-row gap-4'> <FaFacebookF/><BiLogoTwitter/><BiLogoInstagram/><FaPinterestP/></p>
               </div>
            </div>
            
        </div> 

      </div>

      <div className='flex flex-col gap-8 w-5/6'>
        <div className='flex flex-row gap-12'>
        ___________________________________________________<button  className={`${activeTab === 'description'?' active text-slate-800 font-bold':""}`} onClick={()=> handleTabChange('description')}>Description</button> <button  className={`${activeTab === 'information'?' active text-slate-800 font-bold':""}`} onClick={()=> handleTabChange('information')}>Information</button><button  className={`${activeTab === 'reviews'?' active text-slate-800 font-bold':""}`} onClick={()=> handleTabChange('reviews')}>Reviews(1)</button>____________________________________________
        </div>
        <div className='h-52 w-full'>
      {activeTab === 'description' && <Description/>}
      {activeTab === 'information' && <Information/>}
      {activeTab === 'reviews' && <Reviews/>}
       
        </div>


        <div>
        <div className='flex flex-col  w-full mt-28'>
            <div className='font-extrabold text-3xl flex flex-col justify-center items-center gap-3'>
                <h1 className='slideInLeft'>Featured Product</h1>
                <span className='h-1 w-20 bg-mainColor'></span>
                </div>
           
        </div>
        <div className=' pt-5 px-10 grid grid-cols-2 md:grid-cols-4  gap-10' >

                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/meat.png')}/>
                </div>
                <div className='h-16 w-full flex flex-col justify-center pt-6'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/banana.png')}/>
                </div>
                <div className='h-16 w-full flex flex-col justify-center pt-6'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/guava.png')}/>
                </div>
                <div className='h-16 w-full flex flex-col justify-center pt-6'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/watermelon.png')}/>
                </div>
                <div className='h-16 w-full flex flex-col justify-center pt-6'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>

            </div>
      
    </div>
        
       

      </div>
    </div>
  )
}

export default ShopDetails
