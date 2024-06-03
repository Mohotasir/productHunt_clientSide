
import {
    createBrowserRouter,
  } from "react-router-dom";
import LayoutUI from "../Layout/LayoutUI";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutUI></LayoutUI>,
      children:[
        
      ]
    },
  ]);