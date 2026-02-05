import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import ProductCard from "../singleProductCard/ProductCard";
import useProducts from "../../../Hooks/AllProducts/useProducts";
import { Link } from "react-router-dom";

export default function FeaturedProduct() {
  //   const [products, setProducts] = useState([]);
  //   const axiosPublic = useAxiosPublic();
  //   axiosPublic.get("/products").then((res) => {
  //     setProducts(res.data);
  //   });
  const [products ,refetch] = useProducts();
  console.log(products)
  return (
    <div className="">
      <div className="py-4 border-b border-gray-100 dark:border-gray-900 mb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent  mb-2">
          Featured Products
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Discover the most special items hand-picked for you.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2 rounded-sm">
        { products.slice(0,6).map((product) => (
          product.featured === 'featured' && product.status === 'accepted' &&
            <ProductCard key={product._id} refetch={refetch} product={product}></ProductCard>
        ))}
      </div>
      <div>
         <Link to="/allproducts" className="border btn bg-white dark:bg-gradient-to-r from-indigo-400 to-purple-500 border-gray-100 dark:border-0 w-full my-2 text-gray-700 dark:text-gray-300 dark:hover:bg-slate-700">View All</Link>
      </div>
    </div>
  );
}
