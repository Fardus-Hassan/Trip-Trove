import { createBrowserRouter, } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>Opps......404</h1>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);



export default Router;