import React, { useContext, useEffect, useState } from 'react'
import { GetOrdersAll } from '../../api/actions';
import Empty from '../../components/empty';
import Order from '../../components/myorders/order';
import Imagrempity from "../../images/empty/shoppingcart-empty.png";
import Loading from '../../layout/loading/loading';
import { Authcontext } from '../../store/context';

function MyOrders() {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

    const [Orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        GetOrdersAll(setLoading, setOrders);
        console.log(Orders);
    }, [loading]);

    return (<>
        {loading === false ? (
            <Loading />
        ) : Orders.length === 0 ? <>
            <Empty Image={Imagrempity} Description=
                {language === "En" ? "There Are No Requests To Display" : "لا يوجد طلبات لعرضها "}
                Showbutton={true} ButtonTitle={language === "En" ? ("Shop Now") : ("تسوق الان")}
                Title={language === "En" ? ("My Orders") : ("طلباتي")}
            />
        </>
            : (

                <section className='myorders'>
                    <div className="container">
                        <div className="section__header">
                            <h3>
                                {language === "En" ? ("My Orders") : ("طلباتي")}
                            </h3>
                        </div>
                        <div className="myorders__row">
                            {Orders.map(item =>
                                <Order Nemberorder={`#${item.id}`} Dayorder={item.created_at} 
                                OrderProducts={item.orderProducts} key={item.id}/>
                            )}
                        </div>

                    </div>
                </section>
            )
        }
    </>
    )
}

export default MyOrders;
