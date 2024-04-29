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

const Review = () => {


    const loop = [1, 2, 3, 4, 5];

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
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                >


                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-80 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/94/21/55/942155b73e3ad9184c190f08aca149d6.jpg" alt="" />
                                </span>
                                <h3 className=" text-black text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Ava Adventures</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto text-black text-opacity-60 text-center font-heebo font-bold">Seeker of unique, immersive experiences; values authenticity, cultural exchange, and sustainable travel.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-80 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/c2/a2/e5/c2a2e5b6acbf04d453eadb78c37d528a.jpg" alt="" />
                                </span>
                                <h3 className=" text-black text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Maxine Wanderlust</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto text-black text-opacity-60 text-center font-heebo font-bold">Enthusiastic explorer, history buff, solo traveler; captivated by culture, heritage, and photography.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-80 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/0a/38/d5/0a38d57007e2b01e789b8fa321e63635.jpg" alt="" />
                                </span>
                                <h3 className=" text-black text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Ethan Rivers</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto text-black text-opacity-60 text-center font-heebo font-bold">Adventure seeker, nature lover; enjoys adrenaline activities, outdoor exploration, and wildlife encounters.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-80 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/35/42/a9/3542a919850265a62cbf88d64321dcbd.jpg" alt="" />
                                </span>
                                <h3 className=" text-black text-center text-opacity-90 font-nunito text-xl my-3 font-semibold"> Marcus Journeys</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto text-black text-opacity-60 text-center font-heebo font-bold">Eco-conscious, cultural explorer; seeks hidden gems, local interactions, and sustainable tourism experiences.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl">
                        <div className="sm:mb-[100px] border-none mb-10 bg-pmColor bg-opacity-80 rounded-3xl">
                            <div className=" lg:mt-0 border-none mt-14 text-center p-5 relative">
                                <span className=" text-black text-7xl rounded-full  w-10 h-10">
                                    <img className="max-w-32 max-h-32 object-cover border-4 border-white  mx-auto rounded-full" src="https://i.pinimg.com/564x/82/1e/82/821e8200c5fc1ad020190bfb75a10786.jpg" alt="" />
                                </span>
                                <h3 className=" text-black text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Oliver Outdoors</h3>
                                <div className="my-5">
                                    <span className="block w-20 h-[1px] bg-white mx-auto mb-1"></span>
                                    <span className="block w-40 h-[1px] bg-white mx-auto"></span>
                                </div>
                                <p className="text-base md:max-h-[50px] overflow-auto text-black text-opacity-60 text-center font-heebo font-bold">Luxury traveler, spa lover, gourmet enthusiast; seeks refined experiences, exclusivity, and personalized services.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Review;