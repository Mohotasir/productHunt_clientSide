import axios from "axios"
const axiosPublic = axios.create({
    baseURL : "https://y-nine-red.vercel.app"
})
export default function useAxiosPublic() {
  return axiosPublic;
}
