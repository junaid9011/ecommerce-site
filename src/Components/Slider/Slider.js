import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
//Import Images
import banner1 from '../../images/banner-images/tv.png'
import xbox from '../../images/banner-images/xbox.png'
import headphone from '../../images/banner-images/headphone.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./Slider.css";


// import Swiper core and required modules
import SwiperCore, {
    Navigation,Autoplay,Pagination
} from 'swiper';
// import { Link, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { getProductDetails } from '../../Redux/Actions/productAction';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation]);


export const Slider = () => {
    // const dispatch=useDispatch();
    // const {loading,error,findSingleProduct}=useSelector(state=>state.productDetails.productDetails);
    // console.log(findSingleProduct)
    
    return (
        <div>
             <Swiper spaceBetween={30} centeredSlides={true} 
                    autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false}} 
                    pagination={{"clickable": true}}
                    navigation={true}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className=" flex justify-between  ">
                           <div className="slide-text mx-auto my-auto hidden md:block">
                           <h1 className="">48" LED TV </h1>
                           
                           <h1 className="">It's Supper LED TV</h1>
                         {/* <button  className="border-2 py-2 px-2 my-4 rounded bg-emerald-600 text-white ">Order Now</button> */}
                           </div>
                        <img className="" src={banner1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className=" flex justify-between  ">
                           <div className="slide-text mx-auto my-auto hidden md:block">
                           <h1 className="">X-Box </h1>
                           
                           <h1 className="">It's a gamimg xbox.</h1>
                         {/* <button  className="border-2 py-2 px-2 my-4 rounded bg-emerald-600 text-white ">Order Now</button> */}
                           </div>
                        <img className="" src={xbox} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className=" flex justify-between  ">
                           <div className="slide-text mx-auto my-auto hidden md:block">
                           <h1 className="">Beats 365 Headphone</h1>
                           
                           <h1 className="">It's a High bass headphone</h1>
                         {/* m<button  className="border-2 py-2 px-2 my-4 rounded bg-emerald-600 text-white ">Order Now</button> */}
                           </div>
                        <img className="" src={headphone} alt="" />
                        </div>
                    </SwiperSlide>
             </Swiper>

        </div>
    )   
}
