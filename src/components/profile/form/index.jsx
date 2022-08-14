import React, { useState } from 'react';
import { InputCity, InputEmail, InputImage, InputName, InputPhone } from './inputs';
import Reseteicon from "../../../images/icon/reset-password.png";
import ModalPassword from './modalpassword';


function FormProfile() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("ساره على");
  const [email, setEmail] = useState("sara.ali@gmailcom");
  const [phone, setPhone] = useState("056995562");
  const [city, setCity] = useState("الرياض");


  
  const handleSaveData = () => {

  };


  const handleRemoveData = () => {
    
  };


  return (
    <div className='formprofile'>
      <InputImage setFile={setFile} />
      <InputName Name={name} SetName={setName} />
      <InputEmail Email={email} SetEmail={setEmail} />
      <InputPhone Phone={phone} SetPhone={setPhone} />
      <InputCity City={city} SetCity={setCity} />

      <div className="input">
        <button className='btn_password' type="button" data-bs-toggle="modal" data-bs-target="#chingepassword" >
          <img src={Reseteicon} alt="" />
          تغيير كلمة المرور
        </button>
<ModalPassword/>
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