import React from "react";
import { NavLink } from "react-router-dom";
import Iconleft from "../../../images/icon/chevron-left-solid.svg";

function Links(props) {
  const {name}=props;
  return (
    <section className="proudects__all__links">
      <NavLink to={`/`} >الصفحه الرئيسيه</NavLink>

      <img src={Iconleft} alt="" />
      <span>{name}</span>


    </section>
  );
}

export default Links;
