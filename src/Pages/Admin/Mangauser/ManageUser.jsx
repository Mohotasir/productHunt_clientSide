import useUser from "../../../Hooks/useUser";
import { RiAdminLine } from "react-icons/ri";
import { MdAddModerator } from "react-icons/md";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import swal from "sweetalert";
import { useState } from "react";
export default function ManageUser() {
  const [users, refetch] = useUser();
  const axiosSecqure = useAxiosSecqure();
  const handleAdmin = (id, name) => {
    axiosSecqure.patch(`/user/${id}`, { role: "admin" }).then((res) => {
      console.log(res.data.modifiedCount);
      if (res.data.modifiedCount > 0) {
        refetch();
        swal({
          title: "Success!",
          text: `${name} is now Admin`,
          icon: "success",
          button: "ok",
        });
      }
    });
  };
  const handleModerator = (id, name) => {
    axiosSecqure.patch(`/user/${id}`, { role: "moderator" }).then((res) => {
      console.log(res.data.modifiedCount);
      if (res.data.modifiedCount > 0) {
        refetch();
        swal({
          title: "Success!",
          text: `${name} is now Moderator`,
          icon: "success",
          button: "ok",
        });
      }
    });
  };
  return (
    <div className="text-center max-w-screen-lg md:mt-10 mx-auto ">
      <div className="overflow-x-auto">
        <table className="table border rounded-md">
          {/* head */}
          <thead>
            <tr className="bg-blue-50 text-[14px]">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th className="text-center">Make Admin</th>
              <th className="text-center">Make Moderator</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="font-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  {user.role === "admin" ? (
                    <p className="btn btn-sm bg-blue-400 hover:bg text-white">
                      Admin
                    </p>
                  ) : (
                    <p
                      onClick={() => handleAdmin(user._id, user.name)}
                      className="text-xl btn btn-sm bg-blue-400 hover:bg-blue-200 text-white"
                    >
                      <RiAdminLine />
                    </p>
                  )}
                </td>
                <td className="text-center">
                  {user.role === "moderator" ? (
                    <p className="btn btn-sm bg-blue-100 hover:bg">
                      Moderator
                    </p>
                  ) : (
                    <p
                      onClick={() => handleModerator(user._id, user.name)}
                      className="text-xl btn btn-sm bg-blue-200 hover:bg-blue-50"
                    >
                      <MdAddModerator />
                    </p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
