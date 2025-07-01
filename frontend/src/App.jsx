import React from 'react'
import Navbar from './components/Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import headphone from './assets/hero/headphone.png'
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import Popop from './components/Popop/Popop';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [orderPop, setOrderPop] = useState(false)

  const handleOrderPop = ()=>{
    setOrderPop(!orderPop);
  }

  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, [])
  
  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 June to 28 June",
    image: headphone,
    titile2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elite Eaque reiciendis",
    bgColor: "#f42c37",     
  }
  const BannerData2 = {
    discount: "30% OFF",
    title: "Happy Hours",
    date: "10 June to 28 June",
    image: smartwatch2,
    titile2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elite Eaque reiciendis",
    bgColor: "#2dcc6f",     
  }

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden'>
      <Navbar handleOrderPop={handleOrderPop}/>
      <Hero handleOrderPop={handleOrderPop}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popop orderPop={orderPop}
      handleOrderPop={handleOrderPop}/>
    </div>
  )
}

export default App