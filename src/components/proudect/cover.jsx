import React from 'react';
import Imageproudect from '../../images/product/image-proudect-one.png';

function Cover(props) {
    const {Image ,Images ,index}=props;
  return (
    <div className='img-cover'>
        <img src={Images[index].image} alt="Image"  
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src ={Imageproudect}}}/>
    </div>
  )
}

export default Cover;

/*
e.target.src =
                            "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                        }}/
*/