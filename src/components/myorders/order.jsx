import React, { useState } from 'react';
import CardOrder from './cardorder.jsx';
import Imageproudect from "../../images/product/image-1.png";

function Order(props) {
    const { Nemberorder, Dayorder, OrderProducts } = props;
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

                    <CardOrder Image={OrderProducts[0].image} Title={OrderProducts[0].title}
                        Color={OrderProducts[0].colors} Weight={OrderProducts[0].weight} Price={`${OrderProducts[0].price} ر.س`} />
                </div>
                <div className={toggole === false ? "hide" : "show all"}>
                    {OrderProducts.map(item => <div key={item.id}>

                        <CardOrder Image={item.image} Title={item.title}
                            Color={item.colors} Weight={item.weight} Price={`${item.price} ر.س`} />
                        <span className="line"></span>
                    </div>
                    )}


                </div>
                {OrderProducts.length === 1?"":
                <div className="button">
                    <button className='show-all' type='button' onClick={Toggoleaction}>
                        {toggole === false ?
                            "عرض الكل"
                            :
                            "عرض اقل"}

                    </button>
                </div>
                        }
            </div>
        </div>
    )
}

export default Order;