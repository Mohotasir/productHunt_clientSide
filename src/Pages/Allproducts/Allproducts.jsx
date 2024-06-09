import { useEffect, useState } from "react";
import useProducts from "../../Hooks/AllProducts/useProducts"
import useAxiosSecqure from "../../Hooks/Axios/useAxiosSecqure"
import ProductCard from "../HOME/singleProductCard/ProductCard"


export default function Allproducts() {
 const [products] = useProducts();
  return (
    <div className="">
         <div className="text-center flex flex-col items-center justify-center bg-slate-50 py-2 min-h-20 lg:min-h-32">
              <form className=" lg:w-[800px]">
                 <input className="text-xl md:w-[60%] border rounded-l-lg outline-none p-2 md:p-3" type="text" name="search" placeholder="Search...." id="" />
                 <button className="p-3 md:text-xl rounded-r-lg bg-blue-200" type="submit">Search</button>
              </form>
         </div>
         <div className="min-h-60vh mt-12 max-w-screen-2xl  mx-8">
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-3">
             {
              products.map(product => 
                product.status === 'accepted' &&
                  <ProductCard key={product._id} product={product} ></ProductCard>
              )
             }
         </div>
         </div>
         
    </div>
  )
}
