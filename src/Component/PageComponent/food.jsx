import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const AutoSlider = () => {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
   slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 };

 return (
    <div className=' justify-center items-center  mt-[3rem] bg-footer h-[17rem] w-5/6 '>
      <Slider {...settings} className="">
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='px-0'> <img  className='flex justify-center h-60 w-72' src={require('../Resources/yum.jpg')} alt="Image 1" /></div> 
     <p className='text-xl text-gray-700  font-serif'>Fresh Fruit</p>  
        </div>
       
        <div className=' flex flex-col justify-center    items-center border-0 border-slate-100 '>
         <div className='px-0'> <img  className='flex justify-center  h-60 w-72' src={require('../Resources/nuts.avif')} alt="Image 1" /></div> 
          <p className='text-xl text-gray-700 font-serif'>Fresh Fruit</p>
        </div>
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100 '>
         <div className='px-0'> <img  className='flex justify-center  h-60 w-72' src={require('../Resources/juice.jpg')} alt="Image 1" /></div> 
          <p className='text-xl text-gray-700 font-serif'>Fresh Fruit</p>
        </div>
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='px-0'> <img  className='flex justify-center  h-60 w-72' src={require('../Resources/meee.jpg')} alt="Image 1" /></div> 
          <p className='text-xl text-gray-700 font-serif'>Fresh Fruit</p>
        </div>
       
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='px-0'> <img  className='flex justify-center  h-60 w-72' src={require('../Resources/juice2.webp')} alt="Image 1" /></div> 
          <p className='text-xl text-gray-700 font-serif'>Fresh Fruit</p>
        </div>
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100 '>
         <div className='px-0'> <img  className='flex justify-center  h-60 w-72' src={require('../Resources/boquet.jpg')} alt="Image 1" /></div> 
          <p className='text-xl text-gray-700 font-serif'>Fresh Fruit</p>
        </div>
        
        <div className=' flex flex-col justify-center    items-center border-2 border-slate-100'>
         <div className='px-0'> <img  className='flex justify-center  h-60 w-72' src={require('../Resources/met.jpg')} alt="Image 1" /></div> 
          <p className='text-xl text-gray-700 font-serif'>Fresh Fruit</p>
        </div>
      
      
      </Slider>
    </div>
 );
};

export default AutoSlider;
