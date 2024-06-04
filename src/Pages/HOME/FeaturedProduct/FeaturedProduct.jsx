import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic";
import ProductCard from "../singleProductCard/ProductCard";
import useProducts from "../../../Hooks/AllProducts/useProducts";

export default function FeaturedProduct() {
  //   const [products, setProducts] = useState([]);
  //   const axiosPublic = useAxiosPublic();
  //   axiosPublic.get("/products").then((res) => {
  //     setProducts(res.data);
  //   });
  const [products] = useProducts();
  console.log(products)
  return (
    <>
      <div className="py-2 border-b my-3">
        <h1 className="text-xl font-semibold">Top Products</h1>
      </div>
      <div className="flex flex-col gap-2">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </>
  );
}
