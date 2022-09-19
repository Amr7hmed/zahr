import React, { useState ,useContext} from 'react';
import { InputCity, InputEmail, InputImage, InputName, InputPhone } from './inputs';
import Reseteicon from "../../../images/icon/reset-password.png";
import ModalPassword from './modalpassword';
import { EditeProfile } from '../../../api/actions';
import { Authcontext } from "../../../store/context.js";
import swal from 'sweetalert';
import axios from 'axios';
import { Api } from '../../../api/index.js';
import { useNavigate } from 'react-router-dom';


function FormProfile(props) {
  const { data ,setLoading} = props;
  let navigate  = useNavigate();
  const [file, setFile] = useState(data.image);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [city, setCity] = useState(data.city);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;


 const EditeProfile = (file,name,email,phone,city) => {
    const options = {
      method: "put",
      url: `${Api}update-profile`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
  
      data: JSON.stringify({
        image:file,
        name:name,
        email:email,
        phone:phone,
        city:city
      }),
    };
    axios(options).then(function (response) {
      console.log("handle success");
      if (language === "En") {
        swal("Password changed successfully !", "", "success");
    } else {
        swal("تم تغيير كلمه المرور بنجاح", "", "success");
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
    EditeProfile(file, name, email, phone, city)
  };

  const handleRemoveData = () => {
    navigate(`/profile`);
  };


  return (
    <div className='formprofile'>
      <InputImage setUrlImage={setFile} urlimage={file} />
      <InputName Name={name} SetName={setName} />
      <InputEmail Email={email} SetEmail={setEmail} />
      <InputPhone Phone={phone} SetPhone={setPhone} />
      <InputCity City={city} SetCity={setCity} />

      <div className="input input-control-password">
        <button className='btn_password' type="button" data-bs-toggle="modal" data-bs-target="#chingepassword" >
          <img src={Reseteicon} alt="" />
          تغيير كلمة المرور
        </button>
        <ModalPassword setLoading={setLoading}/>
      </div>


      <div className="buttons">
        <button type='button' className='btn-save' onClick={handleSaveData}>
          حفظ
        </button>
        <button type='button' className='btn-remove' onClick={handleRemoveData}>
          ألغاء
        </button>

      </div>

    </div>
  )
}

export default FormProfile;