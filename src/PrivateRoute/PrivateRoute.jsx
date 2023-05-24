import { useContext } from "react";
import { authContextData } from "../SharedContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContextData)
    const location = useLocation()

    if (loading) {
        return <div className="min-h-[90vh] flex justify-center items-center"><Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /> </div>
    }
    if (!user) {
        return <Navigate to='/signin' state={location}></Navigate>
    }
    return children
};

export default PrivateRoute;