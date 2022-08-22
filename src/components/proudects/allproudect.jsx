/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import CardProudects from '../cards/cardproudects.jsx';

function AllProudect(props) {
  const { Products } = props;


  return (
    <section className='allproudect'>


      <div className="row">
        {Products.map(item =>
          <div className="col-6 col-lg-4" key={item.id}>
            <CardProudects Image={item.image} Title={item.title} Price={item.price} Id={item.id} />
          </div>
        )}


      </div>

    </section>
  )
}

export default AllProudect;
