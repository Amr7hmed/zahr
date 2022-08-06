/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo/logo.png";
import Facebooklogo from "../../images/icon/fb.png";
import Insta from "../../images/icon/insta.png";
import Twiter from "../../images/icon/twiter.png";

function FooterLogo() {
  return (
    <div className="footerlogo">
      <NavLink to="/">
        <span className='logo'>
          <img src={Logo} alt="Logo" />
        </span>
      </NavLink>

      <ul className='scoulemedia'>
        <li>
          <a href="#" target="_blank">
            <img src={Facebooklogo} alt="" />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src={Insta} alt="" />
          </a>

        </li>
        <li>
          <a href="#" target="_blank">
            <img src={Twiter} alt="" />
          </a>

        </li>
      </ul>
    </div>
  )
}

export default FooterLogo;