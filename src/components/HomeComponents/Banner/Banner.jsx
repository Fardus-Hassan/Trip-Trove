import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom';


const Banner = () => {

  const [value, setValue] = useState('')

  const realValue = value.length > 0 ? value : "Bangladesh"

  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault()
    const search = e.target.value
    setValue(search)
  }



  return (
    <div data-aos="fade-up" data-aos-duration="1500" className='relative '>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-full max-h-[90vh] h-[90vh] mb-10 sm:mb-[100px]"
      >


        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://images.pexels.com/photos/1591375/pexels-photo-1591375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img className='max-w-full h-full object-cover' src="https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="w-full h-full bg-opacity-50 bg-black absolute top-0 z-10"></div>
        </SwiperSlide>
        <div className='absolute top-[50%] translate-y-[-50%] text-center z-30 left-[50%] translate-x-[-50%] w-[90%]'>
          <h1 className='text-white lg:text-[46px] text-[35px] font-nunito font-black'>Elevate Your Tourism <span className='text-pmColor'><Typewriter
            words={['Experience', 'Destinations', 'Adventures']}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={3000}
            cursorStyle='_'
            autoStart={true}
            loop={true}
            cursor='pointer'
          /></span></h1>
          <p className='text-white lg:text-[16px] text-[14px] font-heebo mt-4 mb-8 max-w-[700px] mx-auto'>Discover Seamless Travel Solutions with Expert Tourism Management Services. Plan, Explore, and Thrive with Us !</p>
          <form className="input input-bordered flex md:w-[700px] w-full mx-auto md:flex-row flex-col items-center md:h-14 gap-2 rounded-full outline-none border-none">
            <input onChange={handleSubmit} type="text" name='search' className="grow w-full rounded-3xl font-heebo md:text-left text-center md:pt-0 pt-3 font-medium border-none outline-none" placeholder="Search" />
            <Link to={`/country/${realValue}`} className="inline-block">
              <button type="submit" className="bg-pmColor px-5 rounded-3xl text-base py-2 text-white md:mt-0 mt-3 font-heebo font-semibold">Search</button>
            </Link>
          </form>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;