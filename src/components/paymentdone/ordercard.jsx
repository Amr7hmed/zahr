import React, { useContext } from 'react';
import Cardcart from '../cart/Cardcart';
import Image from "../../images/product/image-proudect-one.png";
import { Authcontext } from '../../store/context';

function OrderCard(props) {
  const { Showbutton } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='orderdetiles'>
      <div className='title'>
        <h6>
                {language === "En" ? "Products You Ordered" : "المنتجات التي طلبتها"}
        </h6>
        {Showbutton === false ? "" :
          <button type="button" className="btn-done">
          {language === "En" ? "Underway" : "قيد التنفيذ"}
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