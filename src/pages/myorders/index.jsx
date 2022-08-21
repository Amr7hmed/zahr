import React from 'react'
import Order from '../../components/myorders/order';

function MyOrders() {
    return (
        <section className='myorders'>
            <div className="container">
                <div className="section__header">
                    <h3>
                        طالباتي
                    </h3>
                </div>
                <div className="myorders__row">
                    <Order Nemberorder={"#5435345"} Dayorder={"الإثنين 2022/05/22"}/>
                    <Order Nemberorder={"#5435345"} Dayorder={"الإثنين 2022/05/22"}/>
                    <Order Nemberorder={"#5435345"} Dayorder={"الإثنين 2022/05/22"}/>
                </div>

            </div>
        </section>
    )
}

export default MyOrders;