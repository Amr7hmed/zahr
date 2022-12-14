import React from 'react';
import { useContext } from 'react';
import CashImage from "../../images/icon/cash-payment.png";
import { Authcontext } from '../../store/context';

function OrderDetiles(props) {
  const { Showbutton, summary } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  console.log(summary);
  return (
    <div className='orderdetiles'>
      <div className='title'>
        <h6>
          {language === "En" ? "Order" : "الطلبية"} 
          {" "}
          <span>#{" "}{summary.id}</span></h6>
        {Showbutton === false ? "" :
          <button type="button" className="btn-done">
            {language === "En" ? "Underway" : " قيد التنفيذ"}
          </button>
        }
      </div>


      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className='ordercontener'>
            <span className='top'>
              {language === "En" ? "The Address" : "العنوان"}
            </span>
            <span className='text'>
              {summary.address.name}
            </span>
            <span className='text'>
              {`${summary.address.city} ${" - "} ${summary.address.address}`}
            </span>
            <span className='number'>
              {summary.address.phone}
            </span>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <div className='ordercontener'>
            <span className='top'>
              {language === "En" ? "Order Summary" : "ملخص الطلبية"}
            </span>

            <div className="item">
              <span>
                {language === "En" ? "The Total Amount" : " أجمالى المبلغ"}
              </span>
              <span>{summary.price} {" "}

                {language === "En" ? "R.S" : "ر.س"}
              </span>
            </div>

            <div className="item">
              <span>

                {language === "En" ? "Shipping" : "الشحن"}
              </span>
              <span>{summary.delivery_price}  {" "}
                {language === "En" ? "R.S" : "ر.س"}</span>
            </div>

            <div className="item">
              <span>
                {language === "En" ? "The Total" : "المجموع"}
              </span>
              <span>{summary.total} {" "}
                {language === "En" ? "R.S" : "ر.س"}</span>
            </div>
          </div>

        </div>
        <div className="col-md-12 col-lg-4">
          <div className='ordercontener cashordercontener'>
            <span className='top'>
              {language === "En" ? "Payment Method" : "طريقة الدفع"}
            </span>

            <div className="cash">
              <img src={CashImage} alt="Cash Image" />
              {language === "En" ?
                <span>{summary.payment_type === "visa" ? "Payment Visa" : "Payment Cash"}</span> :
                <span>{summary.payment_type === "visa" ? " الدفع فيزا" : " الدفع نقدا"}</span>
              }
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderDetiles;