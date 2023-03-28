import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { AuthProvider } from './context/AuthProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </AuthProvider>
    </React.StrictMode>,
);
reportWebVitals();
