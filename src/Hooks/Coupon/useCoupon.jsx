
import useAxiosSecqure from '../Axios/useAxiosSecqure';
import { useQuery } from '@tanstack/react-query';

export default function useCoupon() {
    const axiosSecqure = useAxiosSecqure();
  
    const { refetch, data: coupon = [] } = useQuery({
      queryKey: ["coupon"],
      queryFn: async () => {
        const res = await axiosSecqure.get("/coupon");
        return res.data;
      } 
    });
  
    return [coupon,refetch];
}
