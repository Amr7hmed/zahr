import React from 'react';
import CartIcon from "../../images/icon/heart-cart.svg";
import { NavLink } from 'react-router-dom';

function CardProudects(props) {
  const {Image,Title,Price ,Style , Id}=props;
  return (
    <div className={Style +" proudects_card"}>
      <NavLink to={`/proudect/${Id}`} className="img">
        <img src={Image} alt="" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }}/>

      </NavLink>
      
      <div className="text">
        <span className='title'>{Title}</span>

        <span className='end'>
          <span className="price">
            {Price} SAR 
          </span>

          <button className="btn-fivorte">
            <img src={CartIcon} alt="" />
          </button>
        </span>
      </div>
    </div>
  )
}

export default CardProudects;