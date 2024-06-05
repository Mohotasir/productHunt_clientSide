import { useQuery } from "@tanstack/react-query";
import useAxiosSecqure from "../Axios/useAxiosSecqure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProdiver";

export default function useSpecificProducts() {
  const axiosSecqure = useAxiosSecqure();
  const { user } = useContext(AuthContext);

  const { refetch, data: myproducts = [] } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const res = await axiosSecqure.get(`/products?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email, 
  });

  return [myproducts, refetch];
}
