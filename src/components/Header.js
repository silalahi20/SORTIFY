import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../img/logo.svg';
import '../styles/Header.css';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="SORTIFY Logo" className="logo" />
        </Link>
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <Link to="/profile" className="profile">Profile</Link>
      ) : (
        <Link to="/login" className="login">Login</Link>
      )}
    </header>
  );
};

export default Header;
