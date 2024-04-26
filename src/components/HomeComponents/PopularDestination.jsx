import SectionHeading from "../../utility/SectionHeading";
import SectionTitle from "../../utility/SectionTitle";


const PopularDestination = () => {
    return (
        <div className="mb-10 sm:mb-[100px] w-[98%] mx-auto">
            <div className="text-center mb-10">
                <SectionHeading>DESTINATION</SectionHeading>
                <SectionTitle>Popular Destination</SectionTitle>
            </div>
            <div className="grid lg:grid-cols-5 sm:grid-cols-4 lg:grid-rows-2 lg:h-[80vh] gap-2">
                <div className="lg:row-span-1 lg:col-span-3 sm:col-span-2 relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/1*a92GOsmtF8jaXFduhWLPgw.jpeg" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 rounded-xl bg-white text-red-400 absolute top-[5%] left-[2%]">25% off</span>
                        <span className="w-fit p-2 rounded-xl bg-white text-pmColor absolute bottom-[5%] right-[2%]">Saint
                            Martin’s Island</span>
                    </div>
                </div>
                <div className="lg:row-span-1 lg:col-span-1 sm:col-span-2 relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://ttg.com.bd/uploads/tours/plans/204_36376273530_3c9a0335f5_b-copyjpg.jpg" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 rounded-xl bg-white text-red-400 absolute top-[5%] left-[2%]">15% off</span>
                        <span className="w-fit p-2 rounded-xl bg-white text-pmColor absolute bottom-[5%] right-[2%]">
                            Bandarban</span>
                    </div>
                </div>
                <div className="lg:row-span-2 lg:col-span-1 sm:col-span-4 relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://www.naturetravelagency.com/uploads/1698823201tourism%20in%20sundarbans.jpg" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 rounded-xl bg-white text-red-400 absolute top-[5%] left-[2%]">20% off</span>
                        <span className="w-fit p-2 rounded-xl bg-white text-pmColor absolute bottom-[5%] right-[2%]">Sundarban</span>
                    </div>
                </div>
                <div className="lg:row-span-1 lg:col-span-1 sm:col-span-2 relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 rounded-xl  hover:bg-opacity-30 duration-100 sm:rounded-3xl">
                        <span className="w-fit p-2 rounded-xl bg-white text-red-400 absolute top-[5%] left-[2%]">30% off</span>
                        <span className="w-fit p-2 rounded-xl bg-white text-pmColor absolute bottom-[5%] right-[2%]">Cox’s Bazar</span>
                    </div>
                </div>
                <div className="lg:row-span-1 lg:col-span-3 sm:col-span-2 relative">
                    <img className="rounded-xl sm:rounded-3xl w-full h-full object-cover" src="https://pathfriend-bd.com/wp-content/uploads/2019/08/Rangamati-Bandarban-Coxs-Ba.jpg" alt="" />
                    <div className="w-full h-full bg-black absolute top-0 bg-opacity-50 hover:bg-opacity-30 duration-100 rounded-xl sm:rounded-3xl">
                        <span className="w-fit p-2 rounded-xl bg-white text-red-400 absolute top-[5%] left-[2%]">35% off</span>
                        <span className="w-fit p-2 rounded-xl bg-white text-pmColor absolute bottom-[5%] right-[2%]">Rangamati,</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestination;