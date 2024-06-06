import React from "react";
import { MdDeleteForever } from "react-icons/md";
import useProducts from "../../../Hooks/AllProducts/useProducts";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";

export default function ProductReview() {
  const axiosSecqure = useAxiosSecqure();
  const [products, refetch] = useProducts();
  const handleFeature = (id) => {
    axiosSecqure
      .patch(`/product/${id}`, { featured: "featured" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          swal({
            title: "Success!",
            text: `Thsi is now Featured`,
            icon: "success",
            button: "ok",
          });
        }
      });
  };
  const handleStatus = (id) => {
    axiosSecqure.patch(`/product/${id}`, { status: "accepted" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        swal({
          title: "Success!",
          text: `Moderator accepted this product`,
          icon: "success",
          button: "ok",
        });
      }
    });
  };
  const handleReject = (id) => {
    axiosSecqure.patch(`/product/${id}`, { status: "rejected" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        swal({
          title: "OPPPPS!!",
          text: `Moderator reject this product`,
          icon: "warning",
          button: "ok",
        });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto max-w-screen-lg my-12 mx-auto">
        <table className="table border">
          {/* head */}
          <thead>
            <tr className="font-semibold text-[14px]">
              <th></th>
              <th> Product Name</th>
              <th>View Details</th>
              <th>Make Featured</th>
              <th>Status</th>
              <th>Rejected</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr className={`${product.status === "rejected" && "bg-red-50"}`}>
                <th>{index + 1}</th>
                <td className="font-semibold">{product.productName}</td>
                <td>
                  <Link
                    to={`/productdetails/${product._id}`}
                    className="btn btn-sm bg-blue-50"
                  >
                    View Details
                  </Link>
                </td>
                <td>
                  <p
                    onClick={() => handleFeature(product._id)}
                    className="btn btn-sm bg-blue-100"
                    disabled ={product.featured === 'reported' || product.status === 'rejected'}
                  >
                    {product.featured === "featured" ? (
                      <span className="flex justify-center items-center gap-2">
                        <span className="text-xl">
                          <IoMdCheckmarkCircleOutline />
                        </span>
                        Featured
                      </span>
                    ) : product.featured === "reported" ? (
                      "Reported"
                    ) : (
                      "Make Featured"
                    )}
                  </p>
                </td>
                <td>
                  <button
                    disabled={
                      product.status === "accepted" ||
                      product.status === "rejected"
                    }
                    onClick={() => handleStatus(product._id)}
                    className={`btn btn-sm bg-blue-200`}
                  >
                    {product.status}
                  </button>
                </td>
                <td>
                  <button
                    disabled={
                      product.status === "accepted" ||
                      product.status === "rejected"
                    }
                    onClick={() => handleReject(product._id)}
                    className="btn btn-sm  text-red-600  bg-red-200 hover:bg-red-400"
                  >
                    {product.status === "rejected" ? (
                      "rejected"
                    ) : (
                      <MdDeleteForever />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
