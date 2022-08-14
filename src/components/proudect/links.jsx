import React from 'react';
import { NavLink } from 'react-router-dom';
import Iconleft from "../../images/icon/chevron-left-solid.svg";


function Links() {
  const Id =1;
  return (
    <div className="proudect__link">
      <NavLink to="/">
        الصفحه الرئيسيه
      </NavLink>

<img src={Iconleft} alt="" />

<NavLink to={`/proudectscategories/${Id}`}>
  نجف
  </NavLink>
  
<img src={Iconleft} alt="" />
<span>كل المنتجات</span>
    </div>
  )
}

export default Links;