import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Getsummery } from "../../api/actions";


function OrderDetails() {
  let navigate  = useNavigate();

  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");
  const [total, setTotal] = useState("");


  useEffect(() => {
    Getsummery(setPrice,setDelivery , setTotal);
    }, [price]);
  return (
    <div className="orderdetails">
        <h6>تفاصيل الطلب</h6>


        <div className="item">
            <span>أجمالى المبلغ</span>
            <span>{price} {" "} ر.س</span>
        </div>
        
        <div className="item">
            <span> الشحن</span>
            <span>{delivery} {" "} ر.س</span>
        </div>
        
        <div className="item">
            <span> المجموع</span>
            <span>{total} {" "} ر.س</span>
        </div>

    </div>
  )
}

export default OrderDetails;