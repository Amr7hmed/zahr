import React from 'react'
import Links from '../../components/checkout/links';
import { useNavigate } from 'react-router-dom';
import CardButton from '../../components/address/cardbutton.jsx';
import CardAddress from '../../components/address/card.jsx';

function CheckOut() {
  let navigate  = useNavigate();

  const handleDone = (e) => {
    e.preventDefault();
    navigate("/checkoutdata");
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
          <CardAddress Title={"المنزل"} Nameuser={"محمد علي اسماعيل"} 
          Addres={"الرياض - العليا- منطقة الرياض -مبني 5 -شقة 12"} Phone={"+9665559164782"} ShowButtons={false}/>


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