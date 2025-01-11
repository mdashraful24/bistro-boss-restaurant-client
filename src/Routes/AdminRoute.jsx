import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading></Loading>;
    }

    if (user && user?.email && isAdmin) {
        return children;
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    // return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default AdminRoute;