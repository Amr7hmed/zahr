import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GetCategories } from '../../api/actions';
import { Authcontext } from '../../store/context';

function FooterCategories() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [loading, setLoading] = useState(false);
  const [categories, setcategories] = useState([]);
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
    GetCategories(setLoading, setcategories)
  }, [loading]);

  return (<>
    {loading === false ? (
      ""
    ) : (

      <div className='footerlist footerlist_categories'>
        <h5>{language === "En" ? "Categories" : "فئات"}</h5>
        <ul>
          {categories.map(item =>
            <li key={item.id}>
              <NavLink to={`/proudectscategories/${item.id}/${language === "En" ? item.name_en : item.name_ar}`}
                onClick={scrollToTop}>
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

export default FooterCategories;

/*
<>
        {loading === false ? (
          ""
        ) : (
          
    <div className='footerlist'>
        <h5>{language === "En"?"Categories":"فئات"}</h5>
    <ul>
      {categories.map(item =>
        
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
*/