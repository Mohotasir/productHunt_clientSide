import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";
import { TagsInput } from "react-tag-input-component";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
export default function UpdateProduct() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const { user } = useContext(AuthContext);
  const id = useParams();
  const axiosPublic = useAxiosPublic()
  useEffect(() => {
       axiosPublic.get(`/product/${id}`).then((res) => {
      console.log(res)
      setData(res.data);
    });
  }, [id]);
   console.log(data)
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
  }
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
            Update
          </button>
        </form>
      ) : (
        <p className="text-2xl text-center">Loading.......</p>
      )}
    </div>
  );
}
