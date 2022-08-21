import React from 'react';


function OrderDetails() {


  return (
    <div className="orderdetails">
        <h6>تفاصيل الطلب</h6>


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
  )
}

export default OrderDetails;