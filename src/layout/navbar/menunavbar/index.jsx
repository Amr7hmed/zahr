import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Arbiecicon from '../../../images/icon/Saudi-arabia-icon.png';
import Engilshicon from '../../../images/icon/USA-icon.png';
import { Authcontext } from '../../../store/context';



function MenuNavbar() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const setLanguage = authcontext.setLanguage;

  const Toggolelanguge = () => {
      if (language === "Ar") {
          setLanguage("En")
          localStorage.setItem("language", JSON.stringify("En"));
      } else {
          setLanguage("Ar")
          localStorage.removeItem("language");
      }
  }


  return (<nav className="navbar navbar-expand-lg navbar-light navbar__menunavbar  bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
                <NavLink to="/" className="nav-link">الرئيسية</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" 
          href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          الفئات 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">تحف</a></li>
            <li><a className="dropdown-item" href="#">زهور</a></li>
          </ul>

        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          من نحن 
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          تواصل معنا
          </a>
        </li>
      </ul>
      <div class="d-flex">
        <ul>
          <li  className={language === "Ar" ? 'not_active':null}   onClick={Toggolelanguge}>
            <img src={Arbiecicon} alt="Arbiec icon" />
            <span className="text">عربي</span>
          </li>
          <li className={language === "En" ? 'not_active':null}  onClick={Toggolelanguge}>
            <img src={Engilshicon} alt="Engilsh icon" />
            <span className="text">English</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default MenuNavbar