import React from "react";
import { NavLink } from "react-router-dom";
import Iconleft from "../../images/icon/chevron-left-solid.svg";

function Links() {
  return (
    <section className="proudects__categories__links">
      <NavLink to={`/`} >الصفحه الرئيسيه</NavLink>

      <img src={Iconleft} alt="" />
      <span>كل المنتجات</span>


    </section>
  );
}

export default Links;
