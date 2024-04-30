import SectionHeading from "../../utility/SectionHeading";
import SectionTitle from "../../utility/SectionTitle";


const OurServies = () => {
    return (
        <div className="max-w-[1440px] w-[95%] mx-auto sm:mb-[100px] mb-10">
            <div data-aos="fade-down" data-aos-duration="1000" className="text-center">
                <SectionHeading>SERVICES</SectionHeading>
                <SectionTitle>Our Services</SectionTitle>
            </div>
            <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 gap-5 *:rounded-3xl">
                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-lg hover:shadow-pmColor hover:scale-105 duration-300 p-6">
                    <img className="w-20 sm:mx-0 mx-auto" src="https://i.ibb.co/Brj3wbk/tour-guide.png" alt="" />
                    <h3 className="text-black sm:text-left text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Travel Guides</h3>
                    <p className="text-base sm:text-left text-center text-black text-opacity-50 font-heebo font-bold">Expert travel guides unlock hidden gems, share local insights, and enhance your unforgettable journeys.</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-lg hover:shadow-pmColor hover:scale-105 duration-300 p-6">
                    <img className="w-20 sm:mx-0 mx-auto" src="https://i.ibb.co/tbVy9PH/management.png" alt="" />
                    <h3 className="text-black sm:text-left text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Event Management</h3>
                    <p className="text-base sm:text-left text-center text-black text-opacity-50 font-heebo font-bold">Efficient event management solutions tailored to your needs, ensuring seamless execution and memorable experiences</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-lg hover:shadow-pmColor hover:scale-105 duration-300 p-6">
                    <img className="w-20 sm:mx-0 mx-auto" src="https://i.ibb.co/0Km0bHq/24-7.png" alt="" />
                    <h2 className="text-black sm:text-left text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">24/7 Services</h2>
                    <p className="text-base sm:text-left text-center text-black text-opacity-50 font-heebo font-bold">Access round-the-clock services for seamless support and assistance whenever you need it, ensuring worry-free experiences.</p>
                </div>
                <div data-aos="fade-down" data-aos-duration="1000" className="shadow-lg hover:shadow-pmColor hover:scale-105 duration-300 p-6">
                    <img className="w-20 sm:mx-0 mx-auto" src="https://i.ibb.co/sHddQ2B/hotel.png" alt="" />
                    <h3 className="text-black sm:text-left text-center text-opacity-90 font-nunito text-xl my-3 font-semibold">Hotel Reservation</h3>
                    <p className="text-base sm:text-left text-center text-black text-opacity-50 font-heebo font-bold">Streamlined hotel reservation services for hassle-free booking, ensuring comfortable and enjoyable stays for your travels.</p>
                </div>
            </div>
        </div>
    );
};

export default OurServies;