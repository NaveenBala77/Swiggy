import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiperstyle.css'
import journeyman from '../../../Assets/Images/journey-man.png'
import plate from '../../../Assets/Images/journey-plate.png'
import swiggyone from '../../../Assets/Images/journey-swiggyone.png'
import basket from '../../../Assets/Images/journey-basket.png'
import coinbag from '../../../Assets/Images/journey-coinbag.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swiperdesign = () => {

  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
            <img src={journeyman} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={basket} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={swiggyone} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={plate} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={coinbag} alt="" />
        </SwiperSlide>
      </Swiper>
  )
}

export default Swiperdesign