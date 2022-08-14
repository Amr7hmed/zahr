import React from 'react';
import Cardcart from '../../components/cart/Cardcart';
import OrderDetails from '../../components/cart/orderdetails';
import Image from "../../images/product/image-proudect-one.png";

function Cart() {
  return (
    <section className='cart'>
      <div className="container">
        <div className="cart__header">
          <h5>حقيبة التسوق</h5>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <Cardcart Image={Image} Price={"74.5"} Color={"متعدد الألوان"}
              Size={"2.5"} />

            <Cardcart Image={Image} Price={"74.5"} Color={"متعدد الألوان"}
              Size={"2.5"} />
          </div>
          <div className="col-md-12 col-lg-4">
            <OrderDetails />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Cart;