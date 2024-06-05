
import { Link } from "react-router-dom";
import useSingeUser from "../../../Hooks/useSingleUser";

export default function Myprofile() {
   const [SingleUser] = useSingeUser();
  // useEffect(() => {
  //   if (user?.email && !loading) {
  //     axiosSecqure
  //       .get(`/user/${user?.email}`)
  //       .then((res) => {
  //         setSingleUser(res.data);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching user:", err);
  //       });
        
  //   }
    
  // }, [user]);
  //console.log(SingleUser);
  return (
    <div className="flex h-full w-full  items-center">
      {SingleUser && (
        <div className="flex flex-col gap-8 justify-between items-center max-w-screen-lg mx-auto border border-r-gray-50 shadow-md rounded-lg p-16 ">
          <div className="flex gap-4 items-center">
            <div className="">
              <img
                className="w-36 h-36 p-1 border-2 border-blue-200 rounded-full"
                src={SingleUser.photoURL}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">{SingleUser.name}</h1>
              <h1 className="text-xl text-gray-700">{SingleUser.email}</h1>
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
