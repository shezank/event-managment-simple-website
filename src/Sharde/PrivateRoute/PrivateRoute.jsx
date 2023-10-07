import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Loading/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
       return <Loading></Loading>
    }
   else if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;