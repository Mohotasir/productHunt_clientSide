import { useQuery } from "@tanstack/react-query";
import useAxiosSecqure from "../Axios/useAxiosSecqure";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProdiver";

export default function useSpecificProducts() {
  const axiosSecqure = useAxiosSecqure();
  const { user,loading } = useContext(AuthContext);

  const { refetch, data: myproducts = [] } = useQuery({
    queryKey: ["myproducts", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const res = await axiosSecqure.get(`/products/${user?.email}`);
      return res.data;
    },
    enabled: !loading && !!user?.email, 
  });

  return [myproducts, refetch];
}
