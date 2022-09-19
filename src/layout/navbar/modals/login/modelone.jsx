import React, { useState } from "react";
import { useContext } from "react";
import { login } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";
import { Authcontext } from "../../../../store/context";

function Modelone() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

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
    login(state, setMessage);
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
            {language === "En" ? "Sign In" : " تسجيل الدخول"}
          </h5>
          <div className="modal-footer">
          {language === "En" ? "Don't Have An Account?" : " لا تملك حساب ؟" }
            <a
              className="btn"
              data-bs-target="#singupModal"
              data-bs-toggle="modal"
              href="#singupModal"
            >
            {language === "En" ? "Create Your Account Now" : " انشىء حسابك الان" }
            </a>
          </div>
          <div className="modal-body">
            <form >
              <div className="input_form">
                <input type="text" className="form-control"
                  name="email"
                  placeholder={language === "En" ? " Phone Number / Email" : "رقم الهاتف/ البريد الإلكترونى"}
                  value={state.email || ''}
                  onChange={handleChange} />
              </div>
              <div className="input_form">
                <input type="password" className="form-control"
                  name="password"
                  placeholder={language === "En" ? "Password" : " كلمة المرور"}
                  value={state.password}
                  onChange={handleChange} />
              </div>

              <div className="forget_password">
                <span
                  className="btn"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal">
                  {language === "En" ? "Did You Forget Your Password?" : "هل نسيت كلمة المرور؟"}
                </span>

              </div>
              <span className="errorfiled">{message}</span>


              <button type="button"
                className={"btn button-login button-active"} onClick={handleLogin}>
                {language === "En" ? "Sign In" : " تسجيل الدخول" }

              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modelone;
