import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import swal from "sweetalert";
import { Api } from "../../../../api";
import { SingupCodecomplete } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";
import { Authcontext } from "../../../../store/context";

function ModelThreeSingup() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [state, setState] = useState({
    name: "",
    email: "",
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

  const SingupCodecomplete = async (state, setMessage, setToggole) => {
    const options = {
      method: "post",
      url: `${Api}signup/step3`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        ...state,
      }),
    };
    axios(options)
      .then(function (response) {
        console.log("handle success");
        console.log(response);
        setToggole(true);
        if (language === "En") {
          swal("Account Successfully Created !", "", "success");
        } else {
          swal("تم إنشاء الحساب بنجاح", "", "success");
        }
        window.location.pathname = "/";
      })
      .catch(function (error) {
        if (error.response) {
          setToggole(false);
          setMessage(error.response.data.message);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    SingupCodecomplete(state, setMessage, setToggole);
  };

  return (
    <div
      className="modal fade"
      id="singupModal3"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
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
            {language === "En" ? "Complete Your Information" : "أكمل بياناتك"}
          </h5>
          <div className="modal-body">
            <form >
              <div className="input_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder={language === "En" ? "User Name" : "اسم المستخدم"}
                  name="name"
                  value={state.name || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder={language === "En" ? "ُEmail" : " البريد الالكترونى"}
                  name="email"
                  value={state.email || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <input
                  type="password"
                  className="form-control"
                  placeholder={language === "En" ? "Password" : "كلمة المرور"}
                  name="password"
                  value={state.password || ''}
                  onChange={handleChange}
                />
              </div>

              <div className="input_form">
                <input
                  type="password"
                  className="form-control"
                  placeholder={language === "En" ? "Re-enter The Password" : " إعد ادخل كلمة المرور "}
                  name="password_confirmation"
                  value={state.password_confirmation || ''}
                  onChange={handleChange}
                />
              </div>
              <span className="errorfiled">{message}</span>
              <button type="button"
                onClick={handleSubmit}
                className={
                  toggole === false
                    ? "btn button-login mb-5 button-disabled"
                    : "btn button-login mb-5 button-active"
                }
              >
                {language === "En" ? "Create An Account" : "إنشاء الحساب"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelThreeSingup;
