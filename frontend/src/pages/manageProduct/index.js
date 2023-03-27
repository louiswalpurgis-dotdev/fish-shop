import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from '~/api/axios';

import { EyeIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';

const GET_PRODUCTS_URL = '/admin/products';
function ManagerProduct() {
    const [cookie, setCookie] = useCookies(['cookie']);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get(GET_PRODUCTS_URL, {
                headers: {
                    authorization: `Bearer ${cookie.accessToken}`,
                },
            })
            .then((data) => setProducts(data.data))
            .catch((err) => console.log(err));
    }, []);

    function handleDelete(product) {
    const DELETE_USER_URL=`/product/${product.id}/delete`
        axios.delete(DELETE_USER_URL,{
            id:product.id
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
                                        Tên cá
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Giá tiền
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Số lượng
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Mô tả
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                    >
                                        Ảnh mô tả
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
                                {products.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">
                                                {index}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {product.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                {product.price}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">{product.amount}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <textarea
                                                readOnly
                                                rows="5"
                                                className='overflow-hidden w-full'
                                                value={product.info}
                                                >
                                                </textarea>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm flex justify-around items-center">
                                                <img src={product.image} className="w-10 h-10 rounded-full" />
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm">
                                                <div className="flex justify-around items-center">
                                                    <Link to={`/product/${product.slug}`}>
                                                        <EyeIcon className="h-6 w-6 hover:text-blue-500" />
                                                    </Link>
                                                    <Link to={`/product/${product.id}/update`}>
                                                        <PencilSquareIcon className="h-6 w-6 hover:text-blue-500" />
                                                    </Link>
                                                    <button 
                                                    onClick={() => handleDelete(product)}
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

export default ManagerProduct;
