
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutUI from "../Layout/LayoutUI";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Register/Signup";
import Error from "../Pages/ErrorPage/Error";
import Allproducts from "../Pages/Allproducts/Allproducts";
import Home from "../Pages/HOME/Home";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Myprofile from "../Pages/UserDashBoard/myProfile/Myprofile";
import MyProduct from "../Pages/UserDashBoard/myProuct/MyProduct";
import AddProduct from "../Pages/UserDashBoard/AddProduct/AddProduct";
import PrivateRoute from "./PrivateRoute";
import UpdateProduct from "../Pages/UserDashBoard/myProuct/UpdateProduct";
import Statistics from "../Pages/Admin/Statistics/Statistics";
import ManageUser from "../Pages/Admin/Mangauser/ManageUser";
import ManageCupon from "../Pages/Admin/ManageCupon/ManageCupon";
import ProductReview from "../Pages/Moderator/productReview/ProductReview";
import ReportedContent from "../Pages/Moderator/ReportedContent/ReportedContent";
import Payment from "../Pages/UserDashBoard/Payment/Payment";

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
          path:"/productdetails/:id",
          element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute> 
        }
      ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute> ,
      children:[
        {
          path: "/dashboard/payment",
          element:<Payment></Payment>

        },
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
         },
         {
          path: "/dashboard/admin/statistics",
          element: <Statistics></Statistics>
         },
         {
          path: "/dashboard/admin/manageusers",
          element: <ManageUser></ManageUser>
         },
         {
          path: "/dashboard/admin/managecupon",
          element: <ManageCupon></ManageCupon>
         },
         {
           path: "/dashboard/productreview",
           element: <ProductReview></ProductReview>
         },
         {
           path: "/dashboard/reportedcontent",
           element: <ReportedContent></ReportedContent>
         }
      ]
    }
  ]);