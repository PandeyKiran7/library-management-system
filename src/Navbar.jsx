import React from 'react';
import './components/styles/Navbar.css';

const Navbar = ({ isLoggedIn, onLogout, onLoginClick }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Library Management</h1>
      {isLoggedIn ? (
        <button onClick={onLogout} className="nav-btn">Logout</button>
      ) : (
        <button onClick={onLoginClick} className="nav-btn">Login</button>
      )}
    </nav>
  );
};

export default Navbar;
