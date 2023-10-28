import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './components/NavBar';
import Root from './routes/Root';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: 'home',
          element: <Home />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'login',
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
