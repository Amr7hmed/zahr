/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useContext } from 'react';
import Image from "../../images/home/offer.jpg";
import { Authcontext } from '../../store/context';

function Offer() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <section className='home__offer'>
      <div className="img">
        <img src={Image} alt="Image" />
      </div>

      <div className="content">
        
        <h5>
      {language === "En" ? 
        "Don't Miss This Offer"
      :
      "لا تفوت هذا العرض"
        }
          
          </h5>
        <p>
           {language === "En" ? 
        "20% Discount On All Products"
      :
      "خصم 20% علي جميع المنتجات"
        }
           </p>
      </div>
    </section>
  )
}

export default Offer;