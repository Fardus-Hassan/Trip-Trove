import SectionHeading from "../../utility/SectionHeading";
import SectionTitle from "../../utility/SectionTitle";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const TravelGuide = () => {
    return (
        <div className="max-w-[1440px] mx-auto w-[95%] mb-10 sm:mb-[100px]">
            <div className="text-center">
                <SectionHeading>TRAVEL GUIDE</SectionHeading>
                <SectionTitle>Meet Our Guide</SectionTitle>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
                <div className="shadow-xl rounded-3xl pb-5">
                    <div>
                        <img className="w-full rounded-t-3xl mx-auto object-top object-cover h-[300px]" src="https://i.pinimg.com/564x/a2/15/7d/a2157d26163ca73647dd3681c84f9212.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-center text-opacity-90 font-nunito text-xl my-3 font-semibold text-black">Michael Roberts</h1>
                        <p className="text-base text-opacity-50 text-black text-center font-heebo font-semibold">Bandarban</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>
                <div className="shadow-xl rounded-3xl pb-5">
                    <div>
                        <img className="w-full rounded-t-3xl mx-auto object-top object-cover h-[300px]" src="https://i.pinimg.com/564x/43/e7/7e/43e77e4e58d137aa30cc3992fa0a7249.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-center text-opacity-90 font-nunito text-xl my-3 font-semibold text-black">Michael Roberts</h1>
                        <p className="text-base text-opacity-50 text-black text-center font-heebo font-semibold">Bandarban</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>
                <div className="shadow-xl rounded-3xl pb-5">
                    <div>
                        <img className="w-full rounded-t-3xl mx-auto object-top object-cover h-[300px]" src="https://i.pinimg.com/564x/fe/fc/9c/fefc9c6e0fe49d7ef7b05b376cc3688b.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-center text-opacity-90 font-nunito text-xl my-3 font-semibold text-black">Michael Roberts</h1>
                        <p className="text-base text-opacity-50 text-black text-center font-heebo font-semibold">Bandarban</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>
                <div className="shadow-xl rounded-3xl pb-5">
                    <div>
                        <img className="w-full rounded-t-3xl object-top object-cover mx-auto h-[300px]" src="https://i.pinimg.com/564x/5c/69/77/5c6977ad99906d07f88d6e7bf9ddb119.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-center text-opacity-90 font-nunito text-xl my-3 font-semibold text-black">Michael Roberts</h1>
                        <p className="text-base text-opacity-50 text-black text-center font-heebo font-semibold">Bandarban</p>
                    </div>
                    <div className="space-x-3 flex justify-center items-center mt-3">
                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaInstagram className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <FaFacebookF className="text-lg" />
                        </div>

                        <div className="p-2 rounded-full border border-solid border-pmColor inline-block text-pmColor">
                            <BsTwitter className="text-lg" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TravelGuide;