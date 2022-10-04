import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import { ConnectUsapi } from '../../api/actions';
import { Api } from '../../api/index';
import { Authcontext } from '../../store/context';

function FormConnectUs() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [validation, setValidation] = useState(true);
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email === "" ||
      state.phone === "" ||
      state.name === "" ||
      state.message === "") {
      setValidation(false);
    } else {
      setValidation(true);
      ConnectUsapi(state)
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <section className="outer">
      <div className="container">
        <div className="outer__header">
          <h3>

            {language === "En" ? "Connect Us" : "تواصل معنا "}
          </h3>



        </div>
        <div className='outer__content'>
          <div className="row">
            <div className="col-md-12 col-lg-6">


              <div
                className={validation === false && state.name === "" ? "input_form position-relative" : "input_form"} >
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "User Name" : "اسم المستخدم"}

                </label>
                <input type="text"
                  className={validation === false && state.name === "" ? "form-control is-invalid" : "form-control"}
                  name="name"
                  value={state.name || ''}
                  onChange={handleChange} />

                <div className="invalid-feedback">
                  {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
                </div>

              </div>


              <div 
                className={validation === false && state.phone === "" ? "input_form position-relative" : "input_form"} >
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "Mobile Number" : "رقم الجوال"}

                </label>
                <input type="text" 
                  className={validation === false && state.phone === "" ? "form-control is-invalid" : "form-control"}
                  name="phone"
                  value={state.phone || ''}
                  onChange={handleChange} />

                  
                <div className="invalid-feedback">
                  {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
                </div>
              </div>



              <div 
                className={validation === false && state.email === "" ? "input_form position-relative" : "input_form"} >
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "Email" : " البريد الإلكترونى"}

                </label>
                <input type="text" 
                  className={validation === false && state.email === "" ? "form-control is-invalid" : "form-control"}
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange} />  
                  <div className="invalid-feedback">
                    {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
                  </div>
              </div>


            </div>
            <div className="col-md-12 col-lg-6">

              <div 
                className={validation === false && state.message === "" ? "input_form position-relative" : "input_form"} >
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "Write your message here" : "اكتب رسالتك هنا"}

                </label>
                <textarea 
                  className={validation === false && state.message === "" ? "form-control is-invalid" : "form-control"}
                  name="message"
                  value={state.message || ''}
                  onChange={handleChange} />  
                  <div className="invalid-feedback">
                    {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
                  </div>
              </div>
            </div>

            <div className="col-12">

              <button className="btn send" type="button" onClick={handleSubmit}>

                {language === "En" ? "Send" : "أرسال"}

              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FormConnectUs;