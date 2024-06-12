import React, { useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import swal from "sweetalert";
import useCoupon from "../../../Hooks/Coupon/useCoupon";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";

export default function ManageCupon() {
  const [coupon, refetch] = useCoupon();
  const axiosSecqure = useAxiosSecqure();
  const axiosPublic = useAxiosPublic();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const code = form.code.value;
    const date = form.date.value;
    const des = form.des.value;
    const amount = form.amount.value;
    const formData = { code, date, des, amount };
    axiosPublic.post("/coupon", formData).then((res) => {
      if (res.data.insertedId) {
        form.reset();
        swal("Coupon added");
        refetch();
      }
    });
  };

  const handleEdit = (id) => {
    axiosSecqure.get(`/coupon/${id}`).then((res) => {
      setData(res.data);
      setShowModal(true);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = data._id;
    console.log(id)
    const code = form.code.value;
    const date = form.date.value;
    const des = form.des.value;
    const amount = form.amount.value;
    const formData = { code, date, des, amount };

    axiosPublic.patch(`/coupon/${id}`, formData)
      .then((res) => {
        console.log(res)
        if (res.data.modifiedCount > 0) {
          form.reset();
          swal("Coupon updated!");
          setShowModal(false);
          refetch();
        } else {
          swal("No changes were made or coupon update failed.");
        }
      })
      .catch((error) => {
        console.error("Error updating coupon:", error);
        swal("An error occurred while updating the coupon");
      });
  };

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
        .delete(`coupon/${_id}`)
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
    <div className="flex flex-col lg:flex-row gap-6 lg:my-24">
      <div className="lg:w-4/12 px-2 my-2 ">
        <form onSubmit={handleForm} className="flex flex-col gap-3">
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="text"
            placeholder="Enter coupon code"
            name="code"
            id="code"
          />
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="date"
            name="date"
            id="date"
          />
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="text"
            placeholder="Enter description"
            name="des"
            id="des"
          />
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="text"
            placeholder="Enter discount amount (%)"
            name="amount"
            id="amount"
          />
          <button className="bg-blue-100 border-none btn" type="submit">
            Add Coupon
          </button>
        </form>
      </div>
      <div className="lg:w-8/12 p-6 lg:p-12">
        <div className="grid grid-cols-1 gap-4">
          {coupon &&
            coupon.map((cpn) => (
              <div key={cpn._id} className="border rounded-xl p-6 bg-blue-50 flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-semibold">{cpn.amount}%</h1>
                  <p className="text-lg text-blue-900">{cpn.des}</p>
                  <p className="text-lg font-extrabold">
                    Coupon code: <span className="italic font-bold text-xl">{cpn.code}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <p onClick={() => handleEdit(cpn._id)} className="btn btn-xs px-3 bg-blue-100 font-semibold">
                    Edit
                  </p>
                  <p onClick={() => handleDelete(cpn._id)} className="btn btn-xs px-3 bg-red-100 font-semibold">
                    Delete
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 md:p-12 rounded-lg shadow-lg text-black">
            <form onSubmit={handleUpdate} className="flex flex-col gap-3">
              <input
                required
                defaultValue={data.code}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
                type="text"
                placeholder="Enter coupon code"
                name="code"
                id="code"
              />
              <input
                required
                defaultValue={data.date}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
                type="date"
                name="date"
                id="date"
              />
              <input
                required
                defaultValue={data.des}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
                type="text"
                placeholder="Enter description"
                name="des"
                id="des"
              />
              <input
                required
                defaultValue={data.amount}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
                type="text"
                placeholder="Enter discount amount (%)"
                name="amount"
                id="amount"
              />
              <button className="bg-blue-100 border-none btn" type="submit">
                Edit
              </button>
              <p onClick={()=>setShowModal(false)} className="hover:bg-gray-200 btn bg-white btn-sm border-none">cancel</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
