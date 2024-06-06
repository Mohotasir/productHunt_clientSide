import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

export default function LayoutUI() {
  return (
    <div>
        <div className="h-[72px]">
            <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        <div>
           <Footer></Footer>
        </div>
    </div>
  )
}
