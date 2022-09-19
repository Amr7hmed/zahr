import React, { useState } from "react";
import { useContext } from "react";
import { Singup } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";
import { Authcontext } from "../../../../store/context";


function ModelSingup() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
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
    Singup(state,setMessage,setToggole);
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
                  placeholder= {language === "En" ? 
                  " Phone Number / Email" 
                  : "رقم الهاتف/ البريد الإلكترونى" }
                  value={state.email || ''}
                  onChange={handleChange} onKeyUp={handleSubmit}/>

              </div>
              <span className="errorfiled">{message}</span>

                <button type="button" 
                className={"btn button-login mb-5 button-active"}
                data-bs-target={toggole === false ?" ":"#singupModal2"}
              data-bs-toggle="modal">
                  
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