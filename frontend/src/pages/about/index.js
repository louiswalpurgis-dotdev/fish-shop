import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fish from '~/assets/Conca.svg';

const ListMembers = [
    {
        category: 'Nhóm trưởng',
        name: 'Mai Tỵ',
        avaterUrl:
            'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        category: 'Thành viên',
        name: 'Hoàng Thái Ninh',
        avaterUrl:
            'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        category: 'Thành viên',
        name: 'Hoàng Đình Huân',
        avaterUrl:
            'https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        category: 'Thành viên',
        name: 'Đặng Trần Ngọc Mạnh',
        avaterUrl:
            'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
        category: 'Thành viên',
        name: 'Nguyễn Tấn Phát',
        avaterUrl:
            'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
];

export const Status = () => {
    return (
        <p className="leading-relaxed text-base">
            Ở Việt Nam hiện có khoảng trên 500 cơ sở sản xuất, ương nuôi cá cảnh, tập trung ở một số đô thị lớn như
            TP.HCM, Cần Thơ, Hà Nội, Đà Nẵng, Khánh Hòa… Cá cảnh không chỉ được tiêu thụ nội địa mà còn xuất khẩu đi
            nhiều nước trên thế giới.
        </p>
    );
};

export const BlablaIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-16 h-16 dark:text-violet-400"
        >
            <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
            <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
        </svg>
    );
};
export const RightIcon = () => {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
        >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
    );
};

function About() {
    const [showOpen, setShowOpen] = useState(false);

    const handleOpen = () => {
        setShowOpen(!showOpen);
    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container flex flex-wrap px-5 py-24 mx-auto items-center">
                    <div className="md:w-1/3 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                        <div className="flex-col flex items-center justify-center relative">
                            <img src={Fish} className="w-[10rem]" alt="..." />
                        </div>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12">
                        <div className="md:w-3/3 md:pl-6">
                            <div className="sm:text-3xl text-2xl font-medium title-font mb-2 text-violet-500">
                                <BlablaIcon />
                                <span className="font-bold text-[2rem]">Cửa hàng về cá cảnh</span>
                            </div>
                            <Status />
                            <div className="flex md:mt-4 mt-6">
                                <button
                                    onClick={handleOpen}
                                    className="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded"
                                >
                                    @
                                </button>
                                <Link onClick={handleOpen} className="text-indigo-500 inline-flex items-center ml-4">
                                    Xem thành viên
                                    <RightIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showOpen && (
                <div className="flex flex-wrap -m-4">
                    {ListMembers.map((listmembers, index) => (
                        <div className="p-4 lg:w-1/2 md:w-full" key={index}>
                            <div className="flex items-center justify-center border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:shadow-sm">
                                <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                                    <img
                                        alt=""
                                        className="self-center flex-shrink-0 w-16 h-16 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                                        src={listmembers.avaterUrl}
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium">{listmembers.name}</h2>

                                    <p className="mt-3 text-indigo-500 inline-flex items-center">
                                        {listmembers.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                            Website đạt chuẩn tại công ty một mình tôi
                        </h2>
                        <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
                            Cửa hàng bán cá cảnh
                        </h1>
                    </div>
                    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6"
                                viewBox="0 0 512 512"
                            >
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                <span className="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6"
                                viewBox="0 0 305 305"
                            >
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                <span className="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
