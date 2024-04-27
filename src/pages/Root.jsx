import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Foot from "../components/Foot";
import TopNav from "../components/TopNav";

const Root = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Navigation></Navigation>
            <div className="min-h-[calc(100vh-480px)]">
                <Outlet />
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Root;