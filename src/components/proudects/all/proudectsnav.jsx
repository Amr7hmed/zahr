import React from 'react';
import Links from './links';
import ProudectsSort from './proudectssort';

function Proudectsnav(props) {
  const{ setProducts }=props;
  return (
    <section className='proudects__all__nav'>
      <Links />
      <ProudectsSort setProducts={setProducts}/>
    </section>
  )
}

export default Proudectsnav