import React from "react";
import useProducts from "../../../Hooks/AllProducts/useProducts";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";

export default function ReportedContent() {
  const [products, refetch] = useProducts();
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
      axiosSecqure.delete(`product/${_id}`)
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
    <div>
      <div className="overflow-x-auto max-w-screen-lg mx-auto mt-8 md:mt-24">
        <table className="table border shadow-md">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>View Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              (product, index) =>
                product.featured === "reported" && (
                  <tr className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>{product.productName}</td>
                    <td>
                      <Link
                        to={`/productdetails/${product._id}`}
                        className="btn btn-sm bg-blue-50"
                      >
                        View Details
                      </Link>
                    </td>
                    <td>
                      <p onClick={()=>handleDelete(product._id)} className="btn btn-sm bg-red-300">Delete</p>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
