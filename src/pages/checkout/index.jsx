import React from 'react'
import Card from '../../components/checkout/card';
import CardButton from '../../components/checkout/cardbutton';
import Links from '../../components/checkout/links';
import { useNavigate } from 'react-router-dom';

function CheckOut() {
  let navigate  = useNavigate();

  const handleDone = (e) => {
    e.preventDefault();
    //navigate("/checkoutdata");
    navigate("/");
};

  return (
    <section className='checkout'>
      <div className="container">
        <Links Stylebulteone={"vector"}/>
        <div className="checkout__header">
          <h5>عنوان الشحن</h5>
        </div>
        <div className="checkout__detiles">
          <h6>العنوان الاساسي</h6>
        </div>

        <div className="checkout__rows">
          <Card Title={"المنزل"} Nameuser={"محمد علي اسماعيل"} 
          Addres={"الرياض - العليا- منطقة الرياض -مبني 5 -شقة 12"} Phone={"+9665559164782"}/>


          <CardButton/>
          </div>

          <div className="buttons">
            <button type="button" className='btn-done'  onClick={handleDone}>استمرار</button>
          </div>
        </div>
        </section>
  )
}

export default CheckOut;