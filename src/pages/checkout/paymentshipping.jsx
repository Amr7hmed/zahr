import React, { useEffect, useState } from 'react';
import OrderDetiles from '../../components/paymentdone/orderdetiles';
import OrderCard from '../../components/paymentdone/ordercard';
import LinkShipping from '../../components/paymentdone/linkshipping';
import { GetSummary } from '../../api/actions';

function PaymentShipping() {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetSummary(setLoading, setSummary);
  }, [loading]);
  return (
    <section className='paymentdone paymentshipping'>
      <div className="container">
        <LinkShipping/>
        <div className="paymentdone__row">
          <OrderDetiles Showbutton={true} summary={summary}/>
          <OrderCard Showbutton={false} />
        </div>
      </div>
    </section>
  )
}

export default PaymentShipping;