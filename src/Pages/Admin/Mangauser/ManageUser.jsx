import useUser from "../../../Hooks/useUser";
import { RiAdminLine } from "react-icons/ri";
import { MdAddModerator } from "react-icons/md";
export default function ManageUser() {
  const [users] = useUser();
  const handleAdmin = (id)=>{

  }
  const handleModerator = (id)=>{

  }
  return (
    <div className="text-center max-w-screen-lg md:mt-10 mx-auto ">
      <div className="overflow-x-auto">
        <table className="table border rounded-md">
          {/* head */}
          <thead>
            <tr className="bg-blue-50">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Make Moderator</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <p
                    onClick={() => handleAdmin(user._id)}
                    className="text-xl btn btn-sm bg-blue-900 hover:bg-blue-700 text-white"
                  >
                    <RiAdminLine />
                  </p>
                </td>
                <td>
                  <p
                    onClick={() => handleModerator(user._id)}
                    className="text-xl btn btn-sm bg-blue-200 hover:bg-blue-50"
                  >
                    <MdAddModerator />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
