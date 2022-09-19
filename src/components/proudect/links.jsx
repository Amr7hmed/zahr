import React from 'react';
import { NavLink } from 'react-router-dom';
import Iconleft from "../../images/icon/chevron-left-solid.svg";


function Links(props) {
  const Id = 1;
  const {Category,Title}=props;
  return (
    <div className="proudect__link">
      <NavLink to="/">
        الصفحه الرئيسيه
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