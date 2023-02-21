import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotPound from './component/notfound/NotFound';
import Home from './pages/home/Home';
import Weather from './pages/weather/Weather';
import Location from './pages/location/Location';
import Option from './pages/option/Option';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotPound />,
        children: [
            { index: true, element: <Home /> },
            { path: '/Weather', element: <Weather /> },
            { path: '/Location/', element: <Location /> },
            { path: '/Option', element: <Option /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();