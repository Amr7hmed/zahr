import React from 'react'
import { NavLink } from 'react-router-dom';

function FooterList() {
    return (

        <div className='footerlist'>
            <h5>معلومات الموقع</h5>

            <ul>
                <li><NavLink to="/">من نحن</NavLink></li>
                <li><NavLink to="/">مقالات</NavLink></li>
                <li><NavLink to="/">تواصل معنا</NavLink></li>
            </ul>
        </div>
    )
}

export default FooterList;