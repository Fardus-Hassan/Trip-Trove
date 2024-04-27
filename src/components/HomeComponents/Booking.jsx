import SectionHeading from "../../utility/SectionHeading";


const Booking = () => {
    return (
        <div className="bg-img relative w-[95%] mx-auto rounded-3xl mb-10 sm:mb-[100px]">


            <div className="flex xl:flex-row bg-black bg-opacity-50 rounded-3xl flex-col justify-center p-8 lg:p-20 lg:py-36 items-center gap-10">
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
                <form className="xl:w-[40%] w-full">
                    <h1 className="text-white xl:text-left text-center text-[32px] sm:text-[40px] font-nunito font-bold mb-5">Book A Tour</h1>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="name" type="text"
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Full Name
                            </label>
                            {/* {errors.email && <span className="text-xs text-red-500">This Email field is required</span>} */}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="email" type="email"
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Email
                            </label>
                            {/* {errors.email && <span className="text-xs text-red-500">This Email field is required</span>} */}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-10 sm:mb-5">
                            <input
                                name="des" type="text"
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Destination
                            </label>
                            {/* {errors.email && <span className="text-xs text-red-500">This Email field is required</span>} */}
                        </div>
                        <div className="relative w-full h-10 mb-5">
                            <input
                                name="d&t" type="text"
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Date & Time
                            </label>
                            {/* {errors.email && <span className="text-xs text-red-500">This Email field is required</span>} */}
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center gap-5">
                        <div className="relative w-full h-32 mb-5">
                            <textarea
                                name="message" type="text"
                                className="peer w-full h-full bg-transparent text-white font-inter font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-pmColor"
                                placeholder=" " /><label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-pmColor leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-pmColor transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-pmColor peer-focus:text-pmColor before:border-blue-gray-200 peer-focus:before:!border-pmColor after:border-pmColor peer-focus:after:!border-pmColor">Message
                            </label>
                            {/* {errors.email && <span className="text-xs text-red-500">This Email field is required</span>} */}
                        </div>
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