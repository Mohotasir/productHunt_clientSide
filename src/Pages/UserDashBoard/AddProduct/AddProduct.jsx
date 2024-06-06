import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export default function AddProduct() {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [selected, setSelected] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form");
    const form = e.target;
    const productName = form.name.value;
    const productImage = form.image.value;
    const porductDescription = form.des.value;
    const link = form.links.value;
    const tags = selected;
    const time = new Date().toLocaleString();
    const status = "pending";
    const upvoteCount = 0;
    const featured = " ";
    const username = user.displayName;
    const useremail = user.email;
    const userimage = user.photoURL;
    const formData = {
      productName,
      productImage,
      porductDescription,
      link,
      tags,
      featured,
      time,
      status,
      upvoteCount,
      username,
      useremail,
      userimage,
    };
    axiosPublic.post("/products", formData)
    .then((res) => {
      form.reset()
      if (res.data.insertedId) {
        swal({
          title: "Successfull !",
          text: "Added post successfully",
          icon: "success",
          button: "Ok",
        });
      }
      
    })
    .then(
        navigate("/dashboard/myproduct")
    );
  };

  return (
    <div className="max-w-screen-md mx-auto border border-r-gray-50 p-8 rounded-lg mt-6">
      <div></div>
      {user ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="">
              <label className="text-sm" htmlFor="name">
                Product name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                type="text"
                name="name"
                id="name"
                placeholder="product name.."
                required
              />
            </div>
            <div className="">
              <label className="text-sm" htmlFor="image">
                Product image
              </label>
              <input
                required
                className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                type="text"
                name="image"
                id="image"
                placeholder="product img URL.."
              />
            </div>
          </div>
          <label className="text-sm" htmlFor="des">
            Description
          </label>
          <textarea
            required
            placeholder="product description.."
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
            name="des"
            id="des"
            rows="2"
            cols="50"
          ></textarea>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="username">
                My Name
              </label>
              <input
                required
                className="appearance-none border rounded w-full cursor-not-allowed py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                disabled
                defaultValue={user.displayName}
                type="text"
                name="username"
                id=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="userphoto">
                My Image
              </label>
              <input
                required
                className="appearance-none border cursor-not-allowed rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                disabled
                defaultValue={user.photoURL}
                type="text"
                name="userphoto"
                id=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm" htmlFor="useremail">
                My Email
              </label>
              <input
                required
                className="appearance-none border cursor-not-allowed rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                disabled
                defaultValue={user.email}
                type="email"
                name="useremail"
                id=""
              />
            </div>
          </div>

          <div>
            <h1 className="text-sm mb-2">Add Tags</h1>
            <TagsInput
              value={selected}
              onChange={setSelected}
              name="fruits"
              placeHolder="enter tags"
            />
            <em className=" text-blue-200">press enter to add new tag</em>
          </div>
          <label className="text-sm" htmlFor="links">
            External link
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
            placeholder="add link.."
            type="text"
            name="links"
            id=""
          />
          <button
            className="bgprimary btn font-semibold hover:bg-blue-200"
            type="submit"
          >
            Add Product
          </button>
        </form>
      ) : (
        <p className="text-2xl text-center">Loading.......</p>
      )}
    </div>
  );
}
