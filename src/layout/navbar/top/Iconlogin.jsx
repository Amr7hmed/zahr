/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext } from "react";
import { Authcontext } from "../../../store/context.js";
import Login from "../modals/login/index.jsx";

function Iconlogin() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li className="dropdown-item">
            <button
              className="btn"
              data-bs-toggle="modal"
              href="#loginModal"
              role="button"
            >
            {language === "En" ? "Sign In" : "تسجيل الدخول"}  
            </button>
          </li>
          <li className="dropdown-item">
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              href="#singupModal"
              role="button"
            >
            {language === "En" ? "Create An Account" : "إنشاء حساب"}  
            </button>
          </li>
        </ul>

      <Login/>
    </>
  );
}

export default Iconlogin;
