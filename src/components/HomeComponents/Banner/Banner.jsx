import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './banner.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {

  

  return (
    <div className='relative'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper max-w-full max-h-[90vh] h-[90vh] mb-10 sm:mb-[100px]"
      >


        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kaptai_Lake_05.jpg/1920px-Kaptai_Lake_05.jpg" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kaptai_Lake_05.jpg/1920px-Kaptai_Lake_05.jpg" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kaptai_Lake_05.jpg/1920px-Kaptai_Lake_05.jpg" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <div className='absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%]'>
          <h1 className='text-white lg:text-[46px] text-[35px] font-nunito font-black italic'>Elevate Your Tourism <span className='text-pmColor'>Experience</span></h1>
          <p className='text-white lg:text-[16px] text-[14px] font-heebo mt-4 mb-8 max-w-[700px] mx-auto'>Discover Seamless Travel Solutions with Expert Tourism Management Services. Plan, Explore, and Thrive with Us!</p>
          <label className="input input-bordered flex sm:flex-row flex-col items-center sm:h-14 gap-2 rounded-full outline-none border-none w-full">
            <input type="text" className="grow rounded-3xl font-heebo sm:text-left text-center sm:pt-0 pt-3 font-medium border-none outline-none" placeholder="Search" />
            <button className="bg-pmColor px-5 rounded-3xl text-base py-2 text-white sm:mt-0 mt-3 font-heebo font-semibold">Search</button>
          </label>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;