import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Iconleft from "../../images/icon/chevron-left-solid.svg";
import { Authcontext } from '../../store/context';


function Links(props) {
  const Id = 1;
  const {Category,Title}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className="proudect__link">
      <NavLink to="/">
          {language === "En" ? "Home Page" : "الصفحة الرئيسية"} 
      </NavLink>

      <img src={Iconleft} alt="" />

      <NavLink to={`/proudects`}>
        {Category}
      </NavLink>

      <img src={Iconleft} alt="" />
      <span>{Title}</span>
    </div>
  )
}

export default Links;