import { useContext, useState, useEffect } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { LiaDotCircleSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProdiver";

export default function ProductCard({ product }) {
  const { user } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (user && product.useremail === user.email) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user, product.useremail]);

  return (
    <div className="border mulish flex items-center justify-between px-6 py-3 rounded-sm border-gray-100 hover:bg-gray-50">
      <div className="flex gap-3 justify-center items-center">
        <img
          className="w-10 md:w-[80px] h-10 md:h-[70px] rounded-md"
          src={product.productImage}
          alt={product.productName}
        />
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
            {product.tags.map((t, index) => (
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
      <div className="votebtn">
        <button disabled={disabled} className="btn bg-white border">
          <BiSolidUpArrow />
          {product.upvoteCount}
        </button>
      </div>
    </div>
  );
}
