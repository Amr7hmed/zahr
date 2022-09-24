import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';

function FooterList() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

    return (

        <div className='footerlist'>
            <h5>
                    {language === "En"?"WebSite information":"معلومات الموقع"}
            </h5>

            <ul>
                <li>
                  <NavLink to="/aboutus" onClick={scrollToTop}>
                    {language === "En"?"About Us":"من نحن"}
                </NavLink>
                </li>
                <li><NavLink to="/articles" onClick={scrollToTop}>
                    {language === "En"?"Articles":"مقالات"}
                </NavLink></li>
                <li>
                  <NavLink to="/connectus" onClick={scrollToTop}>
                    {language === "En"?"Connect Us":"تواصل معنا"}
                </NavLink>
                </li>
                 
            </ul>
        </div>
    )
}

export default FooterList;