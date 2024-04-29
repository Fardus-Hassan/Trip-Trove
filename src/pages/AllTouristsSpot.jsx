import { useEffect, useState } from "react";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { WiDayCloudy } from "react-icons/wi";
import SectionHeading from "../utility/SectionHeading";
import SectionTitle from "../utility/SectionTitle";

const AllTouristsSpot = () => {

    const [info, setInfo] = useState([])

    // const { short_description, travel_time, totalVisitorsPerYear, seasonality, average_cost, location, tourists_spot_name, img: [image, image2, image3], country_name, _id }


    useEffect(() => {
        fetch('http://localhost:3000/touristSpots')
            .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }, [])

    return (
        <div className="max-w-[1440px] w-[95%] mx-auto   md:pt-[150px] pt-[100px] pb-10 mb-10">
            <div className="text-center mb-10">
                <SectionHeading>Places</SectionHeading>
                <SectionTitle>All Tourists Spots</SectionTitle>
            </div>
            {
                info.length === 0 ? <div role="alert" className="alert shadow-lg w-[90%] mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <div>
                        <h3 className="font-bold">No Information</h3>
                        <div className="text-xs">Want to add some information ?</div>
                    </div>
                    <Link to='/add-tourists-spot'><button className="btn btn-sm bg-pmColor text-white">Add</button></Link>
                </div> : <div className="grid 2xl:grid-cols-3 md:grid-cols-2 gap-6">
                    {
                        info.map(item => (
                            <div key={item._id} className="shadow-2xl rounded-3xl mb-6">
                                <div className="h-[350px]">
                                    <img className="h-[350px] rounded-t-3xl w-full" src={item.img[0]} alt="" />
                                </div>
                                <div>
                                    <div className="border-b border-pmColor lg:space-y-0 space-y-2 flex lg:flex-row flex-col justify-center items-center">
                                        <span className="text-center px-10 lg:mt-0 mt-3 flex justify-center items-center "><FaLocationDot className="text-pmColor mr-1" /> <span className="text-black text-opacity-70 text-sm font-heebo font-medium">{item.country_name}</span></span>
                                        <span className="text-center px-10 py-2 border-r border-l text-nowrap border-pmColor flex justify-center items-center"><FaCalendarAlt className="text-pmColor mr-1" /><span className="text-black text-opacity-70 text-sm font-heebo font-medium">{item.travel_time}</span></span>
                                        <span className="text-center px-10 flex lg:pb-0 pb-3 justify-center items-center "><WiDayCloudy className="text-pmColor mr-1 text-2xl" /> <span className="text-black text-opacity-70 text-sm font-heebo font-medium">{item.seasonality}</span></span>
                                    </div>
                                    <div className="px-6">
                                        <h2 className="text-center text-xl mb-2 font-nunito font-bold mt-5">{item.tourists_spot_name}</h2>
                                        <h1 className="flex justify-center items-center gap-1 mt-5"><TbCoinTakaFilled className="text-pmColor text-3xl" /> <span className="text-2xl text-black text-opacity-80 font-nunito font-bold">{item.average_cost}</span></h1>
                                        <span className="flex justify-center items-center gap-1 mt-2 mb-6"><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /></span>
                                        <h2 className="text-center text-lg mb-5 font-nunito font-semibold text-black text-opacity-60">Visitors Per Year : {item.totalVisitorsPerYear}</h2>
                                        <Link to={`/details/${item._id}`}>
                                            <button className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5">View Details page</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
        </div >
    );
};

export default AllTouristsSpot;