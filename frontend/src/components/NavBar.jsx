import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="">
        <Link to="home">Home</Link>{' '} <Link to="login">Login</Link>{' '}
        <Link to="register">Register</Link>{' '}
      </div>
    </div>
  );
};

export default NavBar;
