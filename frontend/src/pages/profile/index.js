import React, { useEffect, useState } from 'react';
import axios from '~/api/axios';
import { useParams, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Profile() {
    const { username } = useParams();
    const GET_USER_URL = `/profile/${username}`;
    const UPDATE_USER_URL = `/account/${username}/update`;
    const [cookie, setCookie] = useCookies(['cookie']);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        axios.get(GET_USER_URL).then((user) => {
            const data = user.data;
            setFirstName(data.firstName);
            setLastName(data.lastName);
            setUname(data.username);
            setEmail(data.email);
            setImage(data.image);
            if (data.username === cookie.username) {
                setEdit(true);
            }
        });
    }, []);

    function handleUpdateUser(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('username', username);
        formData.append('email', email);
        if (!image) {
            formData.append('image', selectedImage);
        }
        axios
            .put(UPDATE_USER_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((result) => window.location.reload);
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto flex flex-col">
                <div className="rounded-lg lg:h-full">
                    <div className="sm:mt-0">
                        {/* BÌA */}
                        <div className="relative rounded-lg lg:h-[25rem] overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/549e9b77-4c90-4c7f-8d0e-772a4ba70576/d8xxzgs-59ed64d8-fb5f-43a0-847c-9d0dd77eeef2.jpg/v1/fill/w_1347,h_593,q_70,strp/besoboy_cover_issue33_by_arsenixc_d8xxzgs-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NSIsInBhdGgiOiJcL2ZcLzU0OWU5Yjc3LTRjOTAtNGM3Zi04ZDBlLTc3MmE0YmE3MDU3NlwvZDh4eHpncy01OWVkNjRkOC1mYjVmLTQzYTAtODQ3Yy05ZDBkZDc3ZWVlZjIuanBnIiwid2lkdGgiOiI8PTMxMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.op_0nDzJwqAh1oekdRZqgtzQGeuD9jKlGb7Vb-3rxpE"
                            />
                            <input id="coverimage" type="file" className="hidden" />
                        </div>
                        {/* BÌA */}
                        <div className="py-4 md:grid md:grid-cols-3 md:gap-6">
                            <div className="md:col-span-1">
                                {/* AVATAR */}
                                <div className="relative">
                                    <label htmlFor="image">
                                        <div className="top-0 w-32 h-32 inline-flex overflow-hidden absolutes justify-center items-center bg-gray-100 rounded-full dark:bg-gray-600">
                                            {image && <img src={image} alt="avatar" />}
                                            {selectedImage && (
                                                <img alt="avatar" src={URL.createObjectURL(selectedImage)} />
                                            )}
                                        </div>
                                    </label>
                                    {edit ? (
                                        <input
                                            id="image"
                                            type="file"
                                            className="hidden"
                                            name="image"
                                            onChange={(event) => {
                                                setSelectedImage(event.target.files[0]);
                                                setImage(null);
                                            }}
                                        />
                                    ) : null}
                                </div>
                                {/* AVATAR */}
                                <div className="px-4 sm:px-0">
                                    {/* Username */}
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                        <Link to={`/profile/${username}`}>@{uname}</Link>
                                    </h2>
                                    {/* Username */}

                                    {/* Name */}
                                    <div className="text-Gray-800 font-bold text-[2rem] flex gap-2 items-center">
                                        {firstName + ' ' + lastName}
                                    </div>
                                    {/* Name */}

                                    {/* Status */}
                                    <p className="leading-relaxed mb-5">MA ĐẠO SIR</p>
                                    {/* Status */}
                                </div>
                            </div>
                            <div className="mt-5 md:col-span-2 md:mt-0">
                                <form id="updateUser" onSubmit={(e) => handleUpdateUser(e)}>
                                    <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className="bg-white px-4 py-5 sm:p-6">
                                            <div className="grid grid-cols-6 gap-6">
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="firstName"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        First Name
                                                    </label>
                                                    {edit ? (
                                                        <input
                                                            type="text"
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            value={firstName}
                                                            id="firstName"
                                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={firstName}
                                                            id="firstName"
                                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                        />
                                                    )}
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="lastName"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Last Name
                                                    </label>
                                                    {edit ? (
                                                        <input
                                                            type="text"
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            value={lastName}
                                                            id="lastName"
                                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                        />
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            readOnly
                                                            value={lastName}
                                                            id="lastName"
                                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                        />
                                                    )}
                                                </div>
                                                <div className="col-span-6 sm:col-span-3">
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-700"
                                                    >
                                                        Email
                                                    </label>
                                                    {edit ? (
                                                        <input
                                                            type="email"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            value={email}
                                                            id="email"
                                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                        />
                                                    ) : (
                                                        <input
                                                            type="email"
                                                            readOnly
                                                            value={email}
                                                            id="email"
                                                            className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="x-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                form="updateUser"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
