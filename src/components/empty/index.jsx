import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Empty(props) {
    const {Image,Title ,Description , Showbutton,ButtonTitle}=props;

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
    <section className='empty-contener'>
        <h5>{Title} </h5>
        <img src={Image} alt="" />
        <p>{Description}</p>
        {Showbutton===false ? "":
        
      <NavLink to="/proudects"  className="button-link" onClick={scrollToTop}>
        {ButtonTitle}
        </NavLink>
      }

    </section>
  )
}

export default Empty;