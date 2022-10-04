/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo/logo.png";
import Facebooklogo from "../../images/icon/fb.png";
import Insta from "../../images/icon/insta.png";
import Twiter from "../../images/icon/twiter.png";
import { GetSettings } from '../../api/actions';

function FooterLogo() {
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState([]);

  
   
  useEffect(() => {
    GetSettings(setLoading,setSettings) ;
   }, [loading]);

  return (<>
    {loading === false ? (
      ""
    ) : (
    <div className="footerlogo">
      <NavLink to="/">
        <span className='logo'>
          <img src={Logo} alt="Logo" />
        </span>
      </NavLink>

      <ul className='scoulemedia'>
        <li>
          <a href={settings.facebook} target="_blank">
            <img src={Facebooklogo} alt="" />
          </a>
        </li>
        <li>
          <a href={settings.instagram} target="_blank">
            <img src={Insta} alt="" />
          </a>

        </li>
        <li>
          <a href={settings.twitter} target="_blank">
            <img src={Twiter} alt="" />
          </a>

        </li>
      </ul>
    </div>)}
  </>
  )
}

export default FooterLogo;