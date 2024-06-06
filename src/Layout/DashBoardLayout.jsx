import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ImCart } from "react-icons/im";
import { LiaUsersSolid } from "react-icons/lia";
import { LuTags } from "react-icons/lu";
import { PiChartBarDuotone } from "react-icons/pi";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaBars, FaHome } from "react-icons/fa";
import { useState } from "react";
import img from "../assets/lgo.png";
import useSingeUser from "../Hooks/useSingleUser";
export default function DashBoardLayout() {
  const [active, setActive] = useState(false);
  const [SingleUser] = useSingeUser();

  const isAdmin = SingleUser && SingleUser.role === "admin";
  const isModerator = SingleUser && SingleUser.role === "moderator";
  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="">
      <div className="md:hidden shadow-md mb-2 flex justify-between items-center ">
        <img className="h-12 w-24" src={img} alt="" />
        <button onClick={handleToggle} className="btn bg-blue-50 m-2">
          <FaBars></FaBars>{" "}
        </button>
      </div>
      <div className="flex gap-4">
        <div
          className={`z-10 px-4 md:px-0  md:fixed overflow-x-hidden absolute inset-y-0 left-0 transform md:flex flex-col lg:w-2/12 bgprimary min-h-screen ${
            active && "-translate-x-full"
          } md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <div className="ml-6 pt-6 md:pt-12 text-xl">
            <h1 className="font-semibold poppin subclr"> DASHBOARD</h1>
          </div>
          {isAdmin && (
            <ul className="flex flex-col gap-6 pt-12 lg:pt-24  ml-6">
              <li className="w-full">
                <NavLink
                  className="flex items-center  gap-2"
                  to="/dashboard/admin/statistics"
                  style={({ isActive }) => {
                    return {
                      color: isActive && " blue",
                    };
                  }}
                >
                  <span className="text-2xl">
                    <PiChartBarDuotone />
                  </span>{" "}
                  Statistics
                </NavLink>
              </li>
              <li className="w-full   ">
                <NavLink
                  className="flex items-center  gap-2"
                  to="/dashboard/admin/manageusers"
                  style={({ isActive }) => {
                    return {
                      color: isActive && " blue",
                    };
                  }}
                >
                  <span className="text-2xl">
                    <LiaUsersSolid />
                  </span>{" "}
                  Manage Users
                </NavLink>
              </li>
              <li className="w-full   ">
                <NavLink
                  className="flex items-center  gap-2"
                  to="/dashboard/admin/managecupon"
                  style={({ isActive }) => {
                    return {
                      color: isActive && " blue",
                    };
                  }}
                >
                  <span className="text-2xl">
                    <LuTags />
                  </span>{" "}
                  Manage Cupon
                </NavLink>
              </li>
            </ul>
          )}
          {!isAdmin && isModerator && (
            <ul className="flex flex-col gap-6 lg:pt-24  ml-6  ">
              <li className="w-full ">
                <NavLink
                  className="flex items-center  gap-2"
                  to="/dashboard/productreview"
                  style={({ isActive }) => {
                    return {
                      color: isActive && " blue",
                    };
                  }}
                >
                  <span className="text-2xl">
                  <TbBrandProducthunt />
                  </span>{" "}
                  Product Review
                </NavLink>
              </li>
              <li className="w-full   ">
                <NavLink
                  className="flex items-center  gap-2"
                  to="/dashboard/reportedcontent"
                  style={({ isActive }) => {
                    return {
                      color: isActive && " blue",
                    };
                  }}
                >
                  <span className="text-2xl">
                  <MdOutlineReportProblem />
                  </span>{" "}
                  Reported Content
                </NavLink>
              </li>
            </ul>
          )}
          {!isAdmin && !isModerator && (
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
          )}

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
                <span className="text-2xl">
                  <FaHome></FaHome>
                </span>{" "}
                Home
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
                <span className="text-2xl">
                  <ImCart />{" "}
                </span>{" "}
                Products
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 lg:ml-72">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
