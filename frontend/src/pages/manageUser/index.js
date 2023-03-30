import { useState, useEffect } from 'react';
import { Link as linkReact } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Table, Avatar, Link, Button } from '@nextui-org/react';
import axios from '~/api/axios';

import { EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

const GET_USERS_URL = '/admin/users';
function ManageUser() {
    const [cookie, setCookie] = useCookies(['cookie']);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get(GET_USERS_URL, {
                headers: {
                    authorization: `Bearer ${cookie.accessToken}`,
                },
            })
            .then((data) => setUsers(data.data))
            .catch((err) => console.log(err));
    }, []);

    function handleDelete(user) {
        const DELETE_USER_URL = `/account/${user.id}/delete`;
        axios
            .delete(DELETE_USER_URL, {
                id: user.id,
            })
            .then(setUsers((users) => users.filter((item) => item.id !== user.id)))
            .catch((err) => console.log(err));
    }
    return (
        <Table
            aria-label="Quản lý người dùng."
            css={{
                height: 'auto',
                minWidth: '100%',
            }}
            selectionMode="multiple"
        >
            <Table.Header>
                <Table.Column>NAME</Table.Column>
                <Table.Column>USERNAME</Table.Column>
                <Table.Column>EMAIL</Table.Column>
                <Table.Column>Avatar</Table.Column>
                <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
                {users.map((user) => {
                    return (
                        <Table.Row key={user.id}>
                            <Table.Cell>
                                {user.firstName} {user.lastName}
                            </Table.Cell>
                            <Table.Cell>
                                {user.username}
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>
                                <Avatar size="lg" src={user.image} zoomed />
                            </Table.Cell>
                            <Table.Cell>
                                <Link as={linkReact} to={`/profile/${user.username}`}>
                                    <EyeIcon className="h-6 w-6 hover:text-blue-500" />
                                </Link>
                                <Button
                                    auto
                                    color="error"
                                    icon={<TrashIcon className="h-6 w-6 text-blue-500" />}
                                    onClick={() => handleDelete(user)}
                                />
                            </Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
}

export default ManageUser;
