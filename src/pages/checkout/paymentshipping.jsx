import React from 'react';
import OrderDetiles from '../../components/paymentdone/orderdetiles';
import OrderCard from '../../components/paymentdone/ordercard';
import LinkShipping from '../../components/paymentdone/linkshipping';

function PaymentShipping() {
  return (
    <section className='paymentdone'>
      <div className="container">
        <LinkShipping/>
        <div className="paymentdone__row">
          <OrderDetiles Showbutton={true} />
          <OrderCard Showbutton={false} />
        </div>
      </div>
    </section>
  )
}

export default PaymentShipping;