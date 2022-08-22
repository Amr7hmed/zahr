/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import IconFav from "../../images/icon/heart_icon_fav.png";

function CardFav(props) {
    const {Image , Price ,Size ,Color,Title}=props;
  return (
    <div className='cardfav'>
        <div className="img">
            <img src={Image} alt="Image" />
        </div>

        <div className='contenet'>
            <div className="top">
                <h6>{Title}</h6>
                <span className="heart"><img src={IconFav} alt="IconFav" /></span>
            </div>
            <span className="price"> {Price} {" "} SAR</span>
            <span className="color">
                <span>اللون {" "}</span>
                <span>{Color}</span>
            </span>

            <span className="size">
                <span>الوزن {" "}</span>
                <span>{Size} K.g</span>
            </span>
        </div>
    </div>
  )
}

export default CardFav;