import React, { useState, useContext, useEffect } from 'react';
import { InputCity, InputEmail, InputName, InputPhone } from './inputs';
import Reseteicon from "../../../images/icon/reset-password.png";
import ModalPassword from './modalpassword';
import { Getprofile } from '../../../api/actions';
import { Authcontext } from "../../../store/context.js";
import swal from 'sweetalert';
import axios from 'axios';
import { Api } from '../../../api/index.js';
import { useNavigate } from 'react-router-dom';
import InputImag from '../../profile/InputImag';
import Loading from '../../../layout/loading/loading';


function FormProfile() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [validation, setValidation] = useState(true);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const EditeProfile = (name, email, phone, city) => {
    const options = {
      method: "put",
      url: `${Api}update-profile`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },

      data: JSON.stringify({
        name: name,
        email: email,
        phone: parseInt(phone),
        city: city
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");

      if(language === "En" ){
        swal({
          text: "The Profile Information Has Been Modified Successfully !",
          icon: "success",
          buttons: false,
          timer: 3000
        })
        window.location.pathname = "/profile";
      }else{
       swal({
        text: "تم تعديل بيانات البروفايل بنجاح",
        icon: "success",
        buttons: false,
        timer: 3000
      })
      window.location.pathname = "/profile";
    }
      navigate(`/profile`);
    })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
  const handleSaveData = () => {
    if (name === "" ||
    email === "" ||
    phone === "" ||
    city === "" ){
      setValidation(false);
    } else {
      setValidation(true);
      EditeProfile(name, email, phone, city)
   }
  };

  const handleRemoveData = () => {
    navigate(`/profile`);
  };


  useEffect(() => {
    Getprofile(setLoading, setName, setFile, setEmail, setPhone, setCity);
  }, [loading]);


  return (<>
    {loading === false ? (
      <Loading />
    ) : (
      <div className='formprofile'>
  
        <InputImag Data={file} />
        <InputName name={name} SetName={setName} validation={validation}/>
        <InputEmail Email={email} SetEmail={setEmail} validation={validation}/>
        <InputPhone Phone={phone} SetPhone={setPhone}  validation={validation}/>
        <InputCity City={city} SetCity={setCity}  validation={validation}/>
  
        <div className="input input-control-password">
          <button className='btn_password' type="button" data-bs-toggle="modal" data-bs-target="#chingepassword" >
            <img src={Reseteicon} alt="" />
            {language === "En" ? "Change Password" : "تغيير كلمة المرور"}
          </button>
          <ModalPassword setLoading={setLoading} />
        </div>
  
  
        <div className="buttons">
          <button type='button' className='btn-save' onClick={handleSaveData}>
            {language === "En" ? "Save" : "حفظ"}
          </button>
          <button type='button' className='btn-remove' onClick={handleRemoveData}>
            {language === "En" ? "Cancel" : "ألغاء"}
          </button>
  
        </div>
  
      </div>

    )}
    </>
  )
}

export default FormProfile;