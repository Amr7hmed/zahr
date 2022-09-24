import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AddCoupon, Getsummery } from "../../api/actions";
import { Authcontext } from "../../store/context";


function OrderDetails(props) {
    const { Cartid } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    let navigate = useNavigate();

    const [price, setPrice] = useState("");
    const [delivery, setDelivery] = useState("");
    const [total, setTotal] = useState("");
    const [coupon, setCoupon] = useState("");
    const [datacoupon, setDataCoupon] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setCoupon(value)
    }

    const handleDone = (e) => {
        e.preventDefault();
        navigate(`/checkout/${Cartid}`);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        AddCoupon(setDataCoupon,coupon)
        setCoupon("")
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
                    name="coupon"
                    value={coupon || ''}
                    onChange={handleChange}
                    placeholder={language === "En" ? "Enter Coupon" : 'ادخل الكوبون'} />
                <button className='btn-ceboun' type="button" onClick={handleSubmit}>
                    {datacoupon === false ? <>
                        {language === "En" ? "Application" : "تطبيق"}
                    </>
                        : <>
                            {language === "En" ? "Removal" : "إزالة"}
                        </>

                    }
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