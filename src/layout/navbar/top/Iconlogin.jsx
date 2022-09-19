/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import Login from "../modals/login/index.jsx";

function Iconlogin() {
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
               تسجيل الدخول 
              
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
                 إنشاء حساب 
            </button>
          </li>
        </ul>

      <Login/>
    </>
  );
}

export default Iconlogin;
