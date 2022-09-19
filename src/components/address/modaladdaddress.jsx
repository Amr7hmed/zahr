import React, { useState } from 'react';
import { AddAddress } from '../../api/actions';
import LoctionIcon from "../../images/icon/location-icon.svg";
import Loction from './loction';

function ModalAddAddress() {
  const [state, setState] = useState({
      name: "",
      phone: "",
      city: "الرياض",
      address: ""
  });
const [clickedLatLng, setClickedLatLng] = useState(null);


  const options = [
    {
      label: "الرياض",
      value: "الرياض",
    },
    {
      label: "ابها",
      value: "ابها",
    },
    {
      label: "جيزان",
      value: "جيزان",
    },
  ];


  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(state);
    AddAddress(state,clickedLatLng.lat,clickedLatLng.lng)
  };
  return (
  <div className="modal fade modaladdaddress" id="modaladdaddress" tabIndex="-1" 
  aria-labelledby="modaladdaddressLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <h5 className="modal-title" id="modaladdaddressLabel">
            اضافة عنوان
          </h5>
        </div>
        <div className="modal-body">
          <div className='input'>
            <label>الاسم</label>

            <input className="form-control" type="text"
            name="name"
            onChange={handleChange} />

          </div>

          <div className='input'>
            <label>المدينة</label>
            <select className="form-select"  value={state.city} name="city"
             aria-label="Default select example" placeholder='اختر المدينة'  onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
            </select>

          </div>

          <div className='input'>
            <label>العنوان</label>

            <input className="form-control" type="text"  placeholder='الحي الشارع رقم المبني'
            name="address"
            onChange={handleChange} />

          </div>
          
          <div className='input'>
            <label>رقم الجوال</label>

            <input className="form-control input-phone" type="text" 
            name="phone"
            onChange={handleChange} />

          </div>

          
         <Loction clickedLatLng={clickedLatLng} setClickedLatLng={setClickedLatLng}/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-save" onClick={handleClick} ata-bs-dismiss="modal">
            حفظ
          </button>
          <button type="button" className="btn btn-cansal" data-bs-dismiss="modal"  aria-label="Close">
            إلغاء
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalAddAddress;

// ata-bs-dismiss="modal"