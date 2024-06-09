import React from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import swal from "sweetalert";
import useCoupon from "../../../Hooks/Coupon/useCoupon";

export default function ManageCupon() {
  const axiosPublic = useAxiosPublic();
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
        swal("coupon added");
      }
    });
  };

  //load coupons................
  const [coupon, refetch] = useCoupon();
  console.log(coupon);
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:my-24">
      <div className="lg:w-4/12 px-2 my-2 ">
        <form onSubmit={handleForm} className="flex flex-col gap-3">
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="text"
            placeholder="enter cupon code"
            name="code"
            id="code"
          />
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="date"
            name="date"
            id=""
          />
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="text"
            placeholder="enter description"
            name="des"
            id=""
          />
          <input
            required
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-200"
            type="text"
            placeholder="enter discount amount(%)"
            name="amount"
            id=""
          />
          <button className="bg-blue-100 border-none btn " type="submit">
            Add Coupon
          </button>
        </form>
      </div>
      <div className="lg:w-8/12  p-6 lg:p-12">
        <div className="grid grid-cols-1 gap-4">
          {coupon &&
            coupon.map((cpn) => (
              <div className="border rounded-xl p-6 rou bg-blue-50 flex justify-between items-center ">
                <div>
                  <h1 className="text-4xl font-semibold">{cpn.amount}%</h1>
                  <p className="text-lg text-blue-900">{cpn.des}</p>
                  <p className="text-lg font-extrabold">
                    {" "}
                    coupon code:{" "}
                    <span className="italic font-bold text-xl">{cpn.code}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                     <p className="btn btn-xs px-3 bg-blue-100  font-semibold">Edit</p>
                     <p className="btn btn-xs px-3 bg-red-100  font-semibold">Delete</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
