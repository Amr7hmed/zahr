import React, { useState, useEffect, useContext } from "react";
import Image from "../../images/icon/woman.png";
import { NavLink } from 'react-router-dom';
import Reseteicon from "../../images/icon/reset-password.png";
import ModalPassword from '../../components/editeprofile/form/modalpassword';
import { Getprofile } from '../../api/actions';
import Loading from "../../layout/loading/loading";
import InputImag from "../../components/profile/InputImag";
import { Authcontext } from "../../store/context";

function Profile() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    Getprofile(setLoading,setData);
  }, [loading]);




  console.log(data);
  return (<>
    {loading === false ? (
      <Loading />
    ) : (
    <section className='profile'>
      <div className="container">


        <div className="profile__data">
          <div className="section__header">
            <h3> 
              
            {language === "En" ?"Profile ":"الملف الشخصي"}
            </h3>
          </div>

<InputImag Data={data}/>

          <div className="itemdatashow">
            <span className="txt">
              {data.name}
            </span>
          </div>



          <div className="itemdatashow">
            <span className="txt">
              {data.email}
            </span>
          </div>



          <div className="itemdatashow">
            <span className="txt">
              {data.phone === null? "010025848455":data.phone}
            </span>
          </div>


          <div className="itemdatashow">
            <span className="txt">
              الرياض
            </span>
          </div>


          <div className="itemdatashow input-control-password">
            <button className='btn_password' type="button" data-bs-toggle="modal" data-bs-target="#chingepassword" >
              <img src={Reseteicon} alt="" />
              تغيير كلمة المرور
            </button>
            <ModalPassword setLoading={setLoading}/>
          </div>


          <div className="buttons">
            <NavLink to={`/editeprofile`} className="edite-button" onClick={scrollToTop}>
              تعديل
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    )}
  </>)
}

export default Profile;