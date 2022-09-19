import React, { useState } from 'react';
import ModalAddAddress from '../address/modaladdaddress';

function EmptyAddress(props) {
    const {Image,Title ,Description ,ButtonTitle}=props;

    
    
  return (
    <section className='empty-contener'>
        <h5>{Title} </h5>
        <img src={Image} alt="" className='img-address'/>
        <p>{Description}</p>
        
      <button className="button-link" type="button" data-bs-toggle="modal" data-bs-target="#modaladdaddress">
        {ButtonTitle}
        </button>
      
        <ModalAddAddress />

    </section>
  )
}


export default EmptyAddress