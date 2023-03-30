import { Modal, Input, Row, Checkbox, Button, Text, css } from '@nextui-org/react';
import { useState } from 'react';
import { AtSymbolIcon, LockClosedIcon, UserIcon, IdentificationIcon } from '@heroicons/react/24/solid';

export default function Register() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
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
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Họ"
                        contentLeft={<UserIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Tên"
                        contentLeft={<UserIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="username"
                        contentLeft={<IdentificationIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<AtSymbolIcon fill="currentColor" className="h-24 w-24" />}
                    />
                    <Input
                        clearable
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
                    <Button auto onPress={closeHandler}>
                        Đăng ký
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
