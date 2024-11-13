// src/components/Header.js
import React from 'react';
import logo from '../img/logo.svg'; // Importing the logo from the img folder
import '../styles/Header.css'; // Ensure the correct import path for the CSS

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="SORTIFY Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#learn">Learn</a></li>
          <li><a href="#practice">Practice</a></li>
          <li><a href="#test">Test</a></li>
          <li><a href="#about-us">About Us</a></li>
        </ul>
      </nav>
      <a href="#get-started" className="get-started">Get Started</a> {/* Tombol Get Started */}
    </header>
  );
};

export default Header;