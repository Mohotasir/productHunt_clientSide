import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecqure from "./Axios/useAxiosSecqure";
import { AuthContext } from "../AuthProvider/AuthProdiver";

export default function useUser() {
  const axiosSecqure = useAxiosSecqure();
  const { user,loading } = useContext(AuthContext);

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const res = await axiosSecqure.get(`/users`);
      return res.data;
    },
    enabled: !loading  
  });

  return [users,refetch];
}