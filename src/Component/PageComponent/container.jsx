
import React from 'react'
import{BsArrowLeftSquare,BsArrowRightSquare} from "react-icons/bs"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Container = () => {
 const settings = {
    
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 };

 return (
    <div className='flex flex-col'>
    <div className='flex flex-row h-10 w-full justify-center pt-8 gap-36 mt-16'>
       <div className='flex flex-row justify-center items-center gap-4'><BsArrowLeftSquare/> <p className='text-lg font-semibold '>Latest Products</p><BsArrowRightSquare/></div>
       <div className='flex flex-row justify-center items-center gap-4'><BsArrowLeftSquare/> <p className='text-lg font-semibold '>Top Rated Products</p><BsArrowRightSquare/></div>
       <div className='flex flex-row justify-center items-center gap-4'><BsArrowLeftSquare/> <p className='text-lg font-semibold '>Review Products</p><BsArrowRightSquare/></div>

    </div>

    <div className=' h-[30rem] w-1/2 bg-pink-900  flex flex-row gap-6 items-center  mt-7  '>
      <Slider {...settings}>
        <div className=' flex flex-col justify-center    items-center'>
         <div className='pl-8'> <img  className='flex justify-center h-[30rem] w-[32rem]' src={require('../Resources/container.png')} alt="Image 1" /></div> 
         
        </div>
        <div className=' flex flex-col justify-center    items-center'>
         <div className='pl-8'> <img  className='flex justify-center h-[30rem] w-[32rem]' src={require('../Resources/container.png')} alt="Image 1" /></div> 
         
        </div>
        <div className=' flex flex-col justify-center    items-center'>
         <div className='pl-8'> <img  className='flex justify-center h-[30rem] w-[32rem]' src={require('../Resources/container.png')} alt="Image 1" /></div> 
         
        </div>
        <div className=' flex flex-col justify-center    items-center'>
         <div className='pl-8'> <img  className='flex justify-center h-[30rem] w-[32rem]' src={require('../Resources/container.png')} alt="Image 1" /></div> 
         
        </div>
        <div className=' flex flex-col justify-center    items-center'>
         <div className='pl-8'> <img  className='flex justify-center h-[30rem] w-[32rem]' src={require('../Resources/container.png')} alt="Image 1" /></div> 
         
        </div>
    

      </Slider>
    </div>
    </div>
 );
};

export default Container;
