import React from 'react'
import { NavLink } from 'react-router-dom';
import User from "../../../images/icon/user.png";
import NavLanguage from './navlanguage.jsx';
import InputSerarch from './inputserarch.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faPhone } from '@fortawesome/free-solid-svg-icons';
import CartIcon from "../../../images/icon/icon-cart.png";
import HeartIcon from "../../../images/icon/icon-heart.png";

function NavbarBottom() {
  return (
    <section className='navbar__bottom'>

      <div className="container">
        <div className='list'>
          <div className="left">

            <NavLink to="/profile" className="user">
              <img src={User} alt="user"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                }} />
            </NavLink>

            <NavLink to="/favorite" className="favort">
              <img src={HeartIcon} alt="" />
            </NavLink>

            <NavLink to="/cart" className="cart">
              <img src={CartIcon} alt="" />
            </NavLink>

            <span className="phone">
              <FontAwesomeIcon icon={faPhone} />
              <span className='text'>
                05849832999
              </span>
            </span>
          </div>
          <div className="right">
            <NavLanguage language={"Ar"}/>
            <InputSerarch />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavbarBottom;