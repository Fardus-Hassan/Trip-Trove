import SectionHeading from "../../../utility/SectionHeading";
import SectionTitle from "../../../utility/SectionTitle";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './reviewSwip.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import ReviewCard from "./ReviewCard";

const Review = () => {


    const loop = [1, 2, 3,4,5];

    return (
        <div className="max-w-[1440px] mx-auto w-[95%]">
            <div className="text-center mb-10">
                <SectionHeading>TESTIMONIAL</SectionHeading>
                <SectionTitle>Our Clients Say!!!</SectionTitle>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >

                    {
                        loop.map((item, i) => (
                            <SwiperSlide className="rounded-3xl" key={i}>
                                <ReviewCard></ReviewCard>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;