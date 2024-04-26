import About from "../components/HomeComponents/About";
import Banner from "../components/HomeComponents/Banner/Banner";
import TopNav from "../components/TopNav";


const Home = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;