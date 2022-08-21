import React, { useState } from 'react';
import CardOrder from './cardorder.jsx';
import Imageproudect from "../../images/product/image-1.png";

function Order(props) {
    const { Nemberorder, Dayorder } = props;
    const [toggole, setToggole] = useState(false);

    const Toggoleaction = () => {
        setToggole(!toggole)

    }
    return (
        <div className='order'>
            <div className="myorders__headr">
                <span>{Nemberorder}</span>
                <span>{Dayorder}</span>
            </div>

            <div>

                <div className={toggole === false ? "show" : "hide"}>

                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />
                    <span className="line"></span>
                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />
                </div>
                <div className={toggole === false ? "hide" : "show"}>

                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />
                    <span className="line"></span>

                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />
                    <span className="line"></span>

                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />
                    <span className="line"></span>

                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />
                    <span className="line"></span>
                    <CardOrder Image={Imageproudect} Title={"مزهرية مضلعة ثلاثية الابعاد"} Color={"متعدد الالوان"} Weight={"25"} Price={"76 ر.س"} />

                </div>

                <div className="button">
                    <button className='show-all' type='button' onClick={Toggoleaction}>
                        {toggole === false ?
                            "عرض الكل"
                            :
                            "عرض اقل"}

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Order;