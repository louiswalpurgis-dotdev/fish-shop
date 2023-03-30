import { Modal, Input, Row, Checkbox, Button, Text } from '@nextui-org/react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import axios from '~/api/axios';

import useAuth from '~/hooks/useAuth';
const LOGIN_URL = '/auth/login';

export default function Login() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };

    const [accessToken, setAccessToken] = useCookies(['accessToken']);
    const [userame, setUseranme] = useCookies(['username']);
    const [roles, setRoles] = useCookies(['roles']);
    const { setAuth } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    function handleLogin() {
        axios
            .post(LOGIN_URL, {
                email: email,
                password: password,
            })
            .then((res) => {
                setMsg(res.data.message);
                if (!res.data.message) {
                    const accessToken = res.data.access_token;
                    const roles = res?.data?.user?.isAdmin;
                    const username = res?.data?.user?.username;
                    const email = res?.data?.user?.email;
                    const password = res?.data?.user?.password;

                    setAccessToken('accessToken', accessToken, { path: '/' });
                    setRoles('roles', roles, { path: '/' });
                    setUseranme('username', username, { path: '/' });
                    setAuth({ email, password, roles, accessToken });
                    closeHandler();
                }
            })
            .catch((error) => console.log(error));
    }
    return (
        <div>
            <Button auto onPress={handler} light>
                Đăng nhập
            </Button>
            <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Đăng nhập
                    </Text>
                    {msg}
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<AtSymbolIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<LockClosedIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Nhớ tài khoản</Text>
                        </Checkbox>
                        <Text size={14}>Quên mật khẩu?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Đóng
                    </Button>
                    <Button
                        auto
                        onPress={() => {
                            handleLogin();
                        }}
                    >
                        Đăng nhập
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
