import React from 'react';
import Cardcart from '../cart/Cardcart';
import Image from "../../images/product/image-proudect-one.png";

function OrderCard(props) {
  const { Showbutton } = props;
  return (
    <div className='orderdetiles'>
      <div className='title'>
        <h6>
          المنتجات التي طلبتها
        </h6>
        {Showbutton === false ? "" :
          <button type="button" className="btn-done">
            قيد التنفيذ
          </button>
        }
      </div>

      <div className="row">
          <div className="col-md-12 col-lg-8">
            <Cardcart Image={Image} Price={"74.5"} Color={"متعدد الألوان"}
              Size={"2.5"} Hidebutton={false}/>

            <Cardcart Image={Image} Price={"74.5"} Color={"متعدد الألوان"}
              Size={"2.5"} Hidebutton={false}/>
          </div>
          </div>

    </div>
  )
}

export default OrderCard;