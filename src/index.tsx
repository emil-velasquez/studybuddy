import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import LoginPage from './pages/Authenticate/LoginPage';
import RegisterPage from './pages/Authenticate/RegisterPage';
import StartPage from './pages/Authenticate/StartPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetLocationPage from './pages/Main/SetLocationPage';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/main" element={<App />}>
                    <Route path="setLocation" element={<SetLocationPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
