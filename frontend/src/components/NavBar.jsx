import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import { Link, useNavigate } from 'react-router-dom';
import { removeUserToken } from '../Auth/authLocalStorage';

const NavBar = ({
  user,
  isVerified,
  setRefreshToken,
  setUser,
  setIsVerified,
}) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    setRefreshToken(true);
    const resultLogout = await removeUserToken();
    if (resultLogout) {
      setRefreshToken(false);
      setUser(null);
      setIsVerified(false);
      navigate('/home');
      console.log('logged out');
    }
  };

  return (
    <div>
    <div className="">
      <Link to="home">Home</Link> 
      {isVerified ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <div>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      )}
    </div>
  </div>
  );
};

export default NavBar;
