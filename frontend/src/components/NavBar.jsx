import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="">
        <Link to="login">Login</Link> <Link to="register">Register</Link>{' '}
        <Link to="home">Home</Link>{' '}
      </div>
    </div>
  );
};

export default NavBar;
