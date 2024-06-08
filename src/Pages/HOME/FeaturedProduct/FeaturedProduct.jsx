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
      <div className="py-2 border-b my-3 b">
        <h1 className="text-xl font-semibold">Featured Products</h1>
      </div>
      <div className="flex flex-col gap-2 bg-gray-50 p-2 rounded-sm">
        { products.slice(0,6).map((product) => (
          product.featured === 'featured' && product.status === 'accepted' &&
            <ProductCard key={product._id} refetch={refetch} product={product}></ProductCard>
        ))}
      </div>
      <div>
         <Link to="/allproducts" className="border btn bg-white border-gray-100 w-full my-2 text-gray-700">View All</Link>
      </div>
    </div>
  );
}
