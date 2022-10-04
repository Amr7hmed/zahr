import React, { useContext, useEffect, useState } from 'react';
import { AddAddress, GetDataCity } from '../../api/actions';
import LoctionIcon from "../../images/icon/location-icon.svg";
import { Authcontext } from '../../store/context';
import Loction from './loction';

function ModalAddAddress(props) {
  const {setLoading}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [validation, setValidation] = useState(true);

  const [citys, setCitys] = useState([]);
  const [loadingcity, setLoadingcity] = useState(false);
  const [state, setState] = useState({
      name: "",
      phone: "",
      city: "",
      address: ""
  });
const [clickedLatLng, setClickedLatLng] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };  
  const handleClick = (e) => {
    e.preventDefault();
    if (state.name === "" ||
      state.phone === "" ||
      state.city === "" ||
      state.address === "" ||
      clickedLatLng === null) {
      setValidation(false);
    } else {
      setValidation(true);
      AddAddress(setLoading,state,clickedLatLng.lat,clickedLatLng.lng)
    }
  };  
  useEffect(() => {
    GetDataCity(setLoadingcity,setCitys);
  }, [loadingcity]);
  
  return (
  <div className="modal fade modaladdaddress" id="modaladdaddress" tabIndex="-1" 
  aria-labelledby="modaladdaddressLabel" aria-hidden="true">
   <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <h5 className="modal-title" id="modalediteaddressLabel">
            {language === "En" ? "Edit Address" : "تعديل العنوان"}
          </h5>
        </div>

        <div className="modal-body">
          <div 
            className={validation === false && state.name === "" ? "input position-relative" : "input"} >
            <label>{language === "En" ? "Name" : "الاسم"}</label>
            <input type="text"
              required
              className={validation === false && state.name === "" ? "form-control is-invalid" : "form-control"}
              name="name"
              onChange={handleChange} />
              
<div className="invalid-feedback">
              {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
            </div>
          </div>

          <div 
            className={validation === false && state.city === "" ? "input position-relative" : "input"} >
            <label>{language === "En" ? "City" : "المدينة"}</label>
            <select 
            className={validation === false && state.city === "" ? "form-select form-select-invalid" : "form-select"}
             value={state.city} name="city"
              aria-label="Default select example"
              placeholder={language === "En" ? "Choose The City" : 'اختر المدينة'} onChange={handleChange}>
<option></option>
                {loadingcity === false ?"":
              citys.map(item => (
                <option value={language === "En" ? item.name_en : item.name_ar}
                key={item.id}>{language === "En" ? item.name_en : item.name_ar}</option>
                ))
              }


            </select>

            <div className="invalid-feedback">
              {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
            </div>
          </div>

          <div 
            className={validation === false && state.address === "" ? "input position-relative" : "input"} >
            <label>
              {language === "En" ? "The Address" : "العنوان"}
            </label>

            <input type="text"
              placeholder={language === "En" ? 'District Street Building No.' : 'الحي الشارع رقم المبني'}
              name="address"
              required
              className={validation === false && state.address === "" ? "form-control is-invalid" : "form-control"}
              onChange={handleChange} />

<div className="invalid-feedback">
              {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
            </div>
          </div>

          <div
            className={validation === false && state.phone === "" ? "input position-relative" : "input"} >
            <label>
              {language === "En" ? "Mobile Number" : "رقم الجوال"}
            </label>
            <input type="text"
              name="phone"
              required
              className={validation === false && state.phone === "" ?
                "form-control is-invalid input-phone" : "form-control input-phone"}
              onChange={handleChange} />

            <div className="invalid-feedback">
              {language === "En" ? "This Field Must Be Entered" : "يجب إدخال هذا الحقل"}
            </div>
          </div>

          <Loction clickedLatLng={clickedLatLng} setClickedLatLng={setClickedLatLng} validation={validation}/>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-save" onClick={handleClick} ata-bs-dismiss="modal">
            {language === "En" ? "Save" : "حفظ"}

          </button>
          <button type="button" className="btn btn-cansal" ata-bs-dismiss="modal">
            {language === "En" ? "Cancel" : "إلغاء"}
          </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default ModalAddAddress;

// ata-bs-dismiss="modal"