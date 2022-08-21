
import React, { useState } from "react";
import Logo from "../../../../images/logo/layer-logo.png";

function ModelonePassword() {
  const [state, setState] = useState({
    email: "",
  });
  const [toggole ,setToggole] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
    setMessage("")
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", JSON.stringify(state.email));
  };

  return (
    <div
      className="modal fade"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
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
            نسيت كلمة المرور
          </h5>
          <div className="modal-body">
            <form >
              <div className="input_form">
                <input type="text" className="form-control"  
                  name="email"
                  placeholder="رقم الهاتف/ البريد الإلكترونى"
                  value={state.email || ''}
                  onChange={handleChange}/>
              </div>

              <span className="errorfiled">{message}</span>
                <button
                className={state.email === "" ?"btn button-login button-disabled":"btn button-login button-active"}
                data-bs-target={toggole === false?"#exampleModalToggle4":"#exampleModalToggle4"}
              data-bs-toggle="modal" type="button" onClick={handleSubmit}>
             ارسل الرمز
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelonePassword;
