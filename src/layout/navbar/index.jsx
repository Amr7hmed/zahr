import React, { useState } from 'react';
import NavbarTop from './top/index.jsx';
import MenuNavbar from './menunavbar/index.jsx';
import { GetCategories } from '../../api/actions.js';
import { useEffect } from 'react';

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);
  
  useEffect(() => {
    GetCategories(setLoading, setcategories);
  }, [loading]);


  return (
    <nav className="navbar navbar-contener">
      <NavbarTop categories={categories} loading={loading}/>
      <MenuNavbar  categories={categories} loading={loading}/>
    </nav>
  )
}

export default Navbar;