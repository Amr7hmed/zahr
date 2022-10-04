import React, { useEffect, useState } from 'react';
import OrderDetiles from '../../components/paymentdone/orderdetiles';
import OrderCard from '../../components/paymentdone/ordercard';
import LinkShipping from '../../components/paymentdone/linkshipping';
import { GetSummary } from '../../api/actions';
import Loading from '../../layout/loading/loading';

function PaymentShipping() {
  const [summary, setSummary] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetSummary(setLoading, setSummary);
  }, [loading]);
  console.log(summary.products);
  return (
    <>
      {loading === false ? (
        <Loading />
      ) :
    <section className='paymentdone paymentshipping'>
      <div className="container">
        <LinkShipping/>
        <div className="paymentdone__row">
          <OrderDetiles Showbutton={true} summary={summary}/>
          <OrderCard Showbutton={false} Products={summary.products}/>
           
        </div>
      </div>
    </section>
      }
    </>
  )
}

export default PaymentShipping;