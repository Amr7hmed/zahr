import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Arbiecicon from '../../../images/icon/Saudi-arabia-icon.png';
import Engilshicon from '../../../images/icon/USA-icon.png';
import { Authcontext } from '../../../store/context';



function MenuNavbar(props) {
  const { categories, loading } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const setLanguage = authcontext.setLanguage;
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
  const Toggolelanguge = () => {
    if (language === "Ar") {
      setLanguage("En")
      localStorage.setItem("language", JSON.stringify("En"));
    } else {
      setLanguage("Ar")
      localStorage.removeItem("language");
    }
  }


  return (
    <>

      {loading === false ? (
        ""
      ) : (
        <nav className="navbar navbar-expand-lg navbar-light navbar__menunavbar  bg-light">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={scrollToTop}>
                    {language === "En" ? "Home Page" : "الرئيسية"}
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle"
                    href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {language === "En" ? "Categories" : "الفئات"}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    {categories.map(item =>
                      <li key={item.id}>
                        <NavLink className="dropdown-item"
                          to={`/proudectscategories/${item.id}/${language === "En" ? item.name_en : item.name_ar}`}>
                          {language === "En" ? item.name_en : item.name_ar}
                        </NavLink>
                      </li>
                    )}
                  </ul>

                </li>
                <li className="nav-item">
                  <NavLink to="/aboutus" onClick={scrollToTop} className="nav-link">
                    {language === "En" ? "About Us" : "من نحن"}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/connectus" onClick={scrollToTop} className="nav-link">
                    {language === "En" ? "Connect Us" : "تواصل معنا"}
                  </NavLink>
                </li>
              </ul>
              <div class="d-flex">
                <ul>
                  <li className={language === "Ar" ? 'not_active' : null} onClick={Toggolelanguge}>
                    <img src={Arbiecicon} alt="Arbiec icon" />
                    <span className="text">عربي</span>
                  </li>
                  <li className={language === "En" ? 'not_active' : null} onClick={Toggolelanguge}>
                    <img src={Engilshicon} alt="Engilsh icon" />
                    <span className="text">English</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}

export default MenuNavbar;

/*
  




*/