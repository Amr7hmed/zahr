/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { NavLink } from "react-router-dom";
import User from "../../../images/icon/user-icon.png";
import Location from "../../../images/icon/location-icon.png";
import Shopping from "../../../images/icon/shopping-icon.png";
import Logout from "../../../images/icon/Logout-icon.png";

function Iconprofile(props) {
  const { language } = props;
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
              <img src={User} alt="User Icon" className="icon"/>
            {language === "En" ? " Profile" : " ملفى الشخصي" } 
              </NavLink>
          </li>
          <li className="dropdown-item">
            <NavLink to="/addresses">
              <img src={Location} alt="Shopping Icon" className="icon"/>
            {language === "En" ? " Addresses" : "العناوين" } 
              
              </NavLink>
          </li>



          <li className="dropdown-item">
            <NavLink to="/myorders">
              <img src={Shopping} alt="Shopping Icon" className="icon"/>
            {language === "En" ? "My Orders" : "طالباتي" } 
              
              </NavLink>
          </li>


          <li className="dropdown-item">
            <button type="submit" className="btn" onClick={() => handleSubmit()}>
              <img src={Logout} alt="Shopping Icon" className="icon"/>
            {language === "En" ? "Sign Out" : "  تسجيل الخروج" } 
             
              </button>
          </li>
        </ul>

    </>
  );
}

export default Iconprofile;
