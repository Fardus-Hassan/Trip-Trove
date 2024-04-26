import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Foot from "../components/Foot";

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet />
            <Foot></Foot>
        </div>
    );
};

export default Root;