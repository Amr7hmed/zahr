import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GetDatapages } from '../../api/actions';
import { Authcontext } from '../../store/context';

function FooterEnd() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);
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


  useEffect(() => {
    GetDatapages(setLoading,setPages)
  }, [loading]);


  return (
    
    <>
        {loading === false ? (
          ""
        ) : (
          
    <div className="footer-end">
    <ul>
      {pages.map(item =>
        
      <li key={item.id}>
        
        <NavLink to={`/pages/${item.id}`} key={item.id}  onClick={scrollToTop}>
          {language === "En" ? item.name_en : item.name_ar}
          </NavLink>
      </li>
        )}
    </ul>
      </div>
        )}
      </>
  )
}

export default FooterEnd;