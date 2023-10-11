import React from 'react'

import {AiFillHeart} from "react-icons/ai"
import {FaFacebookF,FaTwitter,FaPinterest} from "react-icons/fa"
import {RxInstagramLogo} from "react-icons/rx"

function Footer() {
  return (
    <div>
<div className=' w-full bg-footer flex flex-col justify-center items-center mt-8' >

<div className='grid grid-cols-1 gap-4  md:grid-cols-3  px-12 md:px-0 md:gap-0 w-[90%] py-4 '>
  <div className='w-[50%] flex flex-col text-left gap-3 justify-center '>
    <img src={require('../Resources/footerimg.png')} className='h-18 w-40'/>
    <div className='flex flex-col gap-2 px-2 text-gray-900 font-semibold'>
      <p>Address:60-49 Road 11378 New York</p>
      <p>Phone:+65 11.188.888</p>
      <p>Email:someone@gmail.com</p>
    </div>
  </div>
  <div className=' bg-footer flex flex-col justify-center'>
<div className=' w-full flex  text-gray-900 font-extrabold pt-4'>Useful Links</div>

<div className=' w-full flex flex-row gap-9 pt-6'>
<div className='flex flex-col text-left gap-2'>
  <a className='text-gray-800 text-sm'>About Us</a>
  <a className='text-gray-800 text-sm'>About Our Shop</a>
  <a className='text-gray-800 text-sm'>Secure Shopping</a>
  <a className='text-gray-800 text-sm'>Delievery information</a>
  <a className='text-gray-800 text-sm'>Privacy Policy</a>
  <a className='text-gray-800 text-sm'>Our Sitemap</a>
</div>
<div className='flex flex-col text-left gap-2'>
  <a className='text-gray-800 text-sm'>Who we are</a>
  <a className='text-gray-800 text-sm'>Our Services</a>
  <a className='text-gray-800 text-sm'>Projects</a>
  <a className='text-gray-800 text-sm'>Contact</a>
  <a className='text-gray-800 text-sm'>Innovation</a>
  <a className='text-gray-800 text-sm'>Testimonial</a>
</div>
</div>
  </div>
  <div className='w-[55%] bg-footer justify-center flex flex-col'>
    <div className=' w-full flex flex-col gap-2 '>
      <h1 className='text-bold text-gray-900 text-left font-bold pt-6 '>Join Our Newsletter Now</h1>
      <p className='text-light text-slate-700 text-sm text-left pt-1 py-2'>Get E-mail updates about our latest shop and special offers.</p>
    </div>
    <div className=' flex flex-row '>
      <input type="text" placeholder='Enter your mail' className='h-10 w-80 pl-4 border-2 border-gray-200 text-gray-400 text-lg' />
      <button className='font-bold text-white text-lg bg-mainColor p-1'>SUBSCRIBE </button>
    </div>
    <div className='bg-footer flex flex-row pt-4 py-6  items-center gap-4'>
      <div className='h-9 w-10 bg-white  rounded-full pt-2 pl-2 shadow-md shadow-gray-200 logoanimate '><FaFacebookF className=' h-5 w-7 text-slate-500'/></div>
      <div className='h-9 w-10 bg-white  rounded-full pt-2 pl-2 shadow-md shadow-gray-200 logoanimate '><RxInstagramLogo className=' h-5 w-7  text-slate-500 '/></div>
      <div className='h-9 w-10 bg-white  rounded-full pt-2 pl-2 shadow-md shadow-gray-200 logoanimate '><FaTwitter className='h-5 w-7  text-slate-500'/></div>
      <div className='h-9 w-10 bg-white  rounded-full pt-2 pl-2 shadow-md shadow-gray-200 logoanimate '><FaPinterest className='h-5 w-7  text-slate-500'/></div>

    </div>

  </div>
</div>
<div className=' w-5/6 flex flex-row'>
<div className='flex flex-row w-1/2  items-center gap-1'><h1 className='text-slate-400'>Copyright 2023 All rights reserved | This template is made with </h1><AiFillHeart className='text-slate-400'/></div>
<div className='w-1/2 flex flex-row-reverse pr-6 gap-2 items-center'>
<img src={require('../Resources/payment1.png')} className='h-10 w-20' />
<img src={require('../Resources/payment2.png')} className='h-10 w-18' />
<img src={require('../Resources/payment3.png')} className='h-10 w-18' />

</div>
</div>

</div> 
    </div>
  )
}

export default Footer
