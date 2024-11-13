// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.svg';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="SORTIFY Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/learn">Learn</Link></li>
          <li><Link to="/practice">Practice</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>
      <Link to="/get-started" className="get-started">Get Started</Link>
    </header>
  );
};

export default Header;
