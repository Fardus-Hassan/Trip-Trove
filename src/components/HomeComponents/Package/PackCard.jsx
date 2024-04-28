import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

const packCard = () => {
    return (
        <div className="shadow-2xl rounded-3xl mb-6">
            <div className="h-[350px]">
                <img className="h-[350px] rounded-t-3xl w-full" src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Sunset_at_Patenga_beach.jpg" alt="" />
            </div>
            <div>
                <div className="border-b border-pmColor lg:space-y-0 space-y-2 flex lg:flex-row flex-col justify-center items-center">
                    <span className="text-center px-10 lg:mt-0 mt-3 flex justify-center items-center "><FaLocationDot className="text-pmColor mr-1" /> <span className="text-black text-opacity-70 text-sm font-heebo font-medium">Thailand</span></span>
                    <span className="text-center px-10 py-2 border-r border-l border-pmColor flex justify-center items-center"><FaCalendarAlt className="text-pmColor mr-1" /><span className="text-black text-opacity-70 text-sm font-heebo font-medium">3 days</span></span>
                    <span className="text-center px-10 flex lg:pb-0 pb-3 justify-center items-center "><IoPerson className="text-pmColor mr-1" /> <span className="text-black text-opacity-70 text-sm font-heebo font-medium">2 Person</span></span>
                </div>
                <div className="px-6">
                    <h1 className="flex justify-center items-center gap-1 mt-5"><TbCoinTakaFilled className="text-pmColor text-3xl" /> <span className="text-2xl text-black text-opacity-80 font-nunito font-bold">5000.00</span></h1>
                    <span className="flex justify-center items-center gap-1 mt-2 mb-6"><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /></span>
                    <p className="text-center font-heebo text-base text-black text-opacity-60 font-medium">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p>

                    <Link to={`/details`}>
                        <button className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5">View Details page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default packCard;