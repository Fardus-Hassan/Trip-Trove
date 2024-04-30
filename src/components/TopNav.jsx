import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopNav = () => {
    return (
        <div data-aos="fade-down" data-aos-duration="1500" className="bg-black bg-opacity-90 text-white font-heebo font-medium md:flex hidden justify-between items-center gap-5 p-2">
            <div className="flex justify-center items-center gap-5">
                <div className="flex justify-center items-center gap-1">
                    <FaLocationDot className="text-lg" />
                    <span className="text-sm">Gazipur, Dhaka, Bangladesh</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <HiOutlineMailOpen className="text-lg" />
                    <span className="text-sm">webdev.fardus@gmail.com</span>
                </div>
                <div className="flex justify-center items-center gap-1">
                    <FaPhoneAlt className="text-lg" />
                    <span className="text-sm">+8801722092675</span>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2">
                <div className="p-2 rounded-full border border-solid border-white">
                    <BsTwitter className="text-lg"/>
                </div>
                <div className="p-2 rounded-full border border-solid border-white">
                    <FaFacebookF className="text-lg"/>
                </div>
                <div className="p-2 rounded-full border border-solid border-white">
                    <FaYoutube className="text-lg"/>
                </div>
                <div className="p-2 rounded-full border border-solid border-white">
                    <FaInstagram className="text-lg"/>
                </div>
               
            </div>
        </div>
    );
};

export default TopNav;