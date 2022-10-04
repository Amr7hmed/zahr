import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Getsummery } from "../../api/actions";
import { Authcontext } from "../../store/context";


function OrderDetails() {
  let navigate  = useNavigate();
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [price, setPrice] = useState("");
  const [delivery, setDelivery] = useState("");
  const [total, setTotal] = useState("");
  const [code, setCode] = useState(null);


  useEffect(() => {
    Getsummery(setLoading, setPrice, setDelivery, setTotal, setCode);
    }, [price]);
  return (
    <div className="orderdetails">
        <h6>
            {language === "En" ? "Order Details" : "تفاصيل الطلب"}
        </h6>


        <div className="item">
            <span>
            {language === "En" ? "The Total Amount" : "أجمالى المبلغ"}
            </span>
            <span>{price} {" "}
            {language === "En" ? "SAR" : "ر.س"}
             </span>
        </div>
        
        <div className="item">
            <span>
            {language === "En" ? "Shipping" :"الشحن"}
             </span>
            <span>{delivery} {" "} 
            {language === "En" ? "SAR" : "ر.س"}
            </span>
        </div>
        
        <div className="item">
            <span>
            {language === "En" ? "The Total" : "المجموع"}
              </span>
            <span>{total} {" "} 
            {language === "En" ? "SAR" : "ر.س"}
            </span>
        </div>

    </div>
  )
}

export default OrderDetails;