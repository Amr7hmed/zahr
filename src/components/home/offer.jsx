/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Image from "../../images/home/offer.jpg";

function Offer() {
  return (
    <section className='home__offer'>
      <div className="img">
        <img src={Image} alt="Image" />
      </div>

      <div className="content">
        <h5>لا تفوت هذا العرض</h5>
        <p> خصم 20% علي جميع المنتجات</p>
      </div>
    </section>
  )
}

export default Offer;