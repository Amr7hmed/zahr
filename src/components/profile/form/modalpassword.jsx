import React, { useState } from 'react';
import Logo from "../../../images/logo/logo.png";

function ModalPassword() {
  const [state, setState] = useState({
    password: "",
    password_confirmation: "",
    password_confirmation_done: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (<div className="modal fade modalpassword" id="chingepassword" data-bs-backdrop="static"
    data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="image">
            <img src={Logo} alt="Logo" />
          </div>

          <h4>تغير كلمة المرور</h4>


          <input className="form-control" type="password"
            name="password" placeholder="كلمة السر الحالية"
            value={state.password || ''}
            onChange={handleChange} />

          <input className="form-control" type="password"
            name="password_confirmation" placeholder="ادخل كلمة مرور جديدة"
            value={state.password_confirmation || ''}
            onChange={handleChange} />

          <input className="form-control" type="password"
            name="password_confirmation_done" placeholder="أعد ادخل كلمة مرور جديدة"
            value={state.password_confirmation_done || ''}
            onChange={handleChange} />

          <button type="button" className="btn-save" onClick={handleSubmit}>
            حفظ
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalPassword;