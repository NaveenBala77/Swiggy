import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Mgmtteam.css'
import { FaArrowRight } from "react-icons/fa";
import sriharsha from '../../../Assets/Images/hero-image-1.png'
import nandan from '../../../Assets/Images/hero-image-6.png'
import rohit from '../../../Assets/Images/hero-image-5.png'
import phani from '../../../Assets/Images/hero-image-7.png'
import rahul from '../../../Assets/Images/Rahul-Bothra.png'
import madhu from '../../../Assets/Images/Madhusudhan-Rao.png'
import girish from '../../../Assets/Images/Girish-Menon.png'
import ashwath from '../../../Assets/Images/Ashwath-Swaminathan.png'

const Mgmtteam = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={false}
        navigation={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
        <SwiperSlide>
            <img src={sriharsha} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Sriharsha Majety</h3>
                <p>Managing Director and Group CEO</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={nandan} alt="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Nandan Reddy</h3>
                <p>Whole-time Director and Head of Innovation</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={rohit} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Rohit Kapoor</h3>
                <p>CEO – Food Marketplace</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={phani} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Phani Kishan</h3>
                <p>CEO – Instamart</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={rahul} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Rahul Bothra</h3>
                <p>Chief Financial Officer</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={madhu} alt="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Madhusudhan Rao</h3>
                <p>Chief Technology Officer</p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
         <img src={girish} alt="" />
         <div className='members_info'>
              <div className='members_name'>
                <h3>Girish Menon</h3>
                <p>Chief Human Resources Officer</p>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ashwath} alt="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Ashwath Swaminathan</h3>
                <p>Chief Growth and Marketing Officer</p>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Mgmtteam
