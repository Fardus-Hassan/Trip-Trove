import { Link } from "react-router-dom";
import SectionHeading from "../../utility/SectionHeading";
import SectionTitle from "../../utility/SectionTitle";


const PopularDestination = () => {

    const loop = [1, 2, 3, 4, 5, 6]

    return (
        <div className="mb-10 sm:mb-[100px] w-[98%] mx-auto">
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center mb-10">
                <SectionHeading>Countries</SectionHeading>
                <SectionTitle>Popular Countries</SectionTitle>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-2">
                {
                    loop.map((item, i) => (
                        <Link  data-aos="fade-down" data-aos-duration="1000" key={i} to={`/details`}>
                            <div className="relative">
                                <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://images.pexels.com/photos/11356779/pexels-photo-11356779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                                    <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%]">
                                        <h2 className="text-center p-2 text-white w-full text-xl font-nunito font-bold">Bangladesh</h2>
                                        <p className="text-white font-heebo text-sm text-center text-opacity-80 mt-2">
                                            Bangladesh: Rich culture, dense population, vibrant cities, Sundarbans mangrove forest, historical sites, textile industry prominence.</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                {/* <div className="relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 text-white text-lg font-nunito font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Thailand</span>
                    </div>
                </div>
                <div className=" relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 text-white text-lg font-nunito font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Indonesia</span>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://images.pexels.com/photos/908055/pexels-photo-908055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 text-white text-lg font-nunito font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Malaysia</span>
                    </div>
                </div>
                <div className=" relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://images.pexels.com/photos/2796627/pexels-photo-2796627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 rounded-xl  hover:bg-opacity-30 duration-100 sm:rounded-3xl">
                        <span className="w-fit p-2 text-white text-lg font-nunito font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Vietnam</span>
                    </div>
                </div>
                <div className=" relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://images.pexels.com/photos/1534057/pexels-photo-1534057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 text-white text-lg font-nunito font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">Cambodia</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default PopularDestination;