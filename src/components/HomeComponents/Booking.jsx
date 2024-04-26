import SectionHeading from "../../utility/SectionHeading";


const Booking = () => {
    return (
        <div className="bg-img relative w-[95%] mx-auto rounded-3xl">


            <div className="flex xl:flex-row bg-black bg-opacity-50 rounded-3xl flex-col justify-center p-8 lg:p-20 items-center gap-10">
                <div className="xl:w-[40%] xl:text-left text-center">

                    <div className="xl:ml-24">
                        <SectionHeading>BOOKING</SectionHeading>
                    </div>


                    <h1 className="text-white text-[32px] sm:text-[40px] font-nunito font-bold">Online Booking</h1>
                    <p className="text-white font-heebo font-semibold mt-8">Experience seamless, convenient online booking for all your needs, from travel reservations to event tickets and more, at your fingertips.</p>
                    <p className="text-white font-heebo font-semibold mt-8">
                        Effortlessly book online for instant reservations, secure your spot, and enjoy a hassle-free experience every time.</p>
                    <button className="sm:px-7 xl:mx-0 mx-auto block px-5 sm:py-4 py-3 text-white font-heebo font-medium sm:font-semibold mt-8 rounded-xl bg-pmColor">Read More</button>
                </div>
                <form>
                    <h1 className="text-white xl:text-left text-center text-[32px] sm:text-[40px] font-nunito font-bold mb-5">Book A Tour</h1>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-3 mb-5">
                        <label className="input input-bordered outline-white border w-full border-pmColor text-white flex bg-transparent items-center gap-2">
                            <span className="text-nowrap lg:block hidden">Name :</span>
                            <input type="text" placeholder="Name" className="grow bg-transparent w-full block border-white outline-white" />
                        </label>
                        <label className="input input-bordered border w-full border-pmColor text-white flex bg-transparent items-center gap-2">
                            <span className="text-nowrap lg:block hidden">Email :</span>
                            <input type="email" placeholder="Email" className="grow bg-transparent w-full block" />
                        </label>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-3 mb-5">
                        <label className="input input-bordered border w-full border-pmColor text-white flex bg-transparent items-center gap-2">
                            <span className="text-nowrap lg:block hidden">Destination :</span>
                            <input type="text" placeholder="Destination" className="grow bg-transparent w-full block" />
                        </label>
                        <label className="input input-bordered border w-full border-pmColor text-white flex bg-transparent items-center gap-2">
                            <span className="text-nowrap lg:block hidden">Date & Time :</span>
                            <input type="text" placeholder="Date & Time" className="grow bg-transparent w-full block" />
                        </label>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-3 mb-5">
                        <label className="input input-bordered border w-full border-pmColor text-white flex bg-transparent items-center gap-2">
                            <span className="text-nowrap lg:block hidden">Message :</span>
                            <input type="text" placeholder="Massage" className="grow bg-transparent w-full block" />
                        </label>
                    </div>
                    <label className="input input-bordered border w-full border-pmColor text-white flex bg-pmColor bg-opacity-50 items-center gap-2">
                        <input type="Submit" value='Book Now' className="grow w-full block" />
                    </label>
                </form>
            </div>
            {/* <div className="absolute rounded-3xl w-full h-full bg-black bg-opacity-70 top-0"></div> */}
        </div>
    );
};

export default Booking;