import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/AuthProdiver";
import swal from "sweetalert";
import useAxiosSecqure from "../../Hooks/Axios/useAxiosSecqure";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [rev, setRev] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const axiosSecqure = useAxiosSecqure();
  useEffect(() => {
    axiosPublic.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.Image.value;
    const des = form.des.value;
    const rating = form.rating.value;
    const productId = product._id;
    const formData = { name, image, des, rating, productId };
    console.log(formData);
    axiosPublic.post("/review", formData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        form.reset();
        swal({
          title: "Success!",
          text: `Review added successfully!!`,
          icon: "success",
          button: "ok",
        });
      }
    });
  };
  useEffect(() => {
    axiosPublic.get(`/review/${id}`).then((res) => {
      console.log(res.data);
      setRev(res.data);
    });
  }, [id]);
  const handleReport = (id)=>{
    axiosSecqure.patch(`/product/${id}`, { featured : 'reported' }).then((res) => {
      if (res.data.modifiedCount > 0) {
        swal({
          title: "Reported!!!!",
          text: `Your report is counted`,
          icon: "warning",
          button: "ok",
        });
      }
    });
  }
  return (
    <div className="mulish">
      <div className="p-4  text-center text-blue-600 bg-blue-50">
        <p className="text-sm">
          Details about :{" "}
          <span className="text-sm font-extrabold">{product.productName}</span>{" "}
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto my-8 px-2">
        <div className="flex justify-between items-center">
          <div className="">
            <img
              className="w-36 rounded-md mb-2"
              src={product.productImage}
              alt=""
            />

            <p className="text-2xl font-bold mulish">{product.productName}</p>
            <p className="text-xl font-light text-gray-700">
              {product.porductDescription}
            </p>
            <div className="text-sm flex gap-2 my-3 items-center font-semibold text-gray-500">
              {product.tags &&
                product.tags.map((t, index) => (
                  <p
                    key={index}
                    className="px-3 py-1 bg-blue-100 rounded-lg min-w-16"
                  >
                    # {t}
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className=" popin bg-blue-100  btn btn-sm rounded-lg font-extrabold">
              UPVOTE{" "}
              <span className=" font-bold text-xl">{product.upvoteCount}</span>
            </p>
            <a
              className="btn popin btn-outline border-blue-100 btn-sm  text-blue-800 font-bold  hover:bg-blue-800"
              href={product.link}
            >
              Visit Site
            </a>
            <p onClick={()=>handleReport(id)} className=" font-bold bg-red-200 btn btn-sm hover:bg-red-300">
              Report
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex gap-3">
          <div className="w-5/12">
            <form
              onSubmit={handleForm}
              className="flex flex-col gap-2 p-6 rounded-md bg-gray-50"
            >
              <label className="text-sm font-semibold" htmlFor="name">
                Name
              </label>
              <input
                readOnly
                defaultValue={user && user.displayName}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-100"
                type="text"
                name="name"
                id=""
              />
              <label className="text-sm font-semibold" htmlFor="Image">
                Profile Image
              </label>
              <input
                readOnly
                defaultValue={user && user.photoURL}
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-100"
                type="text"
                name="Image"
                id=""
              />
              <label className="text-sm font-semibold" htmlFor="des">
                Review
              </label>
              <textarea
                placeholder="write your review..."
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-100"
                name="des"
                id=""
              ></textarea>
              <label className="text-sm font-semibold" htmlFor="rating">
                Rating
              </label>
              <input
                placeholder="1 to 5 star ...."
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-100"
                type="text"
                name="rating"
                id=""
              />
              <button className="btn bg-blue-100" type="submit">
                Review
              </button>
            </form>
          </div>
          <div className="w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {rev.map((r) => (
                <div key={r._id} className="border rounded-md p-3">
                  <div className="flex justify-between">
                    <img className="h-12 w-12 rounded-full" src={r.image} alt="" />
                    <div className=" flex gap-2 justify-center items-center">
                       <div className="text-2xl text-yellow-300"> <MdOutlineStar /></div>
                       <span className="font-bold">{r.rating}</span>
                    </div>
                  </div>
                  <div className="my-2">
                    <h1 className="font-semibold text-sm">{r.name}</h1>
                    <h1 className="text-sm">{r.des}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
