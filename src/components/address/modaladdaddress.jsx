import React from 'react';
import LoctionIcon from "../../images/icon/location-icon.svg";

function ModalAddAddress() {
  return (
  <div className="modal fade modaladdaddress" id="modaladdaddress" tabIndex="-1" aria-labelledby="modaladdaddressLabel" aria-hidden="true">
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

            <input className="form-control" type="text" />

          </div>

          <div className='input'>
            <label>المدينة</label>
            <select className="form-select" aria-label="Default select example" placeholder='اختر المدينة'>
              <option value="1">الرياض</option>
              <option value="2">جده</option>
              <option value="3">أبها</option>
            </select>

          </div>

          <div className='input'>
            <label>العنوان</label>

            <input className="form-control" type="text"  placeholder='الحي الشارع رقم المبني'/>

          </div>
          
          <div className='input'>
            <label>رقم الجوال</label>

            <input className="form-control input-phone" type="text" />

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
          <button type="button" className="btn btn-save" ata-bs-dismiss="modal">
            حفظ
          </button>
          <button type="button" className="btn btn-cansal" data-bs-dismiss="modal">
            إلغاء
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalAddAddress;