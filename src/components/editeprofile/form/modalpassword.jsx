import axios from 'axios';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { Api } from '../../../api';
import Logo from "../../../images/logo/logo.png";
import { Authcontext } from '../../../store/context.js';

function ModalPassword(props) {
  const {setLoading}=props;
  let navigate  = useNavigate();
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [state, setState] = useState({
    password: "",
    password_confirmation: "",
  });


  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };


  const EditeProfilepassword = (password,password_confirmation,language) => {
    const options = {
      method: "put",
      url: `${Api}update-profile`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
  
      data: JSON.stringify({
        'password': password,
        'password_confirmation': password_confirmation,
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      console.log(response);
      if (language === "En") {
          swal("Password changed successfully !", "", "success");
          window.location.pathname = "/profile";
      } else {
          swal("تم تغيير كلمه المرور بنجاح", "", "success");
          window.location.pathname = "/profile";
      }
    })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state.password);
    console.log(state.password_confirmation);
    EditeProfilepassword(state.password,state.password_confirmation,language)
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

          <h4>
                {language === "En" ? "Change Password" : "تغيير كلمة المرور"}
          </h4>

          <input className="form-control" type="password"
            name="password_confirmation_done" placeholder=
            {language === "En" ? "Current Password": "كلمة المرور الحاليه"}
            value={state.password_confirmation_done || ''}
            onChange={handleChange} />


          <input className="form-control" type="password"
            name="password"  
            placeholder={language === "En" ? "Enter a new password": "ادخل كلمة المرور جديدة"}
            value={state.password || ''}
            onChange={handleChange} />


          <input className="form-control" type="password"
            name="password_confirmation" placeholder=
            {language === "En" ? "Re-enter A New Password": "أعد ادخل كلمة المرور جديدة"}
            value={state.password_confirmation || ''}
            onChange={handleChange} />
          <button type="button" className="btn-save" onClick={handleSubmit} aria-label="Close">
            {language === "En" ? "Save": "حفظ"}
            
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalPassword;