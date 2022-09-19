import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import { ConnectUsapi } from '../../api/actions';
import { Api } from '../../api/index';
import { Authcontext } from '../../store/context';

function FormConnectUs() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ConnectUsapi(state)
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


              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "User Name" : "اسم المستخدم"}

                </label>
                <input type="text" className="form-control"
                  name="name"
                  value={state.name || ''}
                  onChange={handleChange} />
              </div>


              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "Mobile Number" : "رقم الجوال"}

                </label>
                <input type="text" className="form-control"
                  name="phone"
                  value={state.phone || ''}
                  onChange={handleChange} />
              </div>



              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "Email" : " البريد الإلكترونى"}

                </label>
                <input type="text" className="form-control"
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange} />
              </div>


            </div>
            <div className="col-md-12 col-lg-6">

              <div className="input_form">
                <label htmlFor="recipient-name" className="col-form-label">
                  {language === "En" ? "Write your message here" : "اكتب رسالتك هنا"}

                </label>
                <textarea className="form-control"
                  name="message"
                  value={state.message || ''}
                  onChange={handleChange} />
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