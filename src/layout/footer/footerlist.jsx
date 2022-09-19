import React from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';

function FooterList() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (

        <div className='footerlist'>
            <h5>
                    {language === "En"?"WebSite information":"معلومات الموقع"}
            </h5>

            <ul>
                <li><NavLink to="/aboutus">
                    {language === "En"?"About Us":"من نحن"}
                </NavLink></li>
                <li><NavLink to="/">
                    {language === "En"?"Articles":"مقالات"}
                </NavLink></li>
                <li><NavLink to="/connectus">
                    {language === "En"?"Connect Us":"تواصل معنا"}
                </NavLink></li>
                 
            </ul>
        </div>
    )
}

export default FooterList;
/*

                <li><NavLink to="/connectus"></NavLink></li>
*/