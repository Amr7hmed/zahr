import React from 'react';
import CardProudects from '../cards/cardproudects';
import Image from "../../images/product/images.jpeg";

function SimilarProducts(props) {
  const {Similarproducts}=props;
  return (
    <div className='similarproducts'>
        <h4>منتجات مشابهه</h4>

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