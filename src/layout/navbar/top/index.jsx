/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import User from "../../../images/icon/icon-user.svg";
import NavLanguage from './navlanguage.jsx';
import InputSerarch from './inputserarch.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import CartIcon from "../../../images/icon/shopping-icon.svg";
import HeartIcon from "../../../images/icon/heart-icon.svg";
import Iconlogin from './Iconlogin.jsx';
import Iconprofile from './Iconprofile.jsx';
import { Authcontext } from '../../../store/context';
import Logo from "../../../images/logo/logo.png";
import IconCart from './iconcart';
import IconWishlist from './iconwishlist';

function NavbarTop(props) {
  const {categories ,loading}=props;
  return (
    <section className='navbar__top'>

      <div className="container">
        <div className='list'>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">

              <div className="left">

                <div className="dropdown">
                  <button
                    className="dropdown-toggle btn_user"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={User} alt="user" />

                  </button>
                  {localStorage.getItem("token") === null ?
                    <Iconlogin /> :
                    <Iconprofile />}
                </div>
                <NavLink to="/favorite" className="favort">
                  {localStorage.getItem("token") === null ?
                    <>
                      <img src={HeartIcon} alt="" />
                    </>
                    : <>
                      <img src={HeartIcon} alt="" />
                      <IconWishlist />
                    </>}
                </NavLink>


                <NavLink to="/cart" className="cart">
                  {localStorage.getItem("token") === null ?
                    <>
                      <img src={CartIcon} alt="" />
                    </>
                    : <>

                      <img src={CartIcon} alt="" />
                      <IconCart />
                    </>
                  }
                </NavLink>

              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="center">
                <NavLink to="/">
                  <img src={Logo} alt="Logo"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                    }} />
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4">
              <div className="right">
                <InputSerarch categories={categories} loading={loading}/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NavbarTop;