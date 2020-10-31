import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/catalog">Catalog</Link>
    <Link to="/info">Info</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Navbar;