import React, { useContext } from 'react';
import CardProudects from '../cards/cardproudects';
import Image from "../../images/product/images.jpeg";
import { Authcontext } from '../../store/context';

function SimilarProducts(props) {
  const {Similarproducts}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='similarproducts'>
        <h4>
          {language === "En" ? "Similar Products" : "منتجات مشابهه"}
          </h4>

        <div className="row">
        {Similarproducts.map(item =>
             <div className="col-6 col-lg-4" key={item.id}>
             <CardProudects
               Image={item.image}
               Title={item.title}
               Price={item.price} Id={item.id}
             />
   
               </div>
        )}
        
        </div>
    </div>
  )
}

export default SimilarProducts;