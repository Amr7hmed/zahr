import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AddCoupon, Getsummery, RemoveCoupon } from "../../api/actions";
import { Authcontext } from "../../store/context";


function OrderDetails(props) {
    const { Cartid } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [price, setPrice] = useState("");
    const [delivery, setDelivery] = useState("");
    const [total, setTotal] = useState("");
    const [code, setCode] = useState(null);
    const [coupon, setCoupon] = useState("");
    const [datacoupon, setDataCoupon] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setCoupon(value)
    }

    const handleDone = (e) => {
        e.preventDefault();
        scrollToTop();
        navigate(`/checkout/${Cartid}`);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        AddCoupon(setDataCoupon, coupon)
        setCoupon("")
        setLoading(false);
    };

    const handleRemove = (e) => {
        e.preventDefault();
        RemoveCoupon();
        setCoupon("");
        setCode(null);
        setLoading(false);
    };

    useEffect(() => {
        Getsummery(setLoading, setPrice, setDelivery, setTotal, setCode);
    }, [loading, price, code]);

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
                    placeholder={code == null ?
                        language === "En" ? "Enter Coupon" : 'ادخل الكوبون':
                        code
                        } />
                {code === null ?
                    <button className='btn-ceboun' type="button" onClick={handleSubmit}>
                        {language === "En" ? "Application" : "تطبيق"}
                    </button>
                    :
                    <button className='btn-ceboun' type="button" onClick={handleRemove}>
                        {language === "En" ? "Removal" : "إزالة"}
                    </button>
                }
            </span>
                    <div className="item">
                        <span>{language === "En" ? "The Total Amount" : "أجمالى المبلغ"}</span>
                        {loading === false ? 
                        "" : 
                        <span>{price}{" "}{language === "En" ? "SR" : " ر.س"}</span>
                        }
                    </div>
                    <div className="item">
                        <span>
                            {language === "En" ? "Shipping" : "الشحن"}
                        </span>
                        {loading === false ? 
                        "" : 
                        <span>{delivery}{" "}{language === "En" ? "SR" : " ر.س"}</span>
                        }
                    </div>

                    <div className="item">
                        <span>
                            {language === "En" ? "The Total" : "المجموع"}
                        </span>
                        {loading === false ? 
                        "" : 
                        <span>{total}{" "}{language === "En" ? "SR" : " ر.س"}</span>
                        }
                    </div>
            <button type='button' className='btn-done' onClick={handleDone}>
                {language === "En" ? "Checkout" : "اتمام الشراء"}
            </button>
        </div>
    )
}

export default OrderDetails;