import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from '~/api/axios';

import { connect } from 'react-redux';

const MenuBarItem = [
    {
        path: '/',
        name: 'Trang chủ',
    },
    {
        path: '/admin/createproduct',
        name: 'Thêm sản phẩm',
    },
    {
        path: '/admin',
        name: 'Admin',
    },
];

const SearchPage = '/search';

const ShoppingCardPage = '/cart';

const SignIn = [
    {
        path: '/login',
        name: 'Đăng nhập',
    },
];

const SignUp = [
    {
        path: '/register',
        name: 'Đăng ký',
    },
];

export const MenuIcon = () => {
    return (
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
        </svg>
    );
};

export const SearchMobileIcon = () => {
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
};

export const SearchInputIcon = () => {
    return (
        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
        </svg>
    );
};

export const ShoppingCardIcon = () => {
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
        </svg>
    );
};

const MenuBarItemCss =
    'block py-2 pl-3 pr-4 text-gray-800 rounded lg:bg-transparent lg:p-0 focus:text-purple-700 hover:text-purple-700 dark:text-gray-300';
const SignInCss =
    'text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800';
const SignUpCss =
    'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800';

function Header(props) {
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['cookie']);
    const carts = props.cart.length;
    const GET_PRODUCT_URL = '/';

    const [query, setquery] = useState('');
    const [products, setProducts] = useState([]);
    const [state, setstate] = useState({
        query: '',
        list: [],
    });

    useEffect(() => {
        axios.get(GET_PRODUCT_URL).then((products) => {
            setProducts(products.data);
        });
    }, []);

    const handleChange = (e) => {
        const results = products.filter((product) => {
            if (e.target.value === '') return products;
            return product.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setquery(e.target.value);
        setstate({
            query: e.target.value,
            list: results,
        });
    };
    return (
        <header className="sticky top-0 z-10 w-full">
            <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    {/* MenuBar */}
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {MenuBarItem.map((item, index) => (
                                <li key={index}>
                                    <NavLink to={item.path} className={MenuBarItemCss}>
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* MenuBar */}

                    {/* LOGO&IC */}
                    <div className="flex gap-x-4 items-center">
                        <span className="lg:hidden self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            <MenuIcon />
                        </span>
                        <Link to="/" className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            MA ĐẠO SIR
                        </Link>
                    </div>
                    {/* LOGO&IC */}

                    <div className="flex gap-x-1 items-center lg:order-2">
                        {/* SearchInput */}
                        <div className="mr-2 hidden md:block items-center">
                            <div className="relative w-full">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                        <SearchInputIcon />
                                    </button>
                                </span>
                                <input
                                    value={query}
                                    onChange={handleChange}
                                    type="search"
                                    name="Search"
                                    placeholder="Tìm kiếm..."
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                <div className="absolute left-0 items-center max-h-60 overflow-y-auto bg-slate-50 text-black-100">
                                    <ul className='items-center'>
                                        {state.query === ''
                                            ? ''
                                            : state.list.map((item) => {
                                                  return <li key={item.id} onClick={() =>{
                                                    setstate({
                                                      query: '',
                                                      list: products,
                                                  });
                                                  setquery('');
                                                  }} > <NavLink to={`/product/${item.slug}`}>{item.name}</NavLink> </li>;
                                              })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* SearchInput */}

                        {/* icSearchMobile */}
                        <NavLink
                            to={SearchPage}
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <SearchMobileIcon />
                        </NavLink>
                        {/* <icSearchMobile */}

                        {/* icShoppingCard */}
                        <NavLink
                            to={ShoppingCardPage}
                            className="relative inline-flex items-center p-3 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <ShoppingCardIcon />
                            <span className="absolute top-1 right-1 w-3 h-3 flex items-center justify-center text-[8px] rounded-full text-white bg-red-500">
                                {carts}
                            </span>
                        </NavLink>
                        {/* <icShoppingCard */}
                        {cookie.username ? (
                            <>
                                <Link
                                    to={`/profile/${cookie.username}`}
                                    className="mx-4 block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    {cookie.username}
                                </Link>
                                <Link
                                    to="/logout"
                                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                                >
                                    Đăng Xuất
                                </Link>
                            </>
                        ) : (
                            <>
                                {/* SignIn */}
                                {SignIn.map((login, index) => (
                                    <NavLink to={login.path} key={index} className={SignInCss}>
                                        {login.name}
                                    </NavLink>
                                ))}
                                {/* SignIn */}

                                {/* SignUp */}
                                {SignUp.map((register, index) => (
                                    <NavLink to={register.path} key={index} className={SignUpCss}>
                                        {register.name}
                                    </NavLink>
                                ))}
                                {/* SignUp */}
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.total,
    };
};
export default connect(mapStateToProps, {})(Header);
