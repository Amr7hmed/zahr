import React, { useState } from "react";
import Links from '../../components/checkout/links';
import { useNavigate } from 'react-router-dom';
import OrderDetails from "../../components/payment/orderdetails";
import ShippingDetails from "../../components/payment/shippingdetails.jsx";
import Accept from "../../images/icon/accept.png";
import Paymentform from "../../components/payment/paymentform.jsx";

function Payment() {
    const [payment,Setpayment]=useState("");
    let navigate  = useNavigate();
  
    const handleDone = (e) => {
      e.preventDefault();
      navigate("/paymentdone");
  };
  return (
    <section className='payment'>
        <div className="container">
            <Links Stylebulteone={"active"} Stylebultetwo={"active"} Stylebultethree={"vector"}/>
            <div className="checkout__header">
                <h5>طريقة الدفع</h5>
            </div>

            
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <button type="button" className={payment === "visa"?"btn-payment active":"btn-payment"} onClick={()=>Setpayment("visa")}>
            الدفع باستخدام كارت البنك

            <img src={Accept} alt="Accept" />
            </button>
            
            <button type="button" className={payment === "cash"?"btn-payment active":"btn-payment"}  onClick={()=>Setpayment("cash")}>
            الدفع نقدا

            <img src={Accept} alt="Accept" />
            </button>
            {payment === "visa" ?<Paymentform/> :""}
          </div>
          <div className="col-md-12 col-lg-4">
            <OrderDetails/>
            
            <ShippingDetails Title={"المنزل"} Nameuser={"محمد علي اسماعيل"} 
          Addres={"الرياض - العليا- منطقة الرياض -مبني 5 -شقة 12"} Phone={"+9665559164782"}/>
          </div>

          <div className="buttons col-12">
            <button className="btn-done"  type="button" onClick={handleDone}>
                تأكيد الطلب
            </button>
          </div>
        </div>
            </div>
            </section>
  )
}

export default Payment;