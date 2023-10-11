import React, { useState } from 'react'
import {IoMdAdd} from "react-icons/io"
import{AiOutlineMinus}from "react-icons/ai"
import {RxCross2} from "react-icons/rx"

function ShoppingCart() {
    const [items, setItems] = useState([
        { id: 1, name: 'Apple', quantity: 0,price:'$4',img:require('../Resources/apple.png') },
        { id: 2, name: 'Banana', quantity: 0 ,price:"$3",img:require('../Resources/banana.png')},
        { id: 3, name: 'Berry', quantity: 0,price:'$2.6' ,img:require('../Resources/berry.png') },
        { id: 4, name: 'Juice', quantity: 0,price:'$6' ,img:require('../Resources/juice.jpg') },
        { id: 5, name: 'Watermelon', quantity: 0 ,price:'$8' ,img:require('../Resources/watermelon.png')},
        { id: 6, name: 'Greens', quantity: 0,price:'$2.6' ,img:require('../Resources/veggie.webp') },
        { id: 7, name: 'Guava', quantity: 0 ,price:'$2.5' ,img:require('../Resources/guava.png')},
        { id: 8, name: 'Strawberry', quantity: 0,price:'$6' ,img:require('../Resources/stawberry.png') },

     ]);

     const[totalPrice,setTotalPrice]=useState(0);
     const calculateTotalPrice=()=>{
      const total =items.reduce((total,item)=>{
        return total +item.price* item.quantitty;
      },0);
      setTotalPrice(total);
     }
    
     const handleAdd = (id) => {
        setItems(
          items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
     };
    
     const handleReduce = (id) => {
        setItems(
          items.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
        );
     };
    
     const handleCancel = (id) => {
        setItems(items.filter((item) => item.id !== id));
     };
    
const totlPrice=items.reduce((total,item)=>{
  return total + items.price*item.quantity;
},0)

  return (
    <div className='flex flex-col justify-center items-center'>
          <div className='h-40 w-full bg-no-repeat bg-cover flex flex-col justify-center items-center mt-9'
       style={{
        backgroundImage:`url('https://media.istockphoto.com/id/1020533374/photo/red-and-green-tomatoes-background-food-close-up.jpg?s=612x612&w=0&k=20&c=1U3bqRQq5UAJfc7FMMuyocOjqnYKUl1_YlycKV1p6qY=')`
      }}>
        <h1 className='font-bold text-4xl text-white'>Shopping Cart</h1>
     
     <div className='pt-1 flex flex-row gap-3'> <span className='font-bold text-white'>Home -</span><span className='text-gray-500 font-bold '>Shopping Cart</span></div>   
      </div>
      

      <div className="App flex flex-col gap-6 mt-8">
    <div className='sticky flex flex-row justify-between  '>
        <div className='font-semibold font-serif text-lg text-gray-900'>Products</div>
        <div className='font-semibold font-serif text-lg text-gray-900'>Price</div>
        <div className='font-semibold font-serif text-lg text-gray-900'>Quantity</div>
        <div className='font-semibold font-serif text-lg text-gray-900'>Items</div>

    </div>

      <div className="item-list w-full flex flex-col gap-6">
        {items.map((item) => (
        
        <div key={item.id} className="item flex flex-row gap-40 border-b-2  p-4 border-slate-200 justify-center items-center ">
           
           <div className='flex flex-col'>
         <div className='h-32 w-32'>
          {/* {item.img} */}
          <img src={require('../Resources/banana.png')}/>
          </div>
            <h2 className='text-xl text-gray-600 '>{item.name}</h2>
           </div>
           <p className='font-bold text-lg'>{item.price}</p>
            <p className='text-lg font-sans text-gray-600'>Quantity [ {item.quantity} ]</p>
          
        <div className='flex flex-row gap-2'>
            <button className='h-10 w-12 bg-gray-300 flex justify-center items-center rounded-md' onClick={() => handleAdd(item.id)}><IoMdAdd size={20}/></button>
            <button className='h-10 w-12 bg-gray-300 flex justify-center items-center rounded-md' onClick={() => handleReduce(item.id)}><AiOutlineMinus size={20}/></button>
            <button className='h-10 w-12 bg-gray-300 flex justify-center items-center rounded-md' onClick={() => handleCancel(item.id)}><RxCross2 size={20}/></button>
          
        </div>
          </div>
        ))}
      </div>
    </div>


    <div className='flex flex-row justify-between mt-9 mb-10 w-5/6'>
      <div className='flex gap-5 flex-col w-1/2'>
        <button className='bg-footer text-[#6F6F6F] font-semibold  uppercase h-12 w-52 flex justify-center items-center hover:text-mainColor '>
          Continue shopping
        </button>
        <p className='font-bold text-left '>Discount Codes</p>
        <div className='flex flex-row gap-3 '><div className='text-slate-400 h-12 w-52 border-2 border-[#6F6F6F]  flex justify-center items-center hover:text-[#6F6F6F] pointer hover:font-semibold'>Enter your coupon code</div> <div className='uppercase font-semibold h-12 w-40 bg-[#6F6F6F] text-white  flex justify-center items-center'>Apply coupon</div></div>
      </div>
      <div className='flex flex-col gap-9  w-1/2'>
      
      <div className=' flex flex-row-reverse w-full '>
      <button className='bg-footer text-[#6F6F6F] font-semibold  uppercase h-12 w-52 flex justify-center items-center hover:text-mainColor'>
       update cart
        </button>
      </div>
        <div className='flex flex-col bg-slate-100 h-32 w-full gap-9'>
              <p className='font-bold text-left p-2'>Cart Total</p>
              <div className='flex flex-col'>

                {/* <h1>GroceryList items={items}</h1> */}
                <div className='flex flex-row gap-56 mx-auto p-3'><span className='font-bold'>Total Price:</span> <span className='text-[#E14141] font-bold'>${totalPrice.toFixed(4)}</span></div>
                 <button className='uppercase font-semibold text-white bg-mainColor w-full h-10 flex justify-center items-center' onClick={calculateTotalPrice}>proceed to checkout</button>
              </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default ShoppingCart
