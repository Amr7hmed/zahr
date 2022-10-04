import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import OpenBook from '../../images/icon/open-book.png';
import { Authcontext } from '../../store/context';

function CardArticles(props) {
    const {Image , TextArticles ,Id}=props;
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
    <div className='articles__card'>
        <div className="image"><img src={Image} alt="" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                }} /></div>
        <div className="text">{TextArticles}</div>
        <NavLink to={`/article/${Id}`} className="btn-read"  onClick={scrollToTop}>
            <span className='text'> {language === "En" ? "Read" : "اقرأ"}</span>
            <span className="imageicon">
                <img src={OpenBook} alt="" />
            </span>
        </NavLink>
    </div>
  )
}

export default CardArticles