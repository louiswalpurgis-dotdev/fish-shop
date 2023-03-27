import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from '~/api/axios';
const HOME_URL = '/';

function ProductCard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(HOME_URL)
            .then((results) => {
                setData(results.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-4 lg:space-y-10 lg:py-24 lg:px-6">
                <div className="space-y-4 text-center my-2">
                    <h1 className="text-4xl font-semibold leading-tight text-gray-800 dark:text-gray-100">
                        WEBSITE BÁN CÁ CẢNH
                    </h1>
                    <p className="px-4 sm:px-8 lg:px-24 text-gray-800 dark:text-gray-100">
                        Chúng tôi tự tin tuyên bố rằng cá cảnh của chúng tôi rất thăm ngàn, vẫn còn tung tăng nhảy trong
                        hồ nhưng mà hấp lên rất là ngon, mlem mlem ạ.
                    </p>
                </div>

                <div className="flex flex-wrap m-4">
                    {/* Detail-wp */}
                    {data.map((item) => {
                        return (
                            <div className="p-4 xl:w-1/4 md:w-1/3 sm:w-1/2 w-full" key={item.id}>
                                <div className="h-full bg-gray-100 p-4 rounded-lg flex flex-col relative overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105 hover:shadow-[0px_5px_24px_rgba(0,_0,_0,_0.16),_0px_2px_6px_rgba(0,_0,_0,_0.04),_0px_0px_1px_rgba(0,_0,_0,_0.04)]">
                                    {/* IMAGE-EDITOR */}
                                    <div className="w-full h-40 overflow-hidden rounded-lg mb-1">
                                    <Link to={`/product/${item.slug}`}>
                                    <img
                                            className="w-full h-40 rounded-lg object-cover object-center mb-6 transform hover:scale-110 duration-200 shrink-0"
                                            src={item.image}
                                            alt={item.name}
                                        />
                                         </Link>
                                    </div>
                                    {/* DETAIL-EDITOR */}
                                    <>
                                    <Link to={`/product/${item.slug}`} className="text-blue-600">
                                    <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">
                                            {item.amount}
                                        </h3>
                                        <div className="flex justify-between">
                                            <h2 className="text-lg text-gray-800 font-medium title-font mb-2 truncate">
                                                {item.name}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2 truncate line-clamp-3">
                                            {item.info}
                                        </p>
                                        <div className="flex justify-between">
                                            <h2 className="text-lg text-gray-800 font-medium title-font mb-2">
                                                {item.price} đ
                                            </h2>
                                            <span>Xem chi tiết</span>
                                        </div>
                                    </Link>
                                        
                                    </>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
