import useSpecificProducts from "../../../Hooks/AllProducts/useSpecificProducts";
import swal from "sweetalert";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import { Link } from "react-router-dom";

export default function MyProduct() {
  const [myproducts, refetch] = useSpecificProducts();
  const axiosSecqure = useAxiosSecqure();
  const handleDelete = async (_id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (willDelete) {
      axiosSecqure
        .delete(`products/${_id}`)
        .then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            swal("Your data has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Error!", "Failed to delete the post.", "error");
          }
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
          swal("Error!", "Failed to delete the post.", "error");
        });
    }
  };
  

  return (
    <div className="max-w-screen-lg mx-auto my-12 border p-3 rounded-md">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-base bg-blue-50">
              <th>Index</th>
              <th>Product Name</th>
              <th>Vote</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {myproducts.map((p, index) => (
              <tr key={p._id}>
                <th>{index + 1}</th>
                <td className="font-semibold">{p.productName}</td>
                <td>{p.upvoteCount}</td>
                <td>
                  <p className="btn btn-xs"> {p.status}</p>
                </td>
                <td>
                  <Link
                    to={`/dashboard/update/${p._id}`}
                    className="btn btn-xs bg-blue-100"
                  >
                    Update
                  </Link>
                </td>
                <td>
                  <p
                    onClick={() => handleDelete(p._id)}
                    className="btn btn-xs bg-red-300"
                  >
                    Delete
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
