import React from "react";
import { useContext } from "react";
import { Authcontext } from "../../store/context";

function FooterSms() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className="footersms">
      <h4>
      {language === "En"?"Subscribe To Our Newsletter":" اشترك في نشرتنا الإخبارية"}
        </h4>
      <div>
        <div className="input">
          <input type="email" placeholder={language === "En"?"Your E-mail":"بريدك الالكتروني"} />
        </div>
        <button type="button" className="btn btn-send">
      {language === "En"?"Subscription":"الإشتراك"}
        </button>
      </div>
    </div>
  );
}

export default FooterSms;
