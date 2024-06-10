import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProdiver";
 const axioxSecqure = axios.create(
    {
        baseURL: 'https://y-nine-red.vercel.app'
    }
)
export default function useAxiosSecqure() {
    const navigate = useNavigate()
    const {logOut} = useContext(AuthContext)
    axioxSecqure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
        return config;
    },function(error){
        return Promise.reject(error);
    })
    axioxSecqure.interceptors.response.use(function(response){
        return response;
    },async(error)=>{
        const status = error.response.status;
        console.log('status error in the interceptor', status)
        if(status === 401 || status === 403){
            await logOut();
             navigate('/login')
        }
        return Promise.reject(error)
    })
    return axioxSecqure;
}
