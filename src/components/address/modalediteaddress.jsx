import React, { useState } from 'react';
import { EditeAddress } from '../../api/actions';
import LoctionIcon from "../../images/icon/location-icon.svg";

function ModalEditeAddress(props) {
  const {Id }=props;

  const [state, setState] = useState({
    name: "",
    phone: "",
    city: "الرياض",
    address: "",
    location: "1214.1214312"
});

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
  EditeAddress(Id,state)
};


  return (<div className="modal fade modaladdaddress"
   id="modalediteaddress" tabIndex="-1" aria-labelledby="modalediteaddressLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <h5 className="modal-title" id="modalediteaddressLabel">
        تعديل العنوان
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

          
          <div className='mab'>
            <div className='mab-overload'>

              <button type='button' className='btn-editeloction'>
                <img src={LoctionIcon} alt="" />
              الحصول على موقعي
              </button>
            </div>

          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-save" onClick={handleClick} ata-bs-dismiss="modal">
            حفظ
          </button>
          <button type="button" className="btn btn-cansal" ata-bs-dismiss="modal">
            إلغاء
          </button>
        </div>

    </div>
  </div>
</div>
  )
}

export default ModalEditeAddress;

