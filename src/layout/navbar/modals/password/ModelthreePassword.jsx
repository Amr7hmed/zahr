
import React, { useState } from "react";
import Logo from "../../../../images/logo/layer-logo.png";

function ModelthreePassword() {
  const [state, setState] = useState({
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
    id="exampleModalToggle4"
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
           تعيين كلمة مرور جديدة
          
          </h5>
          <div className="modal-body">
            <form>
              <div className="input_form">
                <input type="password" className="form-control" 
                  name="password"
                  placeholder="ادخل كلمة المرور الجديده"
                  value={state.password || ''}
                  onChange={handleChange} />
              </div>

              <div className="input_form">
                <input type="password" className="form-control"  
                  name="password_confirmation"
                  placeholder="إعد ادخل كلمة المرور الجديده"
                  value={state.password_confirmation || ''}
                  onChange={handleChange}/>
              </div>
              <span className="errorfiled">{message}</span>

              <button  type="button" onClick={handleSubmit}
                className={toggole ===false?"btn button-login mb-5 button-disabled":"btn button-login mb-5 button-active"}>
                
              حفظ
               </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelthreePassword;
