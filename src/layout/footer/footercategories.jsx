import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterCategories() {
  return (
    <div className='footerlist'>
        <h5> فئات</h5>

        <ul>
            <li><NavLink to="/">زهور</NavLink></li>
            <li><NavLink to="/">تحف</NavLink></li>
            <li><NavLink to="/"> أواني منزلية</NavLink></li>
        </ul>
    </div>
  )
}

export default FooterCategories;