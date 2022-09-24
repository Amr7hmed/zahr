import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Iconleft from "../../images/icon/chevron-left-solid.svg";
import { Authcontext } from '../../store/context';

function Links() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <div className='articles__links'>
            <NavLink to="/">{language === "En" ? "Home Page" : "الصفحه الرئيسيه"}</NavLink>
            <img src={Iconleft} alt="" />
            <span>{language === "En" ? "Articles" : "مقالات"}</span>

            <h4>
            {language === "En" ? "Articles" : "مقالات"}
            </h4>

        </div>
    )
}

export default Links;