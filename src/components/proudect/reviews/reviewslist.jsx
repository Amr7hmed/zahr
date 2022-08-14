import React, { useState } from 'react';
import ReviewItem from './reviewitem';
import User from "../../../images/icon/user-revewe.svg";

function ReviewsList() {
  const [toggole, setToggole] = useState(false);

  const Toggoleaction = () => {
    setToggole(!toggole)
  
  }
  return (
    <div className='proudect__reviewslist'>
      <h5>التقييمات</h5>

      <div className={toggole === false?"show list":"hide list"}>
        <ReviewItem Image={User} Title={"محمد على"} Description={"رائع المنتج جميل"} />
        <ReviewItem Image={User} Title={"محمد على"} Description={"رائع المنتج جميل"} />
      </div>
      <div className={toggole === false?"hide list-all":"show list-all"}>
        <ReviewItem Image={User} Title={"على"} Description={"رائع المنتج جميل"} />
        <ReviewItem Image={User} Title={"على"} Description={"رائع المنتج جميل"} />
        <ReviewItem Image={User} Title={"على"} Description={"رائع المنتج جميل"} />
        <ReviewItem Image={User} Title={"على"} Description={"رائع المنتج جميل"} />
        <ReviewItem Image={User} Title={"على"} Description={"رائع المنتج جميل"} />
        <ReviewItem Image={User} Title={"على"} Description={"رائع المنتج جميل"} />
      </div>

      <div className="button">
        <button className='show-all' type='button' onClick={Toggoleaction}>
        {toggole === false?
        "عرض كل التقيمات"
        :
        "عرض اقل"}
          
        </button>
      </div>

    </div>
  )
}

export default ReviewsList;