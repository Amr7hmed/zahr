import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../../../images/logo/logo.png";

function NavbarTop() {
  return (
    <section className='navbar__top'>

      <NavLink to="/">
        <img src={Logo} alt="Logo" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }}/>
      </NavLink>
    </section>
  )
}

export default NavbarTop;