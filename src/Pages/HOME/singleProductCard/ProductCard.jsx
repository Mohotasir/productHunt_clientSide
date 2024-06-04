import { BiSolidUpArrow } from "react-icons/bi";
import { LiaDotCircleSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <div className="border mulish flex items-center justify-between px-6 py-3 rounded-sm border-gray-100 hover:bg-gray-50 ">
      <div className="flex gap-3 justify-center items-center">
        <img className="w-10 md:w-[80px] h-10 md:h-[70px] rounded-md" src={product.productImage} alt="" />
        <div>
          <Link to="/porductdetails" className="font-semibold hover:text-blue-500 hover:underline">{product.productName}</Link>
          <p className="font-light text-[15px] text-gray-700 ">{product.description}</p>
          <div className="flex gap-4 text-sm">
            {
                product.tags.map(t=> 
                    <p key={product._id} className="text-xs flex gap-2 justify-center items-center font-semibold text-gray-500 hover:underline"><LiaDotCircleSolid />{t}</p>
                )
            }
          </div>
        </div>
      </div>
      <div className="votebtn">
        
        <p className="btn bg-white border "><BiSolidUpArrow />{product.upvoteCount}</p>
      </div>
    </div>
  );
}
