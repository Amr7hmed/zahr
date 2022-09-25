/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from 'react';
import Star from "../../../images/icon/star.svg";

function ReviewItem(props) {
    const {Image , Title , Description,Rate}=props;
    console.log(Rate);
    const Newrate=parseInt(Rate);
    const Stars=[Star,Star,Star,Star,Star];
    const NewArray=[];
    let i;
    for(i = 0 ; i < Newrate; i++){
      NewArray.push(Stars[i]);
    }

  console.log(NewArray);


  return (
    <div className='reviewitem'>
        <div className="image">
            <img src={Image} alt="Image" />
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