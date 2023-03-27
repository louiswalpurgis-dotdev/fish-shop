import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
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
    const DELETE_USER_URL=`/account/${user.id}/delete`
        axios.delete(DELETE_USER_URL,{
            id:user.id
        })
        .then(window.location.reload())
        .catch(err => console.log(err))
    } 
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                    >
                                        #
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        firstName
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        lastName
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        username
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Ảnh đại diện
                                    </th>
                                    <th
                                        scope="col"
                                        className="h-full px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {users.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                                                {index}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {user.firstName}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {user.lastName}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">{user.username}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">{user.email}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm flex justify-around items-center">
                                                <img src={user.image} className="w-10 h-10 rounded-full" />
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <div className="flex justify-around items-center">
                                                    <Link to={`/profile/${user.username}`}>
                                                        <EyeIcon className="h-6 w-6 hover:text-blue-500" />
                                                    </Link>
                                                    <button 
                                                    onClick={() => handleDelete(user)}
                                                    >
                                                        <TrashIcon 
                                                        className="h-6 w-6 text-blue-500"
                                                     />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageUser;
