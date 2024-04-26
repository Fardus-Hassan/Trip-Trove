import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "../../utility/SectionTitle";

const About = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto mb-10 sm:mb-[100px] flex lg:flex-row flex-col justify-between items-center gap-10">
            <div className="lg:w-[800px] md:h-[500px] h-[350px]">
                <img className="w-full h-full object-cover rounded-3xl" src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/blogiJR0K1sWVNFzinGC_l4r3IdsVLyxZfkr.jpg" alt="" />
            </div>
            <div className="lg:max-w-[50%] lg:px-0 px-6">

                <h3 className="text-pmColor text-base sm:text-lg font-nunito font-bold relative inline-block">ABOUT US
                    <span className="w-10 h-[2px] sm:h-[3px] bg-pmColor block absolute top-2 left-[120%]"></span>
                    <span className="w-16 h-[2px] sm:h-[3px] bg-pmColor block absolute bottom-2 left-[120%]"></span>
                </h3>
                <SectionTitle>Welcome to Trip <span className="text-pmColor">Trove</span></SectionTitle>
                <p className="text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold my-5">We are passionate about crafting unforgettable travel experiences. Trust us to plan your dream adventures with expertise and care.</p>
                <p className="text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold my-5">With a deep love for travel, we specialize in curating exceptional journeys. Our dedicated team ensures every detail of your trip is meticulously planned for an unforgettable experience.</p>
                <div className="grid grid-cols-2 my-7 gap-5">
                    <span className="flex justify-start items-center gap-2 text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg"/> Customized Itineraries</span>
                    <span className="flex justify-start items-center gap-2 text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg"/> Expert Guides</span>
                    <span className="flex justify-start items-center gap-2 text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg"/> 24/7 Support</span>
                    <span className="flex justify-start items-center gap-2 text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg"/> Exclusive Deals</span>
                    <span className="flex justify-start items-center gap-2 text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg"/> Multi-Destination Tours</span>
                    <span className="flex justify-start items-center gap-2 text-black text-opacity-50 text-sm sm:text-[16px] font-heebo font-semibold"><FaArrowRight className="text-pmColor text-sm sm:text-lg"/> Sustainable Tourism</span>
         
                </div>
                <button className="sm:px-7 sm:mx-0 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold mt-2 rounded-xl bg-pmColor">Read More</button>
            </div>
        </div>
    );
};

export default About;