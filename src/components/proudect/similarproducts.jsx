import React from 'react';
import CardProudects from '../cards/cardproudects';
import Image from "../../images/product/images.jpeg";

function SimilarProducts() {
  return (
    <div className='similarproducts'>
        <h4>منتجات مشابهه</h4>

        <div className="row">
            <div className="col-md-12 col-lg-4">
          <CardProudects
            Image={Image}
            Title={"زهور طبيعيه"}
            Price={"74.75"}Id={"1"}
          />

            </div>
            <div className="col-md-12 col-lg-4">
          <CardProudects
            Image={Image}
            Title={"زهور طبيعيه"}
            Price={"74.75"} Id={"1"}
          />

            </div>
            <div className="col-md-12 col-lg-4">
          <CardProudects
            Image={Image}
            Title={"زهور طبيعيه"}
            Price={"74.75"} Id={"1"}
          />

            </div>
        </div>
    </div>
  )
}

export default SimilarProducts;