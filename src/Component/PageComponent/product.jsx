import React from 'react'

function Product() {
  return (
    <div>
        <div className='flex flex-col  w-full mt-28'>
            <div className='font-extrabold text-3xl flex flex-col justify-center items-center gap-3'>
                <h1 className='slideInLeft'>Featured Product</h1>
                <span className='h-1 w-20 bg-mainColor'></span>
                </div>
            <nav className='flex flex-row h-16 justify-center gap-10 pt-8'>
                <a className='font-sans  text-lg text-gray-900'>All</a>
                <a className='font-sans  text-lg text-gray-900'>Oranges</a>
                <a className='font-sans  text-lg text-gray-900'>Fresh Meat</a>
                <a className='font-sans  text-lg text-gray-900'>Vegetables</a>
                <a className='font-sans  text-lg text-gray-900'>Fastfood</a>
            </nav>
        </div>
        <div className=' pt-5 px-10 grid grid-cols-2 md:grid-cols-4  gap-10' >

                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/meat.png')}/>
                </div>
                <div className='h-12 bg-white w-full flex flex-col justify-center mt-6'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/banana.png')}/>
                </div>
                <div className='h-12 bg-white mt-6 w-full flex flex-col justify-center '>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/guava.png')}/>
                </div>
                <div className='h-12 w-full flex flex-col justify-center bg-white mt-9'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/watermelon.png')}/>
                </div>
                <div className='h-12 w-full flex flex-col justify-center bg-white mt-6'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/berry.png')}/>
                </div>
                <div className='h-12 bg-white w-full flex flex-col justify-center mt-4'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/burger.png')}/>
                </div>
                <div className='h-12 w-full flex flex-col justify-center mt-8 bg-white'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/mango.png')}/>
                </div>
                <div className='h-12 bg-white w-full flex flex-col justify-center mt-4'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                <div className=' h-64 w-64 flex flex-col'>
                <div className='h-48 w-64'>
                    <img src={require('../Resources/apple.png')}/>
                </div>
                <div className='h-12 w-full bg-white flex flex-col justify-center mt-4'>
                    <p className='font-light text-gray-500'>Crab Pool </p>
                    <p className='font-bold text-gray-900'>$30.00</p>
                </div>
                </div>
                

            </div>
      
    </div>
  )
}

export default Product
