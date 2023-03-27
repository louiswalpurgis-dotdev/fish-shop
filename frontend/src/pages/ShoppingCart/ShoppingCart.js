import React from 'react';
import { connect } from 'react-redux';

import { deleteProduct } from '~/action/action';

export const DeleteIcon = () => {
    return (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
        </svg>
    );
};

function ShoppingCart(props) {
    const products = props.cart;
    var total = 0;
    return (
        <div className="flex flex-col max-w-full p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Giỏ hàng của bạn</h2>
            <ul className="flex flex-col divide-y divide-gray-300">
                {/* ITEM */}
                {products.map((product, index) => {
                    product.quantity ? total += product.price * product.quantity : total += product.price;
                    return (
                        <li className="flex flex-col py-6 sm:flex-row sm:justify-between" key={index}>
                            {/* ITEM EDITOR */}
                            <div className="flex w-full space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex flex-col overflow-hidden rounded-md md:flex-row">
                                    <div className="md:w-80 md:h-30 w-full flex justify-center overflow-hidden rounded-lg">
                                        <img
                                            className="md:w-80 md:h-30 w-full  rounded-lg object-cover object-center transform hover:scale-110 duration-200 shrink-0"
                                            src={product.image}
                                            alt="content"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                                        <span className="text-xs uppercase dark:text-gray-400">Category</span>
                                        <h3 className="text-3xl font-bold">{product.name}</h3>
                                        <p className="my-4 dark:text-gray-400">{product.info}</p>
                                        <div className="text-left mb-4">
                                            {product.quantity === undefined ? (
                                                <p className="text-lg font-semibold">{product.price} đ</p>
                                            ) : (
                                                <p className="text-lg font-semibold">{product.price} đ <span className='text-xs text-red-500'>{`x${product.quantity}`}</span></p>
                                            )}
                                        </div>
                                        <div className="flex text-sm divide-x text-red-400 hover:text-red-600">
                                            <button
                                                type="button"
                                                onClick={() => props.deleteProduct(product)}
                                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                                            >
                                                <DeleteIcon />
                                                <span>Xóa sản phẩm</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ITEM EDITOR */}
                        </li>
                    );
                })}
                {/* ITEM */}
            </ul>

            <div className="space-y-1 text-right">
                <p>
                    Tổng tiền:
                    <span className="font-semibold ml-1">{total} đ</span>
                </p>
                <p className="text-sm dark:text-gray-400">Cửa hàng chúng tôi cả ơn quý khách...</p>
            </div>
            <div className="flex justify-end space-x-4">
                <button
                    type="button"
                    className="px-6 py-2 border hover:border-none rounded-md hover:bg-purple-700 hover:text-white dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
                >
                    <span className="sr-only sm:not-sr-only">Mua ngay</span>
                </button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.total,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (product_current) => dispatch(deleteProduct(product_current)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
