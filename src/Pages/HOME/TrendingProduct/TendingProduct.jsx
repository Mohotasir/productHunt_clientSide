import { Link } from "react-router-dom";
import useProducts from "../../../Hooks/AllProducts/useProducts"
import ProductCard from "../singleProductCard/ProductCard";


export default function TendingProduct() {
    const [products] = useProducts();
  return (
    <div className="">
      <div className="py-2 border-b my-3">
        <h1 className="text-xl font-semibold">Trending Products</h1>
      </div>
      <div className="flex flex-col gap-2">
        {products.slice(0,9).map((product) => (
          product.status === "accepted" &&
           <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
      <div>
         <Link to="/allproducts" className="border btn bg-white border-gray-100 w-full my-2 text-gray-700">View All</Link>
      </div>
    </div>
  )
}
