import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logout() {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['cookie']);

    useEffect(() => {
        removeCookie('username', { path: '/' });
        removeCookie('roles', { path: '/' });
        removeCookie('accessToken', { path: '/' });
        navigate('/', { replace: true });
        window.location.reload();
    }, []);
}

export default Logout;
