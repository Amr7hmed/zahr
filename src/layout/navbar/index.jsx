import React from 'react';
import NavbarTop from './top/index.jsx';
import MenuNavbar from './menunavbar/index.jsx';

function Navbar() {
  return (
    <nav className="navbar navbar-contener">
      <NavbarTop/>
      <MenuNavbar/>
    </nav>
  )
}

export default Navbar;