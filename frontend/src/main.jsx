import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './Pages/Home.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
