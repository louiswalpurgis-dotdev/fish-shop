const routes = {
    home: '/',
    about: '/about',
    cart:'/cart',
    profile: '/profile/:username',
    admin: '/admin',
    setting: '/setting',
    login: '/login',
    register: '/register',
    logout: '/logout',
    product: '/product/:productId',
    productupdate: '/product/:productId/update',
    createproduct:'/admin/createproduct',
    managerproduct:'/admin/products',
    manageruser:'/admin/users',
    unauthorized: '/unauthorized'
};

export default routes;
