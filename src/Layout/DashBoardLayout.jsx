import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ImCart } from "react-icons/im";
import { FaHome } from "react-icons/fa";
export default function DashBoardLayout() {
  return (
    <div className="flex gap-4">
      <div className="lg:w-2/12 bgprimary min-h-screen ">
        <div className="ml-6 pt-12 text-xl">
            <h1 className="font-semibold poppin subclr"> DASHBOARD</h1>
        </div>
        <ul className="flex flex-col gap-6 lg:pt-24  ml-6  ">
          <li className="w-full ">
            <NavLink
              className="flex items-center  gap-2"
              to="/dashboard/myprofile"
              style={({ isActive }) => {
                return {
                  color: isActive && " blue",
                };
              }}
            >
              <span className="text-2xl">
                <CgProfile />
              </span>{" "}
              My Profile
            </NavLink>
          </li>
          <li className="w-full   ">
            <NavLink
              className="flex items-center  gap-2"
              to="/dashboard/addproduct"
              style={({ isActive }) => {
                return {
                  color: isActive && " blue",
                };
              }}
            >
              <span className="text-2xl">
                <IoMdAddCircleOutline />
              </span>{" "}
              Add Product
            </NavLink>
          </li>
          <li className="w-full   ">
            <NavLink
              className="flex items-center  gap-2"
              to="/dashboard/myproduct"
              style={({ isActive }) => {
                return {
                  color: isActive && " blue",
                };
              }}
            >
              <span className="text-2xl">
                <MdProductionQuantityLimits />
              </span>{" "}
              My Product
            </NavLink>
          </li>
        </ul>
        {/*------------------------- divider--------------------------------- */}
        <div className="divider px-6"></div>
        <ul className="flex flex-col gap-6 lg:pt-12  ml-6  ">
          <li>
            <NavLink
            className="flex items-center  gap-2"
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive && "#5DADE2",
                };
              }}
            >
             <span className="text-2xl"><FaHome></FaHome></span> Home
            </NavLink>
          </li>
          <li>
            <NavLink
            className="flex items-center  gap-2"
              to="/allproducts"
              style={({ isActive }) => {
                return {
                  color: isActive && "#5DADE2",
                };
              }}
            >
            <span className="text-2xl"><ImCart /> </span> Products
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
