import React, { useState, useEffect } from "react";
import InputImgUpload from "../../images/icon/camera.png";
import Image from "../../images/icon/woman.png";
import { NavLink } from 'react-router-dom';
import Reseteicon from "../../images/icon/reset-password.png";
import ModalPassword from '../../components/profile/form/modalpassword';
import { Getprofile } from '../../api/actions';

function Profile(props) {
  const { language  } = props;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartid, setCartid] = useState("");

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
    Getprofile()
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

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setFile(value);
  };

  const handleChangeImage = () => {
    if (file === null) {
      alert("No picture selected")
    } else {
      console.log(file);
    }
  };
  return (
    <section className='profile'>
      <div className="container">


        <div className="profile__data">
          <div className="section__header">
            <h3>الملف الشخصي</h3>
          </div>


          <div className="imageinput">
            <span className="imgcover">
              <img src={Image} className="img-one" alt=""
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                }} />
              <span className="imginput">
                <img src={InputImgUpload} alt="" />
                <input type="file" className="input-file"
                  onChange={handleChange} />
              </span>
            </span>

            <button className="btn_save_img" type='button' onClick={handleChangeImage}>
              تغير الصورة الشخصية
            </button>
          </div>


          <div className="itemdatashow">
            <span className="txt">
              سارة علي
            </span>
          </div>



          <div className="itemdatashow">
            <span className="txt">
              sara.ali@gmailcom
            </span>
          </div>



          <div className="itemdatashow">
            <span className="txt">
              056995562
            </span>
          </div>


          <div className="itemdatashow">
            <span className="txt">
              الرياض
            </span>
          </div>


          <div className="itemdatashow">
            <button className='btn_password' type="button" data-bs-toggle="modal" data-bs-target="#chingepassword" >
              <img src={Reseteicon} alt="" />
              تغيير كلمة المرور
            </button>
            <ModalPassword />
          </div>


          <div className="buttons">
            <NavLink to={`/editeprofile`} className="edite-button" onClick={scrollToTop}>
              تعديل
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;