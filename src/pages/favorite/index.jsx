import React from 'react'
import CardFav from '../../components/favorite/cardfav';
import Image from "../../images/product/image-proudect-one.png";

function Favorite() {
  return (
    <section className='favorite'>
      <div className="container">
        <div className="favorite__header">
          <h5>
            مفضلتي
          </h5>
        </div>
        <div className="favorite__items">
          <CardFav Image={Image} Price={"74.5"} Color={"متعدد الألوان"} 
          Size={"2.5"}/>

          
<CardFav Image={Image} Price={"74.5"} Color={"متعدد الألوان"} 
          Size={"2.5"}/>
        </div>
      </div>
    </section>
  )
}

export default Favorite;