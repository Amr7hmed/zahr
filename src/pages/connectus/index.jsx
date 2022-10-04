import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../store/context';
import Links from '../../components/connectus/links';
import CardConnectUs from '../../components/connectus/cardconnectus';
import LoctionIcon from '../../images/icon/location-dot-solid.svg';
import EmailIcon from '../../images/icon/envelope-regular.svg';
import PhoneIcon from '../../images/icon/phone-solid.svg';
import { NavLink } from 'react-router-dom';
import AboutusBackground from "../../images/bg/blackgroud.png";
import { GetSettings } from '../../api/actions';
import Loading from '../../layout/loading/loading';

function ConnectUs() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  

   
  useEffect(() => {
    GetSettings(setLoading,setSettings) ;
   }, [loading]);
  return (<>
    {loading === false ? (
      <Loading />
    ) : (
    <section className="outer">
      <div className="container">
        <Links />
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
              <div className="imgbakground"><img src={AboutusBackground}/></div>
          <div className="row">
            <div className="col-12 col-lg-4">
              <CardConnectUs Title={language === "En" ? "The Address" : "العنوان"}
               Image={LoctionIcon} 
               Detiles={language === "En" ? settings.address_en : settings.address_ar}/>
            </div>
            <div className="col-12 col-lg-4">
              <CardConnectUs Title={language === "En" ? "E-mail" : "البريد الالكتروني"}
               Image={EmailIcon} 
               Detiles={settings.email}/>
            </div>
            <div className="col-12 col-lg-4">
              <CardConnectUs Title={language === "En" ? "Phone Number" : "رقم الهاتف"}
               Image={PhoneIcon} Detiles={settings.phone} />
            </div>
          </div>
        </div>

        <div className="outer__button">
          <NavLink to="/formconnectus" className="btn send" type="button"  onClick={scrollToTop}>

            {language === "En" ? "Message Us" : "راسالنا"}

          </NavLink>
        </div>
      </div>
    </section>)}
  </>)
  
}

export default ConnectUs;