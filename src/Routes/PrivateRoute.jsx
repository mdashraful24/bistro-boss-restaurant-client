// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext);
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        return children;
    }

    // return <Navigate state={location.pathname} to={'/login'}></Navigate>
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;