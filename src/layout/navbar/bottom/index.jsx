/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { NavLink } from 'react-router-dom';
import User from "../../../images/icon/user.png";
import NavLanguage from './navlanguage.jsx';
import InputSerarch from './inputserarch.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import CartIcon from "../../../images/icon/icon-cart.png";
import HeartIcon from "../../../images/icon/icon-heart.png";
import Iconlogin from './Iconlogin.jsx';
import Iconprofile from './Iconprofile.jsx';
function NavbarBottom() {
  return (
    <section className='navbar__bottom'>

      <div className="container">
        <div className='list'>
          <div className="left">

            <div className="dropdown">
              <button
                className="btn  dropdown-toggle btn_user"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={User} alt="user" />

              </button>
              <Iconprofile/>
            </div>

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
            <NavLanguage language={"Ar"} />
            <InputSerarch />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavbarBottom;