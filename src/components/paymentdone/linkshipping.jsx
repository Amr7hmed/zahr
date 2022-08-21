import React from 'react';
import ImageIcon from "../../images/icon/accept.png";

function LinkShipping() {
    return (
        <div className='linkshipping'>
            <div className="itemlink">
                <span className="top">
                    <img src={ImageIcon} alt="Image Icon" className='img' />
                    <span className='head'>
                        تم الطلب
                    </span>
                </span>
                <span className='bottom'>
                    تم الطلب يوم 15/05/2022
                </span>
            </div>
            <div className="linkcontener">
                <span className='line'></span>
            </div>
            <div className="itemlink">
                <span className="top">
                    <img src={ImageIcon} alt="Image Icon" className='img' />
                    <span className='head'>
                        تم التجهيز
                    </span>
                </span>
                <span className='bottom'>
                    تم التجهيز يوم 15/05/2022
                </span>
            </div>
            <div className="linkcontener">
                <span className='line'></span>
            </div>
            <div className="itemlink">
                <span className="top">
                    <span className='img'></span>
                    <span className='head'>
                        تم الشحن
                    </span>
                </span>
            </div>
            <div className="linkcontener">
                <span className='line'></span>
            </div>
            <div className="itemlink">
                <span className="top">
                    <span className='img'></span>
                    <span className='head'>
                        تم الاستلام
                    </span>
                </span>
            </div>
        </div>
    )
}

export default LinkShipping;