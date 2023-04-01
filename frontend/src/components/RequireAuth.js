import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
const RequireAuth = ({ allowedRoles,user }) => {
    const auth = user?.isAdmin;
    const location = useLocation();
    return auth !== undefined && auth === allowedRoles || auth === true ? (
        <Outlet />
    ) : auth == false ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};
export default connect(mapStateToProps, {})(RequireAuth);
