import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './banner.css';

// import required modules
import { Mousewheel, Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {


  return (
    <div className='relative'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className="mySwiper max-w-full max-h-[90vh] h-[90vh]"
      >

        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://images.pexels.com/photos/5041966/pexels-photo-5041966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <div className='absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%]'>
          <h1 className='text-white text-[46px] font-nunito font-black italic'>Elevate Your Tourism <span className='text-pmColor'>Experience</span></h1>
          <p className='text-white text-[16px] font-heebo mt-4 mb-8 max-w-[700px] w-[80%] mx-auto'>Discover Seamless Travel Solutions with Expert Tourism Management Services. Plan, Explore, and Thrive with Us!</p>
          <label className="input input-bordered flex items-center h-14 gap-2 rounded-full outline-none border-none">
            <input type="text" className="grow rounded-3xl font-heebo font-medium border-none outline-none" placeholder="Search" />
            <span className="bg-pmColor px-5 rounded-3xl text-base py-2 text-white font-heebo font-semibold">Search</span>
          </label>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;