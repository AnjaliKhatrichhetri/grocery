
import React from 'react'
import{BsArrowLeftSquare,BsArrowRightSquare} from "react-icons/bs"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const SaleSlider = () => {
 const settings = {
    
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
 };

 return (
    <div className='flex flex-col mt-8'>

    <div className='   w-full  h-40  '>
      <Slider {...settings}>
        <div className=' flex flex-col justify-center    items-center'>
         <div className='pl-8'> <img  className='flex justify-center h-52 w-96' src={require('../Resources/veggie.webp')} alt="Image 1" />
         <div className='bg-red-600 text-white text-center h-9 w-9 rounded-full pt-2 text-xs font-semibold absolute top-1 ml-2'>-20%</div>

         <div className='h-32 pt-4 flex flex-col'>
            <h1 className='text-slate-400'>Dried Fruit</h1>
            <p className='font-light' >Raisin'n'nuts</p>
            <div className='flex flex-row pl-12 gap-3 '>
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
            <p className='font-light' >Raisin'n'nuts</p>
            <div className='flex flex-row pl-12 gap-3 '>
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
            <p className='font-light' >Raisin'n'nuts</p>
            <div className='flex flex-row pl-12 gap-3 '>
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
            <p className='font-light' >Raisin'n'nuts</p>
            <div className='flex flex-row pl-12 gap-3 '>
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
            <p className='font-light' >Raisin'n'nuts</p>
            <div className='flex flex-row pl-12 gap-3 '>
               <p className='font-bold text-lg '>$30.00</p>
                <s className='text-slate-400 font-light'>$36.00</s>
            </div>
         </div>
         </div> 
         
        </div>
    

      </Slider>
    </div>
    </div>
 );
};

export default SaleSlider;
