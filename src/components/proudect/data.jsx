/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Star from "../../images/icon/star.svg";
import Share from "../../images/icon/share.png";
import PoupeRevewe from './pouperevewe';

function Data(props) {
  const { Proudect ,Id} = props;
  return (
    <div className='proudect__data'>
      <span className='over'> كوبون Dg522 - خصم إضافي 25%</span>
      <div className='revewe'>
        <span className='star'>
          <span>{/*
          {Proudect.rates.rate}
           */}
           4.6
          </span>
          <img src={Star} alt="Star" />
        </span>
        <a href="#" className='text'>

          {/*
        
        {Proudect.rating.count} 
  */}
  
  تقييمات
        </a>

      </div>

      <div className="title">
        <span className="left">
          {Proudect.title}
        </span>
        <span className="right">
          <img src={Share} alt="Share" />
        </span>

      </div>
      <div className="price">
        <span>
          SAR {Proudect.price}
        </span>
        <span className="btn-revewe" data-bs-toggle="modal" data-bs-target="#exampleModal">
          تقييم المنتج
        </span>
        <PoupeRevewe Id={Id} />
      </div>

      <div className="color">
        <span>اللون</span>{" "}
        {Proudect.colors.map((item, index) =>
          <span key={index}>
            {item}
          </span>
        )}
      </div>


      <div className="size">
        <span>الوزن</span>{" "}<span>{Proudect.weight} kg </span>
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

            {Proudect.colors.map((item, index) =>
              <span key={index}>
                {item}
              </span>)}
          </li>



          <li>
            <span> بلد المنشأ</span>
            <span> الصين</span>
          </li>


          <li>
            <span>أسم الموديل</span>
            <span> {Proudect.brand}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Data;