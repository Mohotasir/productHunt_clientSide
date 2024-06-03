import { BiSolidUpArrow } from "react-icons/bi";
export default function ProductCard({ product }) {
  return (
    <div className="border mulish flex items-center justify-between px-6 py-3">
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1 className="font-semibold">{product.productName}</h1>
          <p className="font-light text-gray-500 ">{product.description}</p>
          <div className="flex gap-4 text-sm">
            {
                product.tags.map(t=> 
                    <li className="text-xs hover:underline">{t}</li>
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
