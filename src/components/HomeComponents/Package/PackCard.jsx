import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";
import { Link } from "react-router-dom";

const packCard = ({item}) => {

    const  { short_description, travel_time, totalVisitorsPerYear, seasonality, average_cost, location, tourists_spot_name, img: [image, image2, image3], country_name, _id } = item;

    return (
        <div  data-aos="fade-down" data-aos-duration="1000"  className="shadow-2xl rounded-3xl mb-6">
            <div className="h-[350px]">
                <img className="h-[350px] rounded-t-3xl w-full" src={image} alt="" />
            </div>
            <div>
                <div className="border-b border-pmColor lg:space-y-0 space-y-2 flex lg:flex-row flex-col justify-center items-center">
                    <span className="text-center px-10 lg:mt-0 mt-3 flex justify-center items-center "><FaLocationDot className="text-pmColor mr-1" /> <span className="text-black text-opacity-70 text-sm font-heebo font-medium">{country_name}</span></span>
                    <span className="text-center px-10 py-2 border-r border-l text-nowrap border-pmColor flex justify-center items-center"><FaCalendarAlt className="text-pmColor mr-1" /><span className="text-black text-opacity-70 text-sm font-heebo font-medium">{travel_time}</span></span>
                    <span className="text-center px-10 flex lg:pb-0 pb-3 justify-center items-center "><WiDayCloudy className="text-pmColor mr-1 text-2xl" /> <span className="text-black text-opacity-70 text-sm font-heebo font-medium">{seasonality}</span></span>
                </div>
                <div className="px-6">
                <h2 className="text-center text-xl mb-2 font-nunito font-bold mt-5">{tourists_spot_name}</h2>
                    <h1 className="flex justify-center items-center gap-1 mt-5"><TbCoinTakaFilled className="text-pmColor text-3xl" /> <span className="text-2xl text-black text-opacity-80 font-nunito font-bold">{average_cost}</span></h1>
                    <span className="flex justify-center items-center gap-1 mt-2 mb-6"><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /><FaStar className="text-pmColor text-xl" /></span>
                    <h2 className="text-center text-lg mb-5 font-nunito font-semibold text-black text-opacity-60">Visitors Per Year : {totalVisitorsPerYear}</h2>
                    <Link to={`/details/${_id}`}>
                        <button className="sm:px-7 mt-5 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold rounded-xl bg-pmColor mb-5">View Details page</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default packCard;