import { Link,useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import useAuth from '~/hooks/useAuth';
import axios from '~/api/axios';

const LOGIN_URL = '/auth/login';

function Login() {
    const [accessToken, setAccessToken] = useCookies(['accessToken']);
    const [userame, setUseranme] = useCookies(['username']);
    const [roles, setRoles] = useCookies(['roles']);
    const { setAuth } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    function handleLogin(event) {
        event.preventDefault();
        axios
            .post(LOGIN_URL, {
                email: email,
                password: password,
            })
            .then((res) => {
                setMsg(res.data.message);
                if(!res.data.message) {
                    const accessToken = res.data.access_token;
                    const roles = res?.data?.user?.isAdmin;
                    const username = res?.data?.user?.username;
                    const email = res?.data?.user?.email;
                    const password = res?.data?.user?.password;


                    setAccessToken('accessToken', accessToken, { path: '/' });
                    setRoles('roles', roles, { path: '/' });
                    setUseranme('username',username,{ path: '/' });
                    setAuth({ email, password, roles, accessToken });
                    navigate(from, { replace: true });
                }
            })
            .catch((error) => console.log(error));
    }
    useEffect(() => {
        if(accessToken && accessToken.accessToken) {
            navigate("/",{ replace: true });
        }
    }, [])
    return (
        <div className="mt-28 flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 shadow-[0px_5px_24px_rgba(0,_0,_0,_0.16),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)]">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Đăng nhập</h1>
                <p className="text-sm dark:text-gray-400">{msg}</p>
            </div>
            <form
                onSubmit={(e) => {
                    handleLogin(e);
                }}
                noValidate=""
                id="loginForm"
                action=""
                className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-4">
                    <div>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Địa chỉ email"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Mật khẩu"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Link rel="noopener noreferrer" to="#" className="text-xs hover:underline dark:text-gray-400">
                            Quên mật khẩu
                        </Link>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            form="loginForm"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400 py-2">
                        Bạn không có tài khoản?
                        <Link rel="noopener noreferrer" to="/register" className="underline ml-1 dark:text-gray-100">
                            Đăng ký
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
