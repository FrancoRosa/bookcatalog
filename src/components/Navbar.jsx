import React from 'react';
import { Link } from 'react-router-dom';

const displayItems = () => {
  const menu = document.querySelector('.navbar-menu');
  menu.classList.toggle('is-active');
};

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <p className="navbar-item title">BooksCatalog</p>
      <a onClick={displayItems} href="#0" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/books">Catalog</Link>
        <Link className="navbar-item" to="/about">About</Link>
      </div>

    </div>
  </nav>
);

export default Navbar;
