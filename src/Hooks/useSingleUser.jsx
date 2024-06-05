import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecqure from "./Axios/useAxiosSecqure";
import { AuthContext } from "../AuthProvider/AuthProdiver";

export default function useSingeUser() {
  const axiosSecqure = useAxiosSecqure();
  const { user,loading } = useContext(AuthContext);

  const {  data: SingleUser = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return [];
      }
      const res = await axiosSecqure.get(`/user/${user?.email}`);
      return res.data;
    },
    enabled: !loading && !!user?.email, 
  });

  return [SingleUser];
}
