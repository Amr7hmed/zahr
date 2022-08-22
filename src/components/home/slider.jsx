import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Slider() {
  
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
    <div className='home__slider'>
      <div className="overload"> </div>
      <div className="content">
        <h2>
          مرحبا بكم في زهر!
        </h2>
        <p>
          تحف وزهور عالية الجودة يتم شحنها إليك مباشرة
        </p>
        
      <NavLink to="/proudects"  className="btn" onClick={scrollToTop}>تسوق الان </NavLink>
      </div>
    </div>
  )
}

export default Slider;