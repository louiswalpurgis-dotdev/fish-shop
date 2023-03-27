import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';
import { publicRouters, privateRouters } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import RequireAuth from '~/components/RequireAuth';



const ROLES = {
    user: 'false',
    admin: 'true',
};

function App() {
    return (
        <Router>
            <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div className="App px-10">
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
        </Router>
    );
}

export default App;
