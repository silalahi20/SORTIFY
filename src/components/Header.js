// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/"> {""}
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
      <Link to="/login" className="login">Login</Link>
    </header>
  );
};

export default Header;
