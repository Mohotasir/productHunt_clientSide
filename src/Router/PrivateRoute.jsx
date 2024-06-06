import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProdiver";



const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return  <div className="w-full h-[100vh] flex items-center justify-center">
             <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
        
   
};

export default PrivateRoute;