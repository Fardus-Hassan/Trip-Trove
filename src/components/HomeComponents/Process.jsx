import SectionHeading from "../../utility/SectionHeading";
import SectionTitle from "../../utility/SectionTitle";
import { TbWorld } from "react-icons/tb";
import { TbCoinTaka } from "react-icons/tb";
import { FaPlane } from "react-icons/fa";

const Process = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto mb-10 sm:mb-[100px]">
            <div className="text-center">
                <SectionHeading>PROCESS</SectionHeading>
                <SectionTitle>3 Easy Steps</SectionTitle>
            </div>
            <div className="mt-24 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                <div className="border border-pmColor border-solid text-center p-5 relative">
                    <span className="bg-pmColor inline-block p-4 absolute top-[0] left-[50%] translate-y-[-60%] translate-x-[-50%] text-white text-7xl rounded-full">
                        <TbWorld />
                    </span>
                    <h3 className="text-black text-center mt-10 text-opacity-90 font-nunito text-xl my-3 font-semibold">Choose A Destination</h3>
                    <div className="my-5">
                        <span className="block w-20 h-[1px] bg-pmColor mx-auto mb-1"></span>
                        <span className="block w-40 h-[1px] bg-pmColor mx-auto"></span>
                    </div>
                    <p className="text-base text-center text-black text-opacity-50 font-heebo font-bold">How about we imagine traveling to the breathtaking landscapes of Iceland? Or perhaps you have a specific type of destination in mind?</p>
                </div>
                <div className="border sm:mt-0 mt-14 border-pmColor border-solid text-center p-5 relative">
                    <span className="bg-pmColor inline-block p-4 absolute top-[0] left-[50%] translate-y-[-60%] translate-x-[-50%] text-white text-7xl rounded-full">
                        <TbCoinTaka />
                    </span>
                    <h3 className="text-black text-center mt-10 text-opacity-90 font-nunito text-xl my-3 font-semibold">Pay Online</h3>
                    <div className="my-5">
                        <span className="block w-20 h-[1px] bg-pmColor mx-auto mb-1"></span>
                        <span className="block w-40 h-[1px] bg-pmColor mx-auto"></span>
                    </div>
                    <p className="text-base text-center text-black text-opacity-50 font-heebo font-bold">
                        Securely pay for your purchases online for a hassle-free and convenient shopping experience anytime, anywhere.</p>
                </div>
                <div className="border border-pmColor lg:mt-0 mt-14 border-solid text-center p-5 relative">
                    <span className="bg-pmColor inline-block p-4 absolute top-[0] left-[50%] translate-y-[-60%] translate-x-[-50%] text-white text-7xl rounded-full">
                        <FaPlane />
                    </span>
                    <h3 className="text-black text-center mt-10 text-opacity-90 font-nunito text-xl my-3 font-semibold">Fly Today</h3>
                    <div className="my-5">
                        <span className="block w-20 h-[1px] bg-pmColor mx-auto mb-1"></span>
                        <span className="block w-40 h-[1px] bg-pmColor mx-auto"></span>
                    </div>
                    <p className="text-base text-center text-black text-opacity-50 font-heebo font-bold">Fly today to your dream destination and make memories with seamless travel arrangements and exciting adventures awaiting you!</p>
                </div>
            </div>
        </div>
    );
};

export default Process;