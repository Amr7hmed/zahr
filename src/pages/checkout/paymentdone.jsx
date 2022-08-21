import React from 'react';
import PaymentdoneIcon from "../../images/icon/paymentdone-icon.png";
import { useNavigate } from 'react-router-dom';
import OrderDetiles from '../../components/paymentdone/orderdetiles';
import OrderCard from '../../components/paymentdone/ordercard';

function PaymentDone() {
  let navigate = useNavigate();

  const handleDone = (e) => {
    e.preventDefault();
    navigate("/paymentshipping");
  };
  return (
    <section className='paymentdone'>
      <div className="container">
        <div className="paymentdone__header">
          <img src={PaymentdoneIcon} alt="Payment Done Icon" />
          <h3>تم وضع الطلب</h3>
          <button className="btn-done" type="button" onClick={handleDone}>
            تابع الطلب
          </button>
        </div>

        <div className="paymentdone__row">
          <OrderDetiles Showbutton={false} />
          <OrderCard Showbutton={false} />
        </div>
      </div>
    </section>
  )
}

export default PaymentDone;