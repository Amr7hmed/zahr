import React, { useState } from "react";
import { useContext } from "react";
import { ResetPasswordCode } from "../../../../api/actions";
//import { SingupCode } from "../../../../api/actions";
import Logo from "../../../../images/logo/layer-logo.png";
import { Authcontext } from "../../../../store/context";

function ModeltwoPassword(props) {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const {setCode, codedata}=props;
    const [state, setState] = useState({
        code: "",
    });
    const [toggole, setToggole] = useState(false);
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
        ResetPasswordCode(state, setMessage, setToggole)
        setCode(state.code);
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
                        {language === "En" ? "Enter The Verification Code" : " أدخل رمز التحقق"}
                    </h5>
                    <div className="modal-body">
                        <form>

                            <div className="input_form">
                                <input type="text" className="form-control"
                                    name="code"
                                    onChange={handleChange} onKeyUp={handleSubmit} />
                                {/*
                                <button className="btn send" type="button" onClick={handleSubmit}>
                                    {language === "En" ? "Send" : "أرسال"}
                                </button>
                                */}
                            </div>
                            {toggole === false ? <span className="errorfiled">{message}</span>:""}
                            <button type="button"
                                className={toggole === false ? "btn button-login mb-5 button-disabled" : "btn button-login mb-5 button-active"}
                                data-bs-toggle="modal"
                                data-bs-target={toggole === false ? " " : "#exampleModalToggle5"}>

                                {language === "En" ? "Confirmation" : "تأكيد"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModeltwoPassword