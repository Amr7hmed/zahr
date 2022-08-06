import React from 'react';
import NavbarBottom from './bottom/index.jsx';
import NavbarTop from './top/index.jsx';

function Navbar() {
  return (
    <nav className="navbar">
      <NavbarTop/>
      <NavbarBottom/>
    </nav>
  )
}

export default Navbar;