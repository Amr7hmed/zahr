import React, { useContext } from 'react';
import ImageIcon from "../../images/icon/accept.png";
import { Authcontext } from '../../store/context';

function LinkShipping() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <div className='linkshipping'>
            <div className="itemlink">
                <span className="top">
                    <img src={ImageIcon} alt="Image Icon" className='img' />
                    <span className='head'>
            {language === "En" ? "Request Is Done" : " تم الطلب"}  
                        
                    </span>
                </span>
                <span className='bottom'>
            {language === "En" ? "Ordered on 05/15/2022" : "تم الطلب يوم 15/05/2022"}  
                </span>
            </div>
            <div className="linkcontener">
                <span className='line'></span>
            </div>
            <div className="itemlink">
                <span className="top">
                    <img src={ImageIcon} alt="Image Icon" className='img' />
                    <span className='head'>
            {language === "En" ? "Prepared " : "تم التجهيز"} 
                    </span>
                </span>
                <span className='bottom'>
            {language === "En" ? "Prepared on 05/15/2022" : " تم التجهيز يوم 15/05/2022"}
                </span>
            </div>
            <div className="linkcontener">
                <span className='line'></span>
            </div>
            <div className="itemlink">
                <span className="top">
                    <span className='img'></span>
                    <span className='head'>
            {language === "En" ? "Shipping " : "تم الشحن"}
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
            {language === "En" ? "It Was Received " : "تم الاستلام"}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default LinkShipping;