import React, { useState } from 'react';
import InputImgUpload from "../../images/icon/camera.png";
import Image from "../../images/icon/woman.png";
import { NavLink } from 'react-router-dom';
import Reseteicon from "../../images/icon/reset-password.png";
import ModalPassword from '../../components/profile/form/modalpassword';

function Profile() {
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
            <span class="txt">
              سارة علي
            </span>
          </div>



          <div className="itemdatashow">
            <span class="txt">
              sara.ali@gmailcom
            </span>
          </div>



          <div className="itemdatashow">
            <span class="txt">
              056995562
            </span>
          </div>


          <div className="itemdatashow">
            <span class="txt">
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
            <NavLink to={`/editeprofile`} className="edite-button">
              تعديل
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile;