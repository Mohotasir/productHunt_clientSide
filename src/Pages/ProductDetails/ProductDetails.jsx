import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/Axios/useAxiosPublic";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

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
            {/* {product.tags.map((t, index) => (
              <p
                key={index}
                className="text-xs flex gap-2 justify-center items-center font-semibold text-gray-500 hover:underline"
              >
                {t}
              </p>
            ))} */}
          </div>
          <div className="flex flex-col gap-2">
            <p className=" popin bg-blue-100  btn rounded-lg font-extrabold">
              UPVOTE{" "}
              <span className=" font-bold">{product.upvoteCount}</span>
            </p>
            <a
              className="btn popin btn-outline  text-blue-800 font-bold  hover:bg-blue-800"
              href={product.links}
            >
              Visit Site
            </a>
            <p className=" font-bold bg-red-400 btn hover:bg-red-600">
              Report
            </p>
          </div>
        </div>
          <div>
               <div>
                   <form  className="flex flex-col gap-2 bg-gray-50">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="" />
                      <label htmlFor="Image">Profile Image</label>
                      <input type="text" name="Image" id="" />
                      <textarea name="" id=""></textarea>
                      <label htmlFor="rating"></label>
                      <input type="text" name="rating" id="" />
                      <button type="submit">Review</button>
                   </form>
               </div>
          </div>
      </div>
    </div>
  );
}
