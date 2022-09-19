import axios from 'axios';
import React, { useState } from 'react'
import { useContext } from 'react';
import { ConnectUsapi } from '../../api/actions';
import { Api } from '../../api/index';
import { Authcontext } from '../../store/context';
import Links from '../../components/connectus/links';
import CardConnectUs from '../../components/connectus/cardconnectus';

function ConnectUs() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  return (
    <section className="outer">
      <div className="container">
        <Links/>
        <div className="outer__data">
          <h5>
            {language === "En" ?
              <>
                Do you have any questions ?
                <br />
                <br />
                Our customer service team is here to serve you and assist you with your order
              </>
              :
              <>
                هل لديك أي إستفسار ؟
                <br />
                <br />
                فريق خدمة العملاء متواجدون لخدمتك ومساعدتك حيال طلبك
              </>
            }
          </h5>
        </div>

        <div className="outer__row">
          <CardConnectUs/>
        </div>

      </div>
    </section>
  )
}

export default ConnectUs;