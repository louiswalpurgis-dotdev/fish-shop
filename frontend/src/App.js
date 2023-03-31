import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NextUIProvider } from '@nextui-org/react';

import { persistor, store } from './store';
import { publicRouters, privateRouters } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import RequireAuth from '~/components/RequireAuth';
import Theme from './components/theme';

const ROLES = {
    user: false,
    admin: true,
};
function App() {
    return (
        <Router>
            <NextUIProvider theme={Theme()}>
                <Provider store={store}>
                    <PersistGate persistor={persistor} loading={null}>
                        <div className="App">
                            <Routes>
                                {publicRouters.map((route, index) => {
                                    const Page = route.component;
                                    let Layout = DefaultLayout;
                                    if (route.layout) {
                                        Layout = route.layout;
                                    } else if (route.layout === null) {
                                        Layout = Fragment;
                                    }
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <React.Suspense fallback="loading">
                                                        <Page />
                                                    </React.Suspense>
                                                </Layout>
                                            }
                                        />
                                    );
                                })}
                                {privateRouters.map((route, index) => {
                                    const Page = route.component;
                                    let Layout = DefaultLayout;
                                    if (route.layout) {
                                        Layout = route.layout;
                                    } else if (route.layout === null) {
                                        Layout = Fragment;
                                    }
                                    return (
                                        <Route key={index} element={<RequireAuth allowedRoles={ROLES[route.role]} />}>
                                            <Route
                                                path={route.path}
                                                element={
                                                    <Layout>
                                                        <Page />
                                                    </Layout>
                                                }
                                            />
                                        </Route>
                                    );
                                })}
                            </Routes>
                        </div>
                    </PersistGate>
                </Provider>
            </NextUIProvider>
        </Router>
    );
}

export default App;
