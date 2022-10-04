import React, { useContext, useState } from 'react';
import CardOrder from './cardorder.jsx';
import Imageproudect from "../../images/product/image-1.png";
import { Authcontext } from '../../store/context.js';
import Dayorderdata from './dayorder.jsx';

function Order(props) {
    const { Nemberorder, Dayorder, OrderProducts ,Item } = props;
    const [toggole, setToggole] = useState(false);
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const Toggoleaction = () => {
        setToggole(!toggole)
    }

    return (
        <div className='order'>
            <div className="myorders__headr">
                <span>{Nemberorder}</span>
                <span>
                    <Dayorderdata Dayorder={Dayorder}/>
                </span>
            </div>

            <div>

                <div className={toggole === false ? "show" : "hide"}>

                    <CardOrder Image={OrderProducts[0].image} Item={OrderProducts[0]}
                        Color={OrderProducts[0].colors} Weight={OrderProducts[0].weight} 
                        Price={`${OrderProducts[0].price} ${language === "En" ? "SAR" : "ر.س"}`}  Status={Item.status}/>
                </div>
                <div className={toggole === false ? "hide" : "show all"}>
                    {OrderProducts.map(item => <div key={item.id}>

                        <CardOrder Image={item.image} Item={item}
                            Color={item.colors} Weight={item.weight} Price={`${item.price} 
                            ${language === "En" ? "SAR" : "ر.س"}`}  Status={Item.status} />
                        <span className="line"></span>
                    </div>
                    )}


                </div>
                {OrderProducts.length === 1?"":
                <div className="button">
                    <button className='show-all' type='button' onClick={Toggoleaction}>
                        {language === "En" ?<>
                         {toggole === false ?"View All":"View Less"}
                         </>
                         : <>
                         {toggole === false ?"عرض الكل":"عرض اقل"}
                         </>
                        } 
                    </button>
                </div>
                        }
            </div>
        </div>
    )
}

export default Order;