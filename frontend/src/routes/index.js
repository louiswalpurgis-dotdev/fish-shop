import React from 'react';

import Config from '~/config/config';

import { HeaderOnly, DefaultLayout } from '~/components/Layout';
import About from '~/pages/about';
import Setting from '~/pages/setting';
import Profile from '~/pages/profile';
import Admin from '~/pages/admin';
import Login from '~/pages/Login';
import Register from '~/pages/register';
import Logout from '~/pages/logout';
import ShoppingCart from '~/pages/ShoppingCart/ShoppingCart';
import ProductDetail from '~/pages/productDetail';
import CreateProduct from '~/pages/createProduct';
import UpdateProduct from '~/pages/updateProduct';
import ManageProduct from '~/pages/manageProduct';
import ManageUser from '~/pages/manageUser';
import Unauthorized from '~/pages/Unauthorized';
const HomeLazy = React.lazy(() => import('~/pages/home'))

const publicRouters = [
    { path: Config.routes.home, component: HomeLazy , layout: DefaultLayout },
    { path: Config.routes.login, component: Login, layout: HeaderOnly },
    { path: Config.routes.register, component: Register, layout: HeaderOnly },
    { path: Config.routes.about, component: About, layout: DefaultLayout },
    {path: Config.routes.unauthorized, component: Unauthorized, layout: HeaderOnly},
    {path: Config.routes.logout, component: Logout, layout: DefaultLayout},
    {path: Config.routes.product, component: ProductDetail, layout: DefaultLayout},
    {path: '/*', component: Unauthorized, layout: HeaderOnly}
];
const privateRouters = [
    { path: Config.routes.setting, component: Setting, role: 'user' },
    { path: Config.routes.profile, component: Profile, role: 'user' },
    {path: Config.routes.cart, component: ShoppingCart, layout: DefaultLayout, role: 'user'},
    {path: Config.routes.createproduct, component: CreateProduct, layout: DefaultLayout, role: 'admin'},
    {path: Config.routes.productupdate, component: UpdateProduct, layout: DefaultLayout, role: 'admin'},
    {path: Config.routes.managerproduct, component: ManageProduct, layout: DefaultLayout, role: 'admin'},
    {path: Config.routes.manageruser, component: ManageUser, layout: DefaultLayout, role: 'admin'},
    { path: Config.routes.admin, component: Admin, layout: HeaderOnly, role: 'admin' },
];

export { publicRouters, privateRouters };
