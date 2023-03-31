import { Modal, Input, Row, Checkbox, Button, Text, Loading } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import axios from '~/api/axios';
import { connect } from 'react-redux';
import { addUser } from '~/action/action';
import { useCookies } from 'react-cookie';
const LOGIN_URL = '/auth/login';

function Login(props) {
    const [accessToken, setaccessToken] = useCookies('cookie');
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (localStorage.checkbox && localStorage.checkbox !== '') {
            setChecked(true);
            setEmail(localStorage.email);
            setPassword(localStorage.password);
        }
    }, []);

    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    function handleLogin() {
        try {
            setLoading(true);
            axios
                .post(LOGIN_URL, {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    setMsg(res.data.message);
                    setLoading(false);
                    if (checked) {
                        localStorage.email = email;
                        localStorage.password = password;
                        localStorage.checkbox = true;
                    }
                    if (!res.data.message) {
                        props.addUser(res.data.user);
                        console.log(res.data);
                        setaccessToken('access_token', res.data.access_token);
                        closeHandler();
                    }
                })
                .catch((error) => {
                    setLoading(false);
                    setMsg(error);
                });
        } catch (error) {
            setLoading(false);
            setMsg('Đã có lỗi xảy ra! Hãy thử lại.');
        }
    }
    return (
        <div>
            <Button auto onPress={handler} light aria-label="Đăng nhập">
                Đăng nhập
            </Button>
            <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Đăng nhập
                        <Text color="error">{msg}</Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={email}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<AtSymbolIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input.Password
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<LockClosedIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Row justify="space-between">
                        <Checkbox isSelected={checked} onChange={setChecked}>
                            <Text size={14}>Nhớ tài khoản</Text>
                        </Checkbox>
                        <Text size={14}>Quên mật khẩu?</Text>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto ghost color="error" onPress={closeHandler}>
                        Đóng
                    </Button>
                    <Button
                        auto
                        ghost
                        onPress={() => {
                            handleLogin();
                        }}
                    >
                        {(loading && <Loading type="gradient" />) || 'Đăng nhập'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user_current) => dispatch(addUser(user_current)),
    };
};
const mapStateToProps = (state) => {
    return {
        user: state.user.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
