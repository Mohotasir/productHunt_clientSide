import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/Axios/useAxiosPublic"
import ProductCard from "../singleProductCard/ProductCard";

export default function FeaturedProduct() {
    const [products ,setProducts] = useState([])
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/products')
    .then((res)=>{
         setProducts(res.data);
        
    })
  return (
    <div>
        {
            products.map( product => <ProductCard key={product._id} product={product}></ProductCard> )
        }
    </div>
  )
}
