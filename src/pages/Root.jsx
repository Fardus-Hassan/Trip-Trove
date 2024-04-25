import Navigation from "../components/HomeComponents/Navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet />
        </div>
    );
};

export default Root;