import React from 'react';
import Links from './links';
import ProudectsSort from './proudectssort';

function Proudectsnav(props) {
  const{CategorieId , setProducts ,name}=props;
  return (
    <section className='proudects__all__nav'>
      <Links name={name}/>
      <ProudectsSort CategorieId={CategorieId} setProducts={setProducts}/>
    </section>
  )
}

export default Proudectsnav