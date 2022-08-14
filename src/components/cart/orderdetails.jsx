import React from 'react';
import { useNavigate } from 'react-router-dom';


function OrderDetails() {
    let navigate  = useNavigate();

    const handleDone = (e) => {
        e.preventDefault();
        navigate("/checkout");
    };


  return (
    <div className="orderdetails">
        <h6>تفاصيل الطلب</h6>

        <span className="input">
            <input type="text" placeholder='ادخل الكوبون'/>
            <button type='button' className='btn-ceboun'>تطبيق</button>
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

        <button  type='button' className='btn-done' onClick={handleDone}>اتمام الشراء</button>
    </div>
  )
}

export default OrderDetails;