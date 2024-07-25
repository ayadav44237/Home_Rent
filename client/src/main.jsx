import React from 'react'
import ReactDOM from 'react-dom/client'
import  HomePage  from './components/HomePage';
import Login from './components/Login';
import Layout from './components/Layout';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register';
import axios from "axios";

axios.defaults.baseURL="http://localhost:4000"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Assuming Layout is your layout component
    children: [
      { path: '/', element: <HomePage /> }, // Index route inside Layout
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
