import React from 'react'
import {BsFillTelephoneFill,BsClock} from "react-icons/bs"
import {SlLocationPin} from "react-icons/sl"
import {GoMail} from "react-icons/go"
import Footer from './footer'


function Contact() {
  return (
    <div>
      <div className='h-40 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9'
       style={{
        backgroundImage:`url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`
      }}>
        <h1 className='font-bold text-4xl text-white'>Contact Us</h1>
     
     <div className='pt-1 flex flex-row gap-3'> <span className='font-bold text-white'>Home -</span><span className='text-gray-500 font-bold '>Contact Us</span></div>   
      </div>

      <div className='md:h-40 h-[300px] w-full mb-72 gap-9 mt-8 grid  grid-cols-1 md:grid-cols-4 md:gap-8 bg-white px-10 md:mt-4 md:mb-4'>
       <div className='flex flex-col justify-center items-center '>
          <BsFillTelephoneFill className='text-mainColor h-9 w-9'/>
          <p className='font-bold text-xl text-gray-900 pt-3'>Phone</p>
          <p className='text-gray-500 font-bold pt-1 text-sm'>+01-3-8888-6868</p>
       </div>
       <div className='flex flex-col justify-center items-center '>
        <SlLocationPin className='text-mainColor h-9 w-9'/>
        <p className='font-bold text-xl text-gray-900 pt-3'>Address</p>
          <p className='text-gray-500 font-bold pt-1 text-sm'>60-49 Road 11378 New York</p>
       </div>
       <div className='flex flex-col justify-center items-center '>
        <BsClock className='text-mainColor h-9 w-9 '/>
        <p className='font-bold text-xl text-gray-900 pt-3'>Open time</p>
          <p className='text-gray-500 font-bold pt-1 text-sm'>10:00 am to 23:00 pm</p>
       </div>
       <div className='flex flex-col justify-center items-center '>
        <GoMail className='text-mainColor h-9 w-9 '/>
        <p className='font-bold text-xl text-gray-900 pt-3'>Email</p>
          <p className='text-gray-500 font-bold pt-1 text-sm'>hello@colorlib.com</p>
       </div>
             </div>


             <div>
             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14131.875073268851!2d83.43233654999999!3d27.68736015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1695686858621!5m2!1sen!2snp" className='h-96 w-full'></iframe>
             </div>

<div className='h-96 w-full flex flex-col justify-center items-center mt-4'>
  <h1 className=' h-10 font-extrabold text-2xl text-gray-900 '>Leave a Message</h1>
  <form className='h-52 w-5/6 flex flex-col gap-8'>
<div className='flex flex-row justify-center  h-10 w-full gap-8 mt-4'>
  <input className='h-12 w-3/6 pl-4 bg-transparent border-2 border-gray-200 text-slate-300 ' placeholder='Your Name'></input>
  <input className='h-12 w-3/6 pl-4 bg-transparent border-2 border-gray-200  text-slate-300' placeholder='Your Email'></input>
</div>
<div>
<input type="text" className='h-28 w-full  pl-4  bg-transparent border-2 border-gray-200  text-slate-300' placeholder='Your Message'/>
</div>
<div>
  <button className='font-bold text-xl text-white bg-mainColor h-12 w-56 hover:bg-white hover:text-mainColor hover:border-2 hover:border-mainColor'>SEND MESSAGE</button>
</div>
  </form>
 
</div>



    </div>
  )
}

export default Contact
