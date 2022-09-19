import React from 'react';
import { useContext } from 'react';
import Logo from "../../../../images/logo/layer-logo.png";
import { Authcontext } from '../../../../store/context';

function ModelCart() {
    
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
    return (<>
        <div className="modal fade modelcart" id="exampleModalcart" tabIndex="-1" aria-labelledby="exampleModalcartLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={Logo} alt="Logo" />
                        <p>
                            {language === "En" ? "Please login" : "يرجي تسجيل الدخول"}
                        </p>
                    </div>
                    <div className="modal-footer-cart">
                        <button
                            className="btn button-login button-active"
                            data-bs-toggle="modal"
                            href="#loginModal"
                            role="button"
                        >
                            {language === "En" ? "Sign In" : " تسجيل الدخول"}

                        </button>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}

export default ModelCart;