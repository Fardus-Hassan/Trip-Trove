import About from "../components/HomeComponents/About";
import Banner from "../components/HomeComponents/Banner/Banner";
import Booking from "../components/HomeComponents/Booking";
import OurServices from "../components/HomeComponents/OurServices";
import Package from "../components/HomeComponents/Package/Package";
import PopularDestination from "../components/HomeComponents/PopularDestination";
import Process from "../components/HomeComponents/Process";
import Review from "../components/HomeComponents/reviwe/Review";
import TravelGuide from "../components/HomeComponents/TravelGuide";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <OurServices></OurServices>
            <PopularDestination></PopularDestination>
            <Package></Package>
            <Booking></Booking>
            <Process></Process>
            <TravelGuide></TravelGuide>
            <Review></Review>
        </div>
    );
};

export default Home;