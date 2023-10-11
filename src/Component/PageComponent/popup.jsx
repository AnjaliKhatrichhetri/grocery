import React,{useState} from 'react'
import {AiFillHeart} from "react-icons/ai";
import {FiShoppingCart} from "react-icons/fi"
import {ImLoop} from "react-icons/im"

function ImageWithPopup() {
 const [showPopup, setShowPopup] = useState(false);

 const handleMouseOver = () => {
    setShowPopup(true);
 };

 const handleMouseOut = () => {
    setShowPopup(false);
 };

 return (
    <div className="image-container relative flex flex-col justify-center items-center " onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img src={require('../Resources/berry.png')} alt="Your Image" className="main-image " />
      {showPopup && (
<div className="icon-popup flex flex-row  absolute bottom-6 justify-center items-center gap-3  ">
<div className='h-10 w-10 rounded-full bg-white flex flex-row items-center justify-center hover:bg-mainColor rotate'><AiFillHeart size={20} /></div>            
<div className='h-10 w-10 rounded-full bg-white flex flex-row items-center justify-center hover:bg-mainColor rotate'><FiShoppingCart size={20} /></div>
<div className='h-10 w-10 rounded-full bg-white flex flex-row items-center justify-center hover:bg-mainColor rotate'><ImLoop size={20} /></div>

        </div>
      )}
    </div>
 );
}
export default ImageWithPopup;