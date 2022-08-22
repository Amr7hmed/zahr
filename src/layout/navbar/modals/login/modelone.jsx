import React, { useState } from "react";
import { login } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";

function Modelone() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setMessage("")
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(state,setMessage);
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <img src={Logo} alt="" className="logo" />
          <h5 className="modal-title" id="exampleModalToggleLabel">
            تسجيل الدخول
          </h5>
          <div className="modal-footer">
            لا تملك حساب ؟
            <a
              className="btn"
              data-bs-target="#singupModal"
              data-bs-toggle="modal"
              href="#singupModal"
            >
              انشىء حسابك الان
            </a>
          </div>
          <div className="modal-body">
            <form >
              <div className="input_form">
                <input type="text" className="form-control"
                  name="email"
                  placeholder="رقم الهاتف/ البريد الإلكترونى"
                  value={state.email || ''}
                  onChange={handleChange} />
              </div>
              <div className="input_form">
                <input type="password" className="form-control"
                  name="password"
                  placeholder="كلمة المرور"
                  value={state.password}
                  onChange={handleChange} />
              </div>

              <div className="forget_password">
                <span
                  className="btn"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal">هل نسيت كلمة المرور؟

                </span>

              </div>
              <span className="errorfiled">{message}</span>


              <button type="button"
                className={ "btn button-login button-active"} onClick={handleLogin}> تسجيل الدخول

              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelone;
