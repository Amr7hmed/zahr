/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import IconDelete from "../../images/icon/delete.png";

function Cardcart(props) {
    const {Image , Price ,Size ,Color , Hidebutton}=props;
  return (
    <div className='cardcart'>
        <div className="img">
            <img src={Image} alt="Image" />
        </div>

        <div className='contenet'>
            <div className="top">
                <h6>مزهرية مضلعة ثلاثية الابعاد</h6>
                {Hidebutton === false ?"":
                <button type="button" className="heart"><img src={IconDelete} alt="IconDelete" /></button>
                }
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

export default Cardcart;