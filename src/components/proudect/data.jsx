/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Star from "../../images/icon/star.svg";
import Share from "../../images/icon/share.png";
import PoupeRevewe from './pouperevewe';

function Data() {
  return (
    <div className='proudect__data'>
      <span className='over'> كوبون Dg522 - خصم إضافي 25%</span>
      <div className='revewe'>
        <span className='star'>
          <span>
            4.6
          </span>
          <img src={Star} alt="Star" />
        </span>
        <a href="#" className='text'>
          30 تقييمات
        </a>

      </div>

      <div className="title">
        <span className="left">
          مزهرية مضلعة ثلاثية الابعاد
        </span>
        <span className="right">
          <img src={Share} alt="Share" />
        </span>

      </div>

      <div className="price">
        <span>
          SAR 74.75
        </span>
        <span className="btn-revewe" data-bs-toggle="modal" data-bs-target="#exampleModal">
          تقييم المنتج
        </span>
        <PoupeRevewe/>
      </div>

      <div className="color">
        <span>اللون</span>{" "}<span>متعدد الألوان</span>
      </div>

      
      <div className="size">
        <span>الوزن</span>{" "}<span>2.5 kg </span>
      </div>


      <div className="description">
        <div className="title_description">
          وصف المنتج
          </div>
          
          <ul>
            <li>
              <span>المواد الأساسية </span>
              <span>بلاستيك</span>
            </li>

            
            <li>
              <span> أسم اللون </span>
              <span>متعدد الألوان</span>
            </li>


            
            <li>
              <span> بلد المنشأ</span>
              <span> الصين</span>
            </li>

            
            <li>
              <span>أسم الموديل</span>
              <span> Vase</span>
            </li>
          </ul>
      </div>
    </div>
  )
}

export default Data;