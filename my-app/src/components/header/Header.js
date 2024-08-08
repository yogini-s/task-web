import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="names">
          <span className="name">About </span>
          <span className="name">Features</span>
          <span className="name">Priceing</span>
          <div className="logo">Logo</div>
          <span className="name">Gallery</span>
          <span className="name">Team</span>
          <div className="search-icon">
            <FaSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
