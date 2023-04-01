import { Modal, Input, Button, Text, Loading } from '@nextui-org/react';
import { useState } from 'react';
import { AtSymbolIcon, LockClosedIcon, UserIcon, IdentificationIcon } from '@heroicons/react/24/solid';
import axios from '~/api/axios';
import { ValidateRegister } from '~/components/Validate';

const REGISTER_URL = '/auth/register';
export default function Register() {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
    };
    const handleRegister = () => {
        setLoading(true);
        const result = ValidateRegister({ firstName, lastName, username, email, password });
        if (result || result !== '') {
            setMsg(result);
            setLoading(false);
            return;
        }
        try {
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
                    setLoading(false);
                    if (!res.data.message) {
                        closeHandler();
                    }
                });
        } catch (error) {
            setLoading(true);
            setMsg('Đã xuất hiện lỗi! Hãy thử lại');
            console.log(error);
        }
    };
    return (
        <div>
            <Button auto onPress={handler} light>
                Đăng ký
            </Button>
            <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Đăng ký
                        <Text color="error">{msg}</Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Họ"
                        contentLeft={<UserIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Tên"
                        contentLeft={<UserIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="username"
                        contentLeft={<IdentificationIcon fill="currentColor" className="h-24 w-24" />}
                    />
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
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Mật khẩu"
                        contentLeft={<LockClosedIcon fill="currentColor" className="h-24 w-24" />}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Đóng
                    </Button>
                    <Button auto onPress={handleRegister}>
                        {(loading && <Loading type="gradient" />) || 'Đăng ký'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
