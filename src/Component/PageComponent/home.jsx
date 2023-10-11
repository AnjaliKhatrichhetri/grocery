import React from 'react'
import Container from './container'
import AutoSlider from './food'
import Product from './product'
import Content from './content'
import Advertise from './advertise'
import ImageWithPopup from './popup'




function Home() {
  return (
   <div className='flex flex-col justify-center  items-center'>
   <div className=' w-5/6 bg-slate-100  justify-center mt-6  '>


   <div className=' bg-center bg-contain bg-no-repeat '>
       
   <img  src={require('../../Component/Resources/home.png')}/> 
 <div className='  w-60 mt-9 p-12 flex flex-col   text-left absolute top-40 gap-1 sm:top-52 sm:w-3/6 md:gap-3'>
<div><p className='sm:text-sm text-mainColor font-mono font-bold md:text-xl'>FRUIT FRESH</p></div> 
<div className='text-2xl font-extrabold md:text-4xl'><p>Vegetable 100% Organic</p></div>
<div className='text-gray-400 sm:text-sm md:text-lg'><p>Free Pickup and Delievery</p></div>
<div className='pt-4'>
   <button className='font-extrabold text-lg bg-mainColor text-white  font-mono  h-8 w-32  md:h-10 md:w-36 hover:text-mainColor hover:bg-white hover:shadow-lg hover:shadow-gary-900 hover:border-2 hover:border-mainColor '>SHOP NOW</button>
   
</div>
</div>


   </div>
 
</div>
<AutoSlider/>

<Product/>
<Content/>
<Advertise/>

{/* <ImageWithPopup/> */}





   </div>
  )
}

export default Home
