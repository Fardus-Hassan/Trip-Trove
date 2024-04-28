import { FaArrowRight } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Package from "../components/HomeComponents/Package/Package";

const AllTouristsSpot = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto md:pt-0 pt-20 md:pb-0 pb-10 md:my-[100px]">
            <div className="w-full h-[60vh] rounded-3xl">
                <>
                    <Swiper
                        pagination={true}
                        navigation={true}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper w-full h-[60vh] rounded-3xl">
                        <SwiperSlide>
                            <img className="w-full h-[60vh] rounded-3xl object-cover" src="https://images.pexels.com/photos/11356779/pexels-photo-11356779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-[60vh] rounded-3xl object-cover" src="https://images.pexels.com/photos/11356779/pexels-photo-11356779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full h-[60vh] rounded-3xl object-cover" src="https://images.pexels.com/photos/11356779/pexels-photo-11356779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </SwiperSlide>

                    </Swiper>
                </>

            </div>
            <div className="mt-10 px-3">
                <div className="flex justify-between md:items-start items-center">
                    <h1 className="font-nunito font-bold text-2xl sm:text-4xl">Cox’s Bazar</h1>
                    <h3 className="font-heebo text-xs sm:text-lg font-bold">Bangladesh</h3>
                </div>
                <div className="text-base font-heebo font-medium my-5">
                    <p className=" border-t border-b border-pmColor py-6 sm:text-base text-sm"><strong>Description :</strong> Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island. </p>
                    <div className="flex md:flex-row gap-8 flex-col-reverse justify-between my-7">
                        <div className="space-y-4">
                            <span className="flex justify-start items-center gap-2 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg" /><strong>Travel Time :</strong> 7 Days</span>
                            <span className="flex ml-4 justify-start items-center gap-2 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg" /> <strong>Season :</strong> Summer</span>
                            <span className="flex justify-start text-pmColor items-center gap-2 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg" /><strong>Price Per Person :</strong> 5000<TbCurrencyTaka className="text-lg -ml-[10px] mb-[2px]" /></span>

                        </div>
                        <div>
                            <h1 className="font-nunito text-sm sm:text-base font-medium mb-2"><strong>Location :</strong> City in Bangladesh</h1>
                            <h3 className="font-nunito text-sm sm:text-base font-medium"><strong>Total Visitors Per Year :</strong> 10000+ people</h3>
                        </div>
                    </div>
                    <button className="sm:px-7 mt-8 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor">Book Now</button>

                </div>
            </div>
            <div className="mt-10 sm:mt-[100px]">
                <Package></Package>
            </div>
        </div>
    );
};

export default AllTouristsSpot;