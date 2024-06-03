
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutUI from "../Layout/LayoutUI";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Register/Signup";
import Error from "../Pages/ErrorPage/Error";
import Allproducts from "../Pages/Allproducts/Allproducts";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutUI></LayoutUI>,
      errorElement:<Error></Error>,
      children:[
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path:"/signup",
            element:<Signup></Signup>
        },{
            path: "/allproducts",
            element: <Allproducts></Allproducts>
        }
      ]
    },
  ]);