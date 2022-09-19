import React, { useContext } from 'react';
import PaymentdoneIcon from "../../images/icon/paymentdone-icon.png";
import { useNavigate } from 'react-router-dom';
import OrderDetiles from '../../components/paymentdone/orderdetiles';
import OrderCard from '../../components/paymentdone/ordercard';
import { Authcontext } from '../../store/context';

function PaymentDone() {
  let navigate = useNavigate();
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const handleDone = (e) => {
    e.preventDefault();
    navigate("/paymentshipping");
  };
  
  return (
    <section className='paymentdone'>
      <div className="container">
        <div className="paymentdone__header">
          <img src={PaymentdoneIcon} alt="Payment Done Icon" />
          <h3>
            {language === "En" ? "The Request Has Been Placed" : " تم وضع الطلب"}
            </h3>
          <button className="btn-done" type="button" onClick={handleDone}>
            {language === "En" ? "Continue Ordering" : " تابع الطلب"}
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