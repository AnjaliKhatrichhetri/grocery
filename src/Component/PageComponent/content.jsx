
import React from 'react'
import {AiOutlineCalendar} from "react-icons/ai"
import{GoComment} from "react-icons/go"
function Content() {
  return (
    <div className='w-5/6 flex flex-col pt-12 justify-center items-center'>
         <div className=' h-20 w-full font-extrabold text-3xl flex flex-col justify-center items-center gap-3 pb-4'>
                <h1 className='hover:text-mainColor ease-in-out duration-150 slideInLeft'>From The Blog</h1>
                <span className='h-1 w-20 bg-mainColor'></span>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 justify-center items-center  '>

                 {/* <div className='h-96 w-80  flex flex-col text-left px-2 gap-3'>
                  <div className='relative h-40 w-full '>
                    <div className='dim bg-slate-100 absolute h-40 w-full top-[10px] '> <img src={require('../Resources/blog4.png')} className=' h-40 w-full top-[10px] '/></div>
                    <img src={require('../Resources/blog1.png')} className='absolute h-40 w-full top-[20px] right-[10px]'/>
                  </div>
                  <div className='flex flex-row items-center gap-3 px-2 pt-3'>
                    <div className='flex  gap-3 text-slate-400'><AiOutlineCalendar className=''/> May4,2019 </div>
                    <div className='text-slate-400'><GoComment/></div>
                  </div>
                  <h1 className='font-bold text-lg pt-2'>Cooking tips make cooking simple</h1>
                  <p className='text-sm text-gray-700 pt-2'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>

                 </div> */}

                 <div className='h-96 w-80  flex flex-col text-left px-2'>
                  <div className=''>
                    <img src={require('../Resources/blog1.png')}/>
                  </div>
                  <div className='flex flex-row items-center gap-3 px-2 pt-3'>
                    <div className='flex justify-center items-center gap-3 text-slate-400'><AiOutlineCalendar size={20}/> May4,2019 </div>
                    <div className='text-slate-400'><GoComment size={20}/></div>
                  </div>
                  <h1 className='font-bold text-lg pt-2'>Cooking tips make cooking simple</h1>
                  <p className='text-sm text-gray-700 pt-2'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>

                 </div>
                 <div className='h-96 w-80  flex flex-col text-left px-2'>
                  <div className=''>
                    <img src={require('../Resources/blog2.png')}/>
                  </div>
                  <div className='flex flex-row items-center gap-3 px-2 pt-3'>
                    <div className='flex justify-center items-center gap-3 text-slate-400'><AiOutlineCalendar size={20}/><span> May4,2019</span> </div>
                    <div className='text-slate-400'><GoComment size={20}/></div>
                  </div>
                  <h1 className='font-bold text-lg pt-2'>6 ways to prepare breakfast for 30</h1>
                  <p className='text-sm text-gray-700 pt-2'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>

                 </div>

                 <div className='h-96 w-80  flex flex-col text-left px-2'>
                  <div className=''>
                    <img src={require('../Resources/blog3.png')}/>
                  </div>
                  <div className='flex flex-row items-center gap-3 px-2 pt-3'>
                    <div className='flex  gap-3 items-center text-slate-400'><AiOutlineCalendar size={20}/><span> May4,2019</span> </div>
                    <div className='text-slate-400'><GoComment size={20}/></div>
                  </div>
                  <h1 className='font-bold text-lg pt-2'>Visit the clean farm in the US</h1>
                  <p className='text-sm text-gray-700 pt-2'>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat</p>

                 </div>
                 
                

                </div>
      
    </div>
  )
}

export default Content