import React from 'react'
import CardProudects from '../cards/cardproudects';
import { NavLink } from 'react-router-dom';



function SectionProudects() {
  return (
    <section className='home__proudects'>
        <div className="headr">
            <h3>أحدث المنتجات</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} Title={"زهور طبيعيه"} Price={"74.75"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} Title={"زهور طبيعيه"} Price={"74.75"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} Title={"زهور طبيعيه"} Price={"74.75"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} Title={"زهور طبيعيه"} Price={"74.75"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} Title={"زهور طبيعيه"} Price={"74.75"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} Title={"زهور طبيعيه"} Price={"74.75"}/>
            </div>
          </div>
        </div>

      <NavLink to="/products"  className="show_all">عرض الكل</NavLink>
        </section>
  )
}

export default SectionProudects;