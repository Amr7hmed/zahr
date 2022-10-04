
import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import swal from "sweetalert";
import { Api } from "../../../../api";
import { AddNewPassword } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";
import { Authcontext } from "../../../../store/context";

function ModelthreePassword(props) {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const { Code } = props;
  const [state, setState] = useState({
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

  const AddNewPassword = async ( state, setMessage, setToggole, Code) => {
    const options = {
      method: "post",
      url: `${Api}reset-password`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: JSON.stringify({
        email: JSON.parse(localStorage.getItem("email")),
        code: Code,
        ...state,
      }),
    };
    axios(options)
      .then(function (response) {
        console.log("handle success");
        setToggole(true);
        console.log(response);

        if (language === "En") {
          swal("Password Changed Successfully", "", "success");
        } else {
          swal("تم تغيير كلمة السر بنجاح", "", "success");
        }
        window.location.pathname = "/";
      })
      .catch(function (error) {
        if (error.response) {
          setToggole(false);
          console.log(error.response.data);
          setMessage(error.response.data.message);
          console.log(error.response.status);
          console.log(error.response.headers);
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
    AddNewPassword(state, setMessage, setToggole, Code);
  };



  return (
    <div
      className="modal fade"
      id="exampleModalToggle5"
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
            {language === "En" ? " Set A New Password  " : "تعيين كلمة مرور جديده" }

          </h5>
          <div className="modal-body">
            <form>
              <div className="input_form">
                <input type="password" className="form-control"
                  name="password"
                  placeholder={language === "En" ? " Enter the new password  " : "ادخل كلمة المرور الجديده" }
                  value={state.password || ''}
                  onChange={handleChange} />
              </div>

              <div className="input_form">
                <input type="password" className="form-control"
                  name="password_confirmation"
                  placeholder={language === "En" ? "Re-enter The New Password" : " إعد ادخل كلمة المرور الجديده" }
                  value={state.password_confirmation || ''}
                  onChange={handleChange} />
              </div>
              <span className="errorfiled">{message}</span>

              <button type="button" onClick={handleSubmit}
                className={toggole === false ? "btn button-login mb-5 button-disabled" : "btn button-login mb-5 button-active"}>

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
