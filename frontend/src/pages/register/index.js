import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

import { useCookies } from 'react-cookie';
import axios from '~/api/axios';
const REGISTER_URL = '/auth/register';

function Register() {
    const [cookie, setCookie] = useCookies(['cookie']);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(cookie && cookie.accessToken) {
            navigate("/");
        }
    }, [])

    function handleRegister(event) {
        event.preventDefault();

        axios
            .post(REGISTER_URL, {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
            })
            .then((res) => {
                setMsg(res.data.message);
                if(!res.data.message) {
                    navigate("/login", { replace: true });
                }
            })
            .catch((error) => console.log(error));
    }
    return (
        <div className="mt-14 flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100 shadow-[0px_5px_24px_rgba(0,_0,_0,_0.16),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)]">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Đăng ký</h1>
                <p className="text-sm dark:text-gray-400">{msg}</p>
            </div>
            <form
                onSubmit={(e) => {
                    handleRegister(e);
                }}
                noValidate=""
                id="registerForm"
                action=""
                className="space-y-12 ng-untouched ng-pristine ng-valid"
            >
                <div className="space-y-4">
                    <div>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            name="firstname"
                            id="firstname"
                            placeholder="Họ"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Tên"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        />
                    </div>
                    <div>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        />
                    </div>
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
                </div>
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            form="registerForm"
                            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Đăng ký
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400 py-2">
                        Bạn đã có tài khoản ?
                        <Link rel="noopener noreferrer" to="/login" className="underline ml-1 dark:text-gray-100">
                            Đăng nhập
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Register;
