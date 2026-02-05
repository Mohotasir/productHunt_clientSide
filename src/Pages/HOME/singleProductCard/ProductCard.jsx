import { useContext, useState, useEffect } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { LiaDotCircleSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";
import useAxiosSecqure from "../../../Hooks/Axios/useAxiosSecqure";
import swal from "sweetalert";

export default function ProductCard({ product, refetch }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [upvoteCount, setUpvoteCount] = useState(product.upvoteCount);
  const [disabled, setDisabled] = useState(false);
  const axiosSecqure = useAxiosSecqure();
  useEffect(() => {
    if (user && product.useremail === user.email) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user, product.useremail]);
  const handleVote = (id) => {
    if (user) {
      const userEmail = user.email;
      axiosSecqure
        .patch(`/product/${id}/vote`, { userEmail })
        .then((response) => {
          refetch();
          setUpvoteCount(upvoteCount + 1);
          if (response.data.success) {
            swal({
              title: "Success!",
              text: "Your vote has been counted.",
              icon: "success",
              button: "OK",
            });
          } else {
            swal({
              title: "Error!",
              text: "An error occurred while submitting your vote.",
              icon: "error",
              button: "OK",
            });
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            swal({
              title: "Oops!",
              text: "You have already voted.",
              icon: "warning",
              button: "OK",
            });
          } else {
            swal({
              title: "Error!",
              text: "An error occurred while submitting your vote.",
              icon: "error",
              button: "OK",
            });
          }
        });
    } else {
      navigate("/login");
    }
  };
  console.log(product)
  return (
    <div className="border mulish flex items-center justify-between px-6 py-3 rounded-sm border-gray-100 dark:border-gray-900 hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors duration-300 delay-100">
      <div className="flex w-full flex-col md:flex-row gap-3  md:items-center lg:w-10/12">
        <div className="flex justify-between  ">
          <img
            className="w-16  md:w-[80px] h-12 md:h-[70px] rounded-md"
            src={product.productImage}
            alt={product.productName}
          />
          <div className="md:hidden votebtn text-right ">
            <button
              onClick={() => handleVote(product._id)}
              disabled={disabled}
              className="btn bg-white outline-none dark:border-none dark:bg-gradient-to-r from-indigo-400 to-purple-500"
            >
              <BiSolidUpArrow />
              {product.upvoteCount}
            </button>
          </div>
        </div>

        <div>
          <Link
            to={`/productdetails/${product._id}`}
            className="font-semibold hover:text-blue-500 hover:underline"
          >
            {product.productName}
          </Link>
          <p className="font-light text-[15px] text-gray-700">
            {product.porductDescription}
          </p>
          <div className="flex gap-4 text-sm">       
            { product.tags && product.tags.map((t, index) => (
              <p
                key={index}
                className="text-xs flex gap-2 justify-center items-center font-semibold text-gray-500 hover:underline"
              >
                <LiaDotCircleSolid />
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className=" hidden md:flex votebtn text-right lg:w-2/12">
        <button
          onClick={() => handleVote(product._id)}
          disabled={disabled}
          className="btn bg-white outline-none dark:border-none  dark:bg-gradient-to-r from-indigo-400 to-purple-500 "
        >
          <BiSolidUpArrow />
          {product.upvoteCount}
        </button>
      </div>
    </div>
  );
}
