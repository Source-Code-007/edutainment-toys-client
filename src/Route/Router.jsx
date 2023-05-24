import { createBrowserRouter } from "react-router-dom";
import LayoutOne from "../Layout/LayoutOne";
import Homepage from "../Pages/Homepage/Homepage";
import LayoutTwo from "../Layout/LayoutTwo";
import Signin from "../Pages/Signin/Signin";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Signup from "../Pages/Signup/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllToy from "../Pages/AllToy/AllToy";
import Blog from "../Pages/Blog/Blog";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutOne></LayoutOne>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/all-toy',
                element: <AllToy></AllToy>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/',
        element: <LayoutTwo></LayoutTwo>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/add-toy',
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            }
        ]
    },

])

export default Router;