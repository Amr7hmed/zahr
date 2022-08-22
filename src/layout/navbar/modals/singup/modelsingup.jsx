import React, { useState } from "react";
import { Singup } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";


function ModelSingup(props) {
  const { language } = props;
  const [state, setState] = useState({
    email: "",
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
    Singup(state,setMessage);
  };



  return (
    <div
      className="modal fade"
      id="singupModal"
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
              {language === "En" ? "Create A New Account" : "إنشاء حساب جديد" }
          </h5>
          <div className="modal-body">
            <form>
              <div className="input_form input_code">
                <input type="text" className="form-control"  
                  name="email"
                  placeholder="رقم الهاتف/ البريد الإلكترونى"
                  value={state.email || ''}
                  onChange={handleChange}/>

              </div>
              <span className="errorfiled">{message}</span>

                <button type="button" 
                className={state.email ===''?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}
                data-bs-target={state.email ===''?" ":"#singupModal2"}
              data-bs-toggle="modal" onClick={handleSubmit}>
                  
              {language === "En" ? "Send Code" : "أرسال الرمز" }
                
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModelSingup;