/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import Star from "../../../images/icon/star.svg";

function ReviewItem(props) {
    const {Image , Title , Description,Rate}=props;
    const Newrate=parseInt(Rate);
    const Stars=[Star,Star,Star,Star,Star];
    const NewArray=[];
    let i;
    for(i = 0 ; i < Newrate; i++){
      NewArray.push(Stars[i]);
    }



  return (
    <div className='reviewitem'>
        <div className="image">
            <img src={Image} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
              }} />
        </div>
        <div className="contetext">
            <span className="title">
                {Title}
                </span>

            <span className="star_list">
              {NewArray.map((item,index)=><img src={item} alt="Star" key={index}/>)}
            </span>


            <span className='description'>
              {Description}
            </span>
        </div>
    </div>
  )
}

export default ReviewItem;