import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../Axios/useAxiosPublic";




export default function useProducts() {
    const axiosPublic = useAxiosPublic();
   const {data : products = []} = useQuery({
    queryKey: ['products'],
    queryFn : async()=>{
        const res = await axiosPublic.get(`/products`);
        return res.data;
    }

   })
   return [products];
}
