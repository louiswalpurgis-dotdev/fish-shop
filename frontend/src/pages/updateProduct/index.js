import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '~/api/axios';

function UpdateProduct() {
    const navigate = useNavigate();
    const { productId } = useParams();

    const UPDATE_PRODUCT_URL = `/product/${productId}/update`;
    const GET_ONE_PRODUCT_URL = `/product/${productId}/get`;

    const [slug, setSlug] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(1);
    const [info, setInfo] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [defaultImage, setDefaultImage] = useState(null);

    useEffect(() => {
        axios.get(GET_ONE_PRODUCT_URL).then((product) => {
            const data = product.data;
            setSlug(data.slug);
            setName(data.name);
            setPrice(data.price);
            setAmount(data.amount);
            setInfo(data.info);
            setDefaultImage(data.image);
        });
    }, []);

    function handleUpdateProduct(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('amount', amount);
        formData.append('info', info);
        if (!defaultImage) {
            formData.append('image', selectedImage);
        }
        axios
            .put(UPDATE_PRODUCT_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((product) => {
                navigate(`/product/${slug}`, { replace: true });
            });
    }
    return (
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6 mt-20">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Thêm sản phẩm mới</h3>
                        <p className="mt-1 text-sm text-gray-600">
                            Vui lòng nhập đầy đủ tất cả các thông tin được yêu cầu.
                        </p>
                    </div>
                </div>
                <div className="mt-5 md:col-span-2 md:mt-0">
                    <form id="createForm" onSubmit={(e) => handleUpdateProduct(e)}>
                        <div className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-3 gap-12">
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Tên cá
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                autoFocus
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 sm:text-sm outline-0 h-10"
                                                value={name}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-12">
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Giá tiền
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                onChange={(e) => setPrice(e.target.value)}
                                                required
                                                type="number"
                                                name="price"
                                                id="price"
                                                min="0"
                                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 sm:text-sm outline-0 h-10"
                                                value={price}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-12">
                                    <div className="col-span-3 sm:col-span-3">
                                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                            Số lượng
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">
                                            <input
                                                onChange={(e) => setAmount(e.target.value)}
                                                required
                                                type="number"
                                                name="amount"
                                                id="amount"
                                                min="1"
                                                max="9999999"
                                                className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 sm:text-sm outline-0 h-10"
                                                value={amount}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="info" className="block text-sm font-medium text-gray-700">
                                        Thông tin con cá
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            required
                                            onChange={(e) => setInfo(e.target.value)}
                                            id="info"
                                            name="info"
                                            rows="5"
                                            className=" outline-0 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            value={info}
                                        ></textarea>
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">Mô tả ngắn gọn về con cá đó.</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Hình ảnh con cá</label>
                                    {defaultImage && (
                                        <div className="flex flex-col items-center">
                                            <img alt="ảnh con cá" src={defaultImage} />
                                        </div>
                                    )}
                                    {selectedImage && (
                                        <div className="flex flex-col items-center">
                                            <img alt="ảnh con cá" src={URL.createObjectURL(selectedImage)} />
                                        </div>
                                    )}
                                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="image"
                                                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Click để tải ảnh lên</span>
                                                    <input
                                                        onChange={(event) => {
                                                            setSelectedImage(event.target.files[0]);
                                                            setDefaultImage(null);
                                                        }}
                                                        id="image"
                                                        name="image"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                    type="submit"
                                    form="createForm"
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
    );
}

export default UpdateProduct;
