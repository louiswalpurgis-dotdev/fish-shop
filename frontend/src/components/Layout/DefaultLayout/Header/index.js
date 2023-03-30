import React, { useState, useEffect } from 'react';
import { Link as reactLink, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from '~/api/axios';
import { Navbar, Dropdown, Grid, User, Tooltip, Input, Image, Link } from '@nextui-org/react';
import { connect } from 'react-redux';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import Login from '../../Auth/Login';
import Register from '../../Auth/register';
import logo from '~/assets/logo.png';

const MenuBarItem = [
    { key: 1, path: '/', name: 'Trang chủ' },
    { key: 2, path: '/admin/createproduct', name: 'Tạo sản phẩm' },
    { key: 3, path: '/admin', name: 'Quản lý' },
];

const shoppingCardPage = '/cart';

const menuItems = [
    { key: 1, path: '/admin', name: 'Quản lý' },
    { key: 2, path: '/', name: 'Copy Link' },
    { key: 3, path: '/', name: 'Edit File' },
    { key: 4, path: '/', name: 'Delete File' },
];

defineElement(lottie.loadAnimation);

function Header(props) {
    const location = useLocation();
    const [cookie, setCookie] = useCookies(['cookie']);
    const [path, setPath] = useState('');
    const carts = props.cart.length;
    const GET_PRODUCT_URL = '/';

    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [state, setState] = useState({
        query: '',
        list: [],
    });

    useEffect(() => {
        axios.get(GET_PRODUCT_URL).then((response) => {
            setProducts(response.data);
        });
    }, []);

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname]);

    const handleChange = (e) => {
        const results = products.filter((product) => {
            if (e.target.value === '') return products;
            return product.name.toLowerCase().includes(e.target.value.toLowerCase());
        });

        setQuery(e.target.value);
        setState({
            query: e.target.value,
            list: results,
        });
    };

    return (
        //                 {/* icSearchMobile */}
        //                 <NavLink
        //                     to={SearchPage}
        //                     className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //                 >
        //                     <SearchMobileIcon />
        //                 </NavLink>
        //                 {/* <icSearchMobile */}

        //                 {/* icShoppingCard */}
        //                 <NavLink
        //                     to={ShoppingCardPage}
        //                     className="relative inline-flex items-center p-3 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        //                 >
        //                     <ShoppingCardIcon />
        //                     <span className="absolute top-1 right-1 w-3 h-3 flex items-center justify-center text-[8px] rounded-full text-white bg-red-500">
        //                         {carts}
        //                     </span>
        //                 </NavLink>
        //                 {/* <icShoppingCard */
        <Navbar isBordered variant="floating" css={{ paddingLeft: 0, paddingRight: 0 }}>
            <Navbar.Brand>
                <Grid.Container gap={2}>
                    <Grid>
                        <Navbar.Content hideIn="xs">
                            <Tooltip content={'Trang chủ'} placement="bottom">
                                <Navbar.Link as={reactLink} to="/">
                                    <Image src={logo} css={{ w: 80 }}></Image>
                                    {/* <Text
                                        size={20}
                                        css={{
                                            textGradient: '45deg, $blue600 -20%, $pink600 50%',
                                        }}
                                        weight="bold"
                                    >
                                        Con cá
                                    </Text> */}
                                </Navbar.Link>
                            </Tooltip>
                        </Navbar.Content>
                    </Grid>
                    <Grid>
                        <Dropdown>
                            <Dropdown.Button flat>Khám phá</Dropdown.Button>
                            <Dropdown.Menu items={menuItems}>
                                {(item) => (
                                    <Dropdown.Item key={item.key}>
                                        <Link
                                            as={reactLink}
                                            to={item.path}
                                            isActive={path === item.path ? true : false}
                                        >
                                            {item.name}
                                        </Link>
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Grid>
                    <Grid>
                        <Navbar.Content hideIn="xs">
                            {MenuBarItem.map((item) => (
                                <Tooltip content={item.name} placement="bottom" key={item.key}>
                                    <Navbar.Link
                                        as={reactLink}
                                        to={item.path}
                                        isActive={path === item.path ? true : false}
                                    >
                                        {item.name}
                                    </Navbar.Link>
                                </Tooltip>
                            ))}
                        </Navbar.Content>
                    </Grid>
                </Grid.Container>
            </Navbar.Brand>
            <Navbar.Content activeColor="primary" variant="highlight-rounded">
                <Input clearable bordered placeholder="Tìm kiếm" value={query} onChange={handleChange} />

                {/* <div className="absolute left-0 items-center max-h-60 overflow-y-auto bg-slate-50 text-black-100">
                    <ul className="items-center">
                        {state.query === ''
                            ? ''
                            : state.list.map((item) => {
                                  return (
                                      <li
                                          key={item.id}
                                          onClick={() => {
                                              setState({
                                                  query: '',
                                                  list: products,
                                              });
                                              setQuery('');
                                          }}
                                      >
                                          {' '}
                                          <NavLink to={`/product/${item.slug}`}>{item.name}</NavLink>{' '}
                                      </li>
                                  );
                              })}
                    </ul>
                </div> */}

                <Tooltip content="Giỏ hàng" placement="bottom" className="mx-4">
                    <Link as={reactLink} to={shoppingCardPage}>
                        <ShoppingCartIcon style={{ width: 2 + 'em', height: 2 + 'em', color: 'black' }} />
                    </Link>
                    <span className="w-3 h-3 flex items-center justify-center text-[8px] rounded-full text-white bg-red-500">
                        {carts}
                    </span>
                </Tooltip>

                {cookie.username ? (
                    <>
                        <User src="https://i.pravatar.cc/150?u=a042581f4e29026704d" name="Ariana Wattson" zoomed>
                            <User.Link as={reactLink} to={`/profile/${cookie.username}`} target="_self">
                                {cookie.username}
                            </User.Link>
                        </User>
                        <Navbar.Link as={reactLink} to="/logout" auto="true" flat="true" isActive variant="highlight">
                            Đăng xuất
                        </Navbar.Link>
                    </>
                ) : (
                    <>
                        <Login />
                        <Register />
                    </>
                )}
            </Navbar.Content>
        </Navbar>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartAr,
        total: state.cart.total,
    };
};
export default connect(mapStateToProps, {})(Header);
