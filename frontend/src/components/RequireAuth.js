import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "~/hooks/useAuth";
import { useCookies } from 'react-cookie';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    const [cookie, setCookie] = useCookies(['cookie']);
    return (
        auth?.roles === allowedRoles 
        || cookie.roles === allowedRoles
        || cookie.roles === "true"
            ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;