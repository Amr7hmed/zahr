import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Getsummery } from "../../api/actions";
import { Authcontext } from "../../store/context";


function OrderDetails(props) {
    const { Cartid } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    let navigate = useNavigate();

    const [price, setPrice] = useState("");
    const [delivery, setDelivery] = useState("");
    const [total, setTotal] = useState("");
    const handleDone = (e) => {
        e.preventDefault();
        navigate(`/checkout/${Cartid}`);
    };


    useEffect(() => {
        Getsummery(setPrice, setDelivery, setTotal);
    }, [price]);

    return (
        <div className="orderdetails">
            <h6>
                {language === "En" ? "Order Details" : "تفاصيل الطلب"}
            </h6>

            <span className="input">
                <input type="text"
                    placeholder={language === "En" ? "Enter Coupon" : 'ادخل الكوبون'} />
                <button type='button' className='btn-ceboun'>
                    {language === "En" ? "Application" : "تطبيق"}
                </button>
            </span>

            <div className="item">
                <span>
                    {language === "En" ? "The Total Amount" : "أجمالى المبلغ"}
                </span>
                <span>{price} {" "}
                    {language === "En" ? "SR" : " ر.س"}
                </span>
            </div>

            <div className="item">
                <span>
                    {language === "En" ? "Shipping" : "الشحن"}
                </span>
                <span>{delivery} {" "}
                    {language === "En" ? "SR" : " ر.س"}
                </span>
            </div>

            <div className="item">
                <span>
                    {language === "En" ? "The Total" : "المجموع"}
                </span>
                <span>{total} {" "}
                    {language === "En" ? "SR" : " ر.س"}
                </span>
            </div>
            <button type='button' className='btn-done' onClick={handleDone}>
                {language === "En" ? "Checkout" : "اتمام الشراء"}
            </button>
        </div>
    )
}

export default OrderDetails;