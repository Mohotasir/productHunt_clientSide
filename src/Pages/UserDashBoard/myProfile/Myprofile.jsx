import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";
import { Link } from "react-router-dom";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import { useQuery } from "@tanstack/react-query";

export default function Myprofile() {
  const [userInfo, setUserInfo] = useState(null);
   const { user ,loading} = useContext(AuthContext);
   const axiosSecqure = useAxiosSecqure();
  // console.log(user,loading)
  // const {data : userInfo} = useQuery({
  //   queryKey :['user' , user?.email],
  //   enabled: !loading && !!user.email,
  //   queryFn : async ()=>{
  //      const res = axiosSecqure.get(`/users/${user?.email}`)
  //      return res.data
  //   }

  // })

  useEffect(() => {
    if (user?.email && !loading) {
      axiosSecqure
        .get(`/user/${user?.email}`)
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch((err) => {
          console.error("Error fetching user:", err);
        });
        
    }
    
  }, [user]);
  //console.log(userInfo);
  return (
    <div className="flex h-full w-full  items-center">
      {userInfo && (
        <div className="flex flex-col gap-8 justify-between items-center max-w-screen-lg mx-auto border border-r-gray-50 shadow-md rounded-lg p-16 ">
          <div className="flex gap-4 items-center">
            <div className="">
              <img
                className="w-36 h-36 p-1 border-2 border-blue-200 rounded-full"
                src={userInfo.photoURL}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{userInfo.name}</h1>
              <h1 className="text-xl text-gray-700">{userInfo.email}</h1>
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
      )}
    </div>
  );
}
