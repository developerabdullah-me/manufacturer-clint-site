
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./OurSpecialty.css";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css/autoplay'



const OurSpecialty = () => {
    // const [InventoryItems,setInventoryItems]=useInventoryItems()
    return (
        <div className="mt-16 px-16">
             <h1 className="text-4xl text-center">Best Products</h1>
             <p className="text-center py-1">This best product  in the year {(new Date().getFullYear())}</p>
          <div data-aos="fade-left">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
     
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false
        }}
        className="mySwiper"
      >
      {/* { 
            InventoryItems.slice(0,6).map(service =>  <SwiperSlide className="shadow-2xl mt-11 mb-10  hover:shadow-lg cursor-pointer" service={service._id}>
               
               <div className="pb-16">
               <img className="w-96 h-96 "src={service.img} alt="" />
               <p>{service.name}</p>
               <p>$ <small>{service.price}</small></p>
                
               </div>
                
                </SwiperSlide>)
            } */}
      </Swiper>
    </div>
        </div>
    );
};

export default OurSpecialty;