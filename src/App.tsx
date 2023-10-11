import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navdata from './Component/Navigation/navdata';
import Home from './Component/PageComponent/home';
import Product from './Component/PageComponent/product';
import AutoSlider from './Component/PageComponent/food';
import Dropdown from './Component/PageComponent/dropdown';

import Advertise from './Component/PageComponent/advertise';
import Container from './Component/PageComponent/container';
import Contact from './Component/PageComponent/contact';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Footer from './Component/PageComponent/footer';
import Layout from './Component/Hoc/layout';
import Blg from './Component/PageComponent/b';
import Shop from './Component/PageComponent/shop';
import ShopDetails from './Component/PageComponent/shopdetails';
import ShoppingCart from './Component/PageComponent/shoopingcart';
import CheckOut from './Component/PageComponent/checkout';
import BlogDetails from './Component/PageComponent/blogdetails';


function App() {
  return (
    <div className="App">
      <Router>
      <Layout>
        <Routes>
      
          <Route path="/" element={<Home/>}/>
         <Route path="/b" element={<Blg/>}/>
          <Route path="/advertise" element={<Advertise/>}/>
          <Route path="/container" element={<Container/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/footer" element={<Footer/>}/>

/** path for pages*/ 
         <Route path="/shoppingdetails" element={<ShopDetails/>}/>
         <Route path="/shoppingcart" element={<ShoppingCart/>}/>
         <Route path="/checkout" element={<CheckOut/>}/>
         <Route path="/blogdetails" element={<BlogDetails/>}/>

        </Routes>
        </Layout>
      </Router>






    </div>
  );
}

export default App;
