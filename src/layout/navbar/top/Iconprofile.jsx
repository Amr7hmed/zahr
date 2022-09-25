/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import User from "../../../images/icon/user-icon.png";
import Location from "../../../images/icon/location-icon.png";
import Shopping from "../../../images/icon/shopping-icon.png";
import Logout from "../../../images/icon/Logout-icon.png";
import { Authcontext } from "../../../store/context";

function Iconprofile() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/";
  }
  return (
    <>

      <ul
        className="dropdown-menu navbar__iconprofile"
        aria-labelledby="dropdownMenuLink"
      >
        <li className="dropdown-item">
          <NavLink to="/profile">
            <img src={User} alt="User Icon" className="icon" />
            <span>
              {language === "En" ? " Profile" : "الملف الشخصي"}
            </span>
          </NavLink>
        </li>
        
        <li className="dropdown-item">
          <NavLink to="/myorders">
            <img src={Shopping} alt="Shopping Icon" className="icon" />
            <span>
              {language === "En" ? "My Orders" : "طلباتي"}
            </span>

          </NavLink>
        </li>

        <li className="dropdown-item">
          <NavLink to="/addresses">
            <img src={Location} alt="Shopping Icon" className="icon" />
            <span>
              {language === "En" ? " Addresses" : "العناوين"}
            </span>

          </NavLink>
        </li>

        <li className="dropdown-item">
          <a className="btn btnlogout" onClick={() => handleSubmit()}>
            <img src={Logout} alt="Shopping Icon" className="icon" />
            <span>
              {language === "En" ? "Sign Out" : "  تسجيل الخروج"}
            </span>

          </a>
        </li>
      </ul>

    </>
  );
}

export default Iconprofile;
