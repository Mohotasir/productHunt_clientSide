import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

export default function LayoutUI() {
  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
    </div>
  )
}
