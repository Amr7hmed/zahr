import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';

function FooterCategories() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='footerlist'>
        <h5>{language === "En"?"Categories":"فئات"}</h5>

        <ul>
            <li><NavLink to="/">زهور</NavLink></li>
            <li><NavLink to="/">تحف</NavLink></li>
            <li><NavLink to="/"> أواني منزلية</NavLink></li>
        </ul>
    </div>
  )
}

export default FooterCategories;