import About from "../components/HomeComponents/About";
import Banner from "../components/HomeComponents/Banner/Banner";
import OurServices from "../components/HomeComponents/OurServices";
import TopNav from "../components/TopNav";


const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Banner></Banner>
            <About></About>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;