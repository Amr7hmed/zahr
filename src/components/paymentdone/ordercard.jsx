import React, { useContext } from 'react';
import Cardcart from '../cart/Cardcart';
import Image from "../../images/product/image-proudect-one.png";
import { Authcontext } from '../../store/context';

function OrderCard(props) {
  const { Showbutton ,Products} = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  console.log(Products);
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
          <div className="col-md-12 col-lg-8">{Products.map(item =>
            <Cardcart Image={item.product.image} Price={item.product.price} Color={item.product.colors}
            Count={item.count}
            Weight={item.product.weight} Hidebutton={false} Item={item.product} key={item.product.id}/>
            )}
          </div>
          </div>

    </div>
  )
}

export default OrderCard;