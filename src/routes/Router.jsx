import { createBrowserRouter, } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";


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
            },
            {
                path:"/all-tourists-sports",
                element:<AllTouristsSpot></AllTouristsSpot>
            },
            {
                path:"/tourist-spot/:id",
                element: <h1>Details</h1>
            },
            {
                path:"/add-tourists-sport/",
                element:<AddTouristsSpot></AddTouristsSpot>
            },
            {
                path:"my-list",
                element: <MyList></MyList>
            },
            {
                path:"/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }

        ],
    },
]);



export default Router;