import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { Authcontext } from "../../store/context";

function CardCategories(props) {
  const { Image, NameEn, NameAr ,Id } = props;
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
    <NavLink to={`/proudectscategories/${Id}/${language === "En" ? NameEn:NameAr}`} 
    className='categories_card' onClick={scrollToTop}>
      <div className="img">
        <img src={Image} alt="" />
      </div>
      <div className="text">
        <h6>{NameAr}</h6>
      </div>
    </NavLink>
  )
}

export default CardCategories;