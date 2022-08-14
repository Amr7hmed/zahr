/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Star from "../../../images/icon/star.svg";

function ReviewItem(props) {
    const {Image , Title , Description}=props;
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
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
            </span>


            <span className='description'>
              {Description}
            </span>
        </div>
    </div>
  )
}

export default ReviewItem;