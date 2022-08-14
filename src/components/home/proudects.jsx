import React from 'react'
import CardProudects from '../cards/cardproudects';
import { NavLink } from 'react-router-dom';
import Image from '../../images/product/image-1.png';



function SectionProudects() {
  return (
    <section className='home__proudects'>
        <div className="headr">
            <h3>أحدث المنتجات</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={Image} Title={"زهور طبيعيه"} Price={"74.75"} Id={"1"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={Image} Title={"زهور طبيعيه"} Price={"74.75"} Id={"1"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={Image} Title={"زهور طبيعيه"} Price={"74.75"} Id={"1"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={Image} Title={"زهور طبيعيه"} Price={"74.75"} Id={"1"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={Image} Title={"زهور طبيعيه"} Price={"74.75"} Id={"1"}/>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <CardProudects Image={Image} Title={"زهور طبيعيه"} Price={"74.75"} Id={"1"}/>
            </div>
          </div>
        </div>

      <NavLink to="/proudects"  className="show_all">عرض الكل</NavLink>
        </section>
  )
}

export default SectionProudects;