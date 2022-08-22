import React, { useState } from "react";
import { SingupCode } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";

function ModeltwoSingup(props) {
  const { language } = props;
  const [state, setState] = useState({
    code: "",
  });
  const [toggole ,setToggole] = useState(false);
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
SingupCode(state,setMessage,setToggole);
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
                <input type="text" className="form-control"  
                  name="code"
                  onChange={handleChange} />
                  
                <button className="btn send" type="button" onClick={handleSubmit}>
                  {language === "En" ? "Send" : "أرسال" }
                  </button>
              </div>
              <span className="errorfiled">{message}</span>
              <button type="button"
                className={toggole ===false?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}
                data-bs-toggle="modal" onClick={handleSubmit} 
                data-bs-target={toggole ===false?" ": "#singupModal3"}>

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

/*

                <input type="text" className="form-code"
                  onChange={handleChange} />
                <input type="text" className="form-code"
                  onChange={handleChange} />
                <input type="text" className="form-code"
                  onChange={handleChange} />
*/
// 