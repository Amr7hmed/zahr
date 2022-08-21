
import React, { useState } from "react";
import Logo from "../../../../images/logo/layer-logo.png";

function ModelThreeSingup(props) {
  const { language } = props;
  const [state, setState] = useState({
    name: "",
    email: JSON.parse(localStorage.getItem("email")),
    password: "",
    password_confirmation: "",
  });
  const [toggole, setToggole] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setToggole(true);
    setMessage("")
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    
  };

  return (
    <div
      className="modal fade"
      id="singupModal3"
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
                  {language === "En" ? "Complete Your Information" : "أكمل بياناتك" }
          </h5>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="input_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder={language === "En" ? "User Name" : "اسم المستخدم" }
                  name="name"
                  value={state.name || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder={language === "En" ? "ُEmail" : " البريد الالكترونى" }
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <input
                  type="password"
                  className="form-control"
                  placeholder={language === "En" ? "Password" : "كلمة المرور" }
                  name="password"
                  value={state.password || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <input
                  type="password"
                  className="form-control"
                  placeholder={language === "En" ? "Re-enter The Password" : " إعد ادخل كلمة المرور " }
                  name="password_confirmation"
                  value={state.password_confirmation || ''}
                  onChange={handleChange}
                />
              </div>
              <span className="errorfiled">{message}</span>
              <button type="submit"
                className={
                  toggole === false
                    ? "btn button-login mb-5 button-disabled"
                    : "btn button-login mb-5 button-active"
                }
              >
              {language === "En" ? "Create An Account" : "إنشاء الحساب" }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelThreeSingup;
