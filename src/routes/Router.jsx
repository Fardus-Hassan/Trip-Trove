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
import Details from "../pages/Details";
import UpdataData from "../pages/UpdataData";
import Error from "../pages/Error";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error></Error>,
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
                path:"/all-tourists-spots",
                element:<AllTouristsSpot></AllTouristsSpot>
            },
            {
                path:"/tourist-spot/:id",
                element: <Details></Details>
            },
            {
                path:"/add-tourists-spot",
                element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
            },
            {
                path:"/my-list",
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/touristSpots')
            },
            {
                path:"/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:"/update-data/:id",
                element: <PrivateRoute><UpdataData></UpdataData></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/touristSpots/${params.id}`)
            },
            {
                path:"/details",
                element: <PrivateRoute><Details></Details></PrivateRoute>
            }

        ],
    },
]);



export default Router;