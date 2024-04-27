import { createBrowserRouter, } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


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
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            }

        ],
    },
]);



export default Router;