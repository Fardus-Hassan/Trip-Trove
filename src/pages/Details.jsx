import { FaArrowRight } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link, useLoaderData } from "react-router-dom";
import SectionHeading from "../utility/SectionHeading";
import SectionTitle from "../utility/SectionTitle";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Details = () => {

    const info = useLoaderData();

    const { short_description, travel_time, totalVisitorsPerYear, seasonality, average_cost, location, tourists_spot_name, img, country_name, _id } = info;

    const [data, setData] = useState([]);

    console.log(data);

    useEffect(() => {
        fetch('https://trip-trove-server-oized1a22-fardus-projects.vercel.app/touristSpots')
        .then(res => res.json())
        .then(data => {
            const country = data.filter(item => item.country_name === country_name)
            setData(country)
        })
    },[country_name])




    return (
        <>
            <div className="max-w-[1440px] w-[95%] mx-auto md:pt-0 pt-20 md:pb-0 pb-10 md:my-[100px]">
                <div className="w-full sm:h-[70vh] h-[60vh] rounded-3xl">
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
                            className="mySwiper w-full sm:h-[70vh] h-[60vh] rounded-3xl">
                            {
                                img.map((image, i) => (
                                    <SwiperSlide key={i}>
                                        <img className="w-full sm:h-[70vh] h-[60vh] rounded-3xl object-cover" src={image} alt="" />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </>

                </div>
                <div className="mt-10 px-3">
                    <div className="flex justify-between items-center">
                        <h1 className="font-nunito font-bold text-2xl sm:text-4xl">{tourists_spot_name}</h1>
                        <h3 className="font-heebo text-xs sm:text-lg font-bold">{country_name}</h3>
                    </div>
                    <div className="text-base font-heebo font-medium my-5">
                        <p className=" border-t border-b border-pmColor py-6 sm:text-base text-sm"><strong>Description :</strong>{short_description}</p>
                        <div className="flex md:flex-row gap-8 flex-col-reverse justify-between my-7">
                            <div className="space-y-4">
                                <span className="flex justify-start items-center gap-2 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg" /><strong>Travel Time :</strong> {travel_time}</span>
                                <span className="flex ml-4 justify-start items-center gap-2 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg" /> <strong>Season :</strong> {seasonality}</span>
                                <span className="flex justify-start items-center gap-2 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg" /><strong className=" text-pmColor">Price Per Person :</strong> {average_cost}<TbCurrencyTaka className="text-lg -ml-[10px] mb-[2px]" /></span>

                            </div>
                            <div>
                                <h1 className="font-nunito text-sm sm:text-base font-medium mb-2"><strong>Location :</strong> {location}</h1>
                                <h3 className="font-nunito text-sm sm:text-base font-medium"><strong>Total Visitors Per Year :</strong> {totalVisitorsPerYear}</h3>
                            </div>
                        </div>
                        <Link to="/book-now">
                            <button className="sm:px-7 mt-8 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor">Book Now</button>

                        </Link>
                    </div>
                </div>

            <div className="my-10 sm:mt-[100px]">
                <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-10">
                    <SectionHeading>{country_name}</SectionHeading>
                    <SectionTitle>Tourists Spots</SectionTitle>
                </div>
                <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        data.map(item => (
                            <CountryCard item={item} key={item._id}></CountryCard>
                        ))
                    }
                </div>
            </div>
            </div>
        </>
    );
};

export default Details;