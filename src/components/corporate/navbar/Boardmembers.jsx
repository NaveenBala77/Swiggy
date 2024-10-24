// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Boardmembers.css'
import { FaArrowRight } from "react-icons/fa";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import suparnamitra from '../../../Assets/Images/Suparna-Mitra.png'
import sriharsha from '../../../Assets/Images/hero-image-1.png'
import nandan from '../../../Assets/Images/hero-image-6.png'
import anandkripalu from '../../../Assets/Images/hero-image-3.png'
import ananddaniel from '../../../Assets/Images/hero-image-2.png'
import ashutosh from '../../../Assets/Images/hero-image-4.png'
import shailesh from '../../../Assets/Images/Shailesh-Haribhakti.png'
import sahil from '../../../Assets/Images/Sahil-Barua.png'
import sumer from '../../../Assets/Images/Sumer-Juneja.png'
import roger from '../../../Assets/Images/Roger-Rabalais.png'
import { useDispatch } from 'react-redux';
import { myreducer } from '../../../Redux/Store';
const Boardmembers = () => {
  let mydispatch=useDispatch()
  // const[info,setinfo]=useState(false)

  function getdata2(event) {
    // setinfo(event)
    mydispatch(myreducer.mylogin())
  }
  return (
    <div className='se'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={false}
        navigation={true}

        autoplay={{
          delay: 5000,
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
               <button type='button' onClick={()=>getdata2("info1")}><FaArrowRight className='arrow_style'/></button>
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
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={anandkripalu} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Anand Kripalu</h3>
                <p>Chairperson, Independent Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ananddaniel} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Anand Daniel</h3>
                <p>Non-Executive Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={ashutosh} alt="" srcset="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Ashutosh Sharma</h3>
                <p>Non-Executive Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={shailesh} alt="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Shailesh Haribhakti</h3>
                <p>Independent Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
         <img src={sahil} alt="" />
         <div className='members_info'>
              <div className='members_name'>
                <h3>Shailesh Haribhakti</h3>
                <p>Independent Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={suparnamitra} alt="" />
            <div className='members_info'>
              <div className='members_name'>
                <h3>Suparna Mitra</h3>
                <p>Independent Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
         <img src={sumer} alt="" />
         <div className='members_info'>
              <div className='members_name'>
                <h3>Sumer Juneja</h3>
                <p>Non-Executive Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <img src={roger} alt="" />
         <div className='members_info'>
              <div className='members_name'>
                <h3>Roger Clarks Rabalais</h3>
                <p>Non-Executive Director</p>
              </div>
              <div className='info_arrow'>
               <button type='button'><FaArrowRight className='arrow_style'/></button>
              </div>
          </div>
        </SwiperSlide>
      </Swiper>
     
    </div>
  )
}

export default Boardmembers