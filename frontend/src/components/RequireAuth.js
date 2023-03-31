import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
const RequireAuth = (props, { allowedRoles }) => {
    const auth = props.user?.isAdmin;
    const location = useLocation();
    return auth !== undefined && auth?.roles === allowedRoles ? (
        <Outlet />
    ) : auth?.accessToken ? (
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
