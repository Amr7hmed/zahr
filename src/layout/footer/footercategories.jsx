import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterCategories() {
  return (
    <div className='footerlist'>
        <h5> فئات</h5>

        <ul>
            <li><NavLink to="/">زهور</NavLink></li>
            <li><NavLink to="/">نحف</NavLink></li>
            <li><NavLink to="/">أوانى منزليه</NavLink></li>
        </ul>
    </div>
  )
}

export default FooterCategories;