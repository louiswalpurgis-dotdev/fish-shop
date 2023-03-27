import React from 'react';
import { Link } from 'react-router-dom';
import FishBanner from '~/assets/ornamental-fish.svg';
import FishSlide from '~/assets/Conca.svg';

export const BookIcon = () => {
    return (
        <svg
            className="mr-2 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
        </svg>
    );
};

function Slide() {
    return (
        <section className="flex flex-wrap items-center justify-between max-w-screen-xl py-2 lg:py-5 px-4 mx-auto">
            <div className="flex-1 flex flex-col items-start gap-6">
                <div className="flex items-center gap-2 justify-center bg-violet-100 px-4 py-1 rounded-full">
                    <p className="text-base text-violet-500 font-semibold">Cá cảnh</p>
                    <div className="w-8 h-8 bg-violet-400 rounded-full overflow-hidden drop-shadow-xl">
                        <img src={FishBanner} className="w-full h-full object-contain" alt="delivery" />
                    </div>
                </div>
                <div className="lg:mb-5 md:mb-5 sm:mb-[3rem]">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                        Cửa hàng bán <br />
                        cá cảnh & đồ thủy sinh.
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Cửa hàng uy tín, với nhiều phần quà hấp dẫn và một số mini game thú vị, hấp dẫn tại{' '}
                        <Link href="#" className="hover:underline">
                            AQUARIUM
                        </Link>{' '}
                        với đội ngũ nhân viên tư vấn tận tình, tận răng không làm khách hàng thất vọng .
                    </p>
                </div>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <Link
                        to="/about"
                        title="Cửa hàng Aquarium"
                        className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        <BookIcon /> Giới thiệu
                    </Link>
                    <Link
                        to="/admin"
                        title="Đội ngũ tư vấn"
                        className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="lg:block flex-col hidden items-center justify-center relative">
                <img src={FishSlide} className="w-80" alt="..." />
            </div>
        </section>
    );
}

export default Slide;
