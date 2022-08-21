import React, { useState } from "react";
import Logo from "../../../../images/logo/layer-logo.png";

function ModeltwoSingup(props) {
  const { language } = props;
  const [state, setState] = useState({
    code: "",
  });
  const [toggole, setToggole] = useState(false);
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      [e.target.name]: value
    });
    setMessage("")
    setToggole(false)
  };



  const handleSubmit = (e) => {
    e.preventDefault();


  };


  return (
    <div
      className="modal fade"
      id="singupModal2"
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
            {language === "En" ? "Enter The Verification Code" : " أدخل رمز التحقق"}
          </h5>
          <div className="modal-body">
            <form>

              <div className="input_form">
                <input type="text" className="form-code"
                  onChange={handleChange} />
                <input type="text" className="form-code"
                  onChange={handleChange} />
                <input type="text" className="form-code"
                  onChange={handleChange} />
                <input type="text" className="form-code"
                  onChange={handleChange} />
              </div>
              <span className="errorfiled">{message}</span>
              <button type="button"
                className={"btn button-login mb-5 button-active"}
                data-bs-target={toggole === false ? "#singupModal3" : "#singupModal3"}
                data-bs-toggle="modal">
                {language === "En" ? "Confirmation" : "تأكيد"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModeltwoSingup;
