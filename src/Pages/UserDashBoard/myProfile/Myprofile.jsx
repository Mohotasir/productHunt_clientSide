import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";
import { Link } from "react-router-dom";

export default function Myprofile() {
  const [userInfo, setUserInfo] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    if (user) {
      console.log(user.displayName);
      axiosPublic.get(`/users?email=${user.email}`).then((res) => {
        setUserInfo(res.data);
      });
    }
  }, [user]);
  return (
    <div className="flex h-full w-full  items-center">
      {user &&
        userInfo.map((usr) => (
            <div className="flex flex-col gap-8 justify-between items-center max-w-screen-lg mx-auto border border-r-gray-50 shadow-md rounded-lg p-16 ">
              <div className="flex gap-4 items-center">
                <div className="">
                  <img
                    className="w-36 h-36 p-1 border-2 border-blue-200 rounded-full"
                    src={usr.photoURL}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">{usr.name}</h1>
                  <h1 className="text-xl text-gray-700">{usr.email}</h1>
                </div>
              </div>
              <div></div>
              <div className="text-center">
                <p className="text-lg text-gray-500 font-semibold">
                  Subscribe to Get Membership
                </p>
                <Link className="btn my-2 font-bold text-xl bg-blue-300">
                  $<span>300</span>{" "}
                </Link>
              </div>
            </div>
         
        ))}
    </div>
  );
}
