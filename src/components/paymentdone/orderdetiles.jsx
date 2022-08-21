import React from 'react';
import CashImage from "../../images/icon/cash-payment.png";

function OrderDetiles(props) {
  const { Showbutton } = props;
  return (
    <div className='orderdetiles'>
      <div className='title'>
        <h6>الطلبية <span>567345#</span></h6>
        {Showbutton === false ? "" :
          <button type="button" className="btn-done">
            قيد التنفيذ
          </button>
        }
      </div>


      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className='ordercontener'>
            <span className='top'>
              العنوان
            </span>
            <span className='text'>
              المنزل
            </span>
            <span className='text'>
              الرياض - العليا- منطقة الرياض -مبني 5 -شقة 12
            </span>
            <span className='number'>
              +9665559164782
            </span>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className='ordercontener'>
            <span className='top'>
              ملخص الطلبية
            </span>

            <div className="item">
              <span>أجمالى المبلغ</span>
              <span>150 {" "} ر.س</span>
            </div>

            <div className="item">
              <span> الشحن</span>
              <span>150 {" "} ر.س</span>
            </div>

            <div className="item">
              <span> المجموع</span>
              <span>150 {" "} ر.س</span>
            </div>
          </div>

        </div>
        <div className="col-md-12 col-lg-4">
          <div className='ordercontener cashordercontener'>
            <span className='top'>
              طريقة الدفع
            </span>

            <div className="cash">
              <img src={CashImage} alt="Cash Image" />
              <span>الدفع نقدا</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderDetiles;