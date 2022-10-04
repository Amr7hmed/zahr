import React, { useState } from "react";
import { useContext } from "react";
import { SendEmail } from "../../api/actions";
import { Authcontext } from "../../store/context";

function FooterSms() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [validation, setValidation] = useState(true);
  const [state, setState] = useState({
    email: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      [e.target.name]: value,
    });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    //login(state, setMessage);
    console.log(state.email);
    if (state.email === ""){
      setValidation(false);
    } else {
      setValidation(true);
      SendEmail(state.email);
   }
   setState({email: ""});
  };
  return (
    <div className="footersms">
      <h4>
      {language === "En"?"Subscribe To Our Newsletter":" اشترك في نشرتنا الإخبارية"}
        </h4>
      <div>
        <div 
            className={validation === false && state.email === "" ? "input position-relative" : "input"} >
          <input type="email" placeholder={language === "En"?"Your E-mail":"بريدك الالكتروني"} 
          name="email" value={state.email}
          className={validation === false && state.email === "" ? "form-control is-invalid" : "form-control"}
          onChange={handleChange} />
          
          <div className="invalid-feedback">
              {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
            </div>
        </div>
        <button type="button" className="btn btn-send" onClick={handleEmail}>
      {language === "En"?"Subscription":"الإشتراك"}
        </button>
      </div>
    </div>
  );
}

export default FooterSms;
