import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

export default function LayoutUI() {
  return (
    <div className=" mx-auto bg-[var(--bg)] text-[var(--text-primary)] dark:bg-[var(--hero-gradient-indigo)] dark:text-[var(--text-secondary)]">
        <div className="h-[88px]">
            <Navbar></Navbar>
        </div>
        <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
        </div>

        <div>
           <Footer></Footer>
        </div>
    </div>
  )
}
