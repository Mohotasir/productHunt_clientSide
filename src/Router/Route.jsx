
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutUI from "../Layout/LayoutUI";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Register/Signup";
import Error from "../Pages/ErrorPage/Error";
import Allproducts from "../Pages/Allproducts/Allproducts";
import Home from "../Pages/HOME/Home";
import ProductDetails from "../Pages/HOME/ProductDetails/ProductDetails";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Myprofile from "../Pages/UserDashBoard/myProfile/Myprofile";
import MyProduct from "../Pages/UserDashBoard/myProuct/MyProduct";
import AddProduct from "../Pages/UserDashBoard/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../Pages/UserDashBoard/myProuct/UpdateProduct";

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
        },
        {
            path: "/allproducts",
            element: <Allproducts></Allproducts>
        },
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/porductdetails",
          element:<ProductDetails></ProductDetails>
        }
      ]
    },
    {
      path:"/dashboard",
      element:<DashBoardLayout></DashBoardLayout>,
      children:[
         {
           path:"/dashboard/myprofile",
           element:<Myprofile></Myprofile>
         },
         {
          path: "/dashboard/myproduct",
          element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute> 
         },
         {
          path: "/dashboard/addproduct",
          element:<AddProduct></AddProduct>
         },
         {
          path: "/dashboard/update/:id",
          element: <UpdateProduct></UpdateProduct>
         }
      ]
    }
  ]);