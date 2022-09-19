/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { deleteFavorite } from '../../api/actions';
import IconDelete from "../../images/icon/delete.png";
import { Authcontext } from '../../store/context.js';
import { useContext } from 'react';

function CardFav(props) {
    const {Image , Price ,Size ,Color,Title,Id,setLoading}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <div className='cardfav'>
        <div className="img">
            <img src={Image} alt="Image" />
        </div>

        <div className='contenet'>
            <div className="top">
                <h6>{Title}</h6>
                <button type="button" className="heart" onClick={()=>deleteFavorite(Id,setLoading)}>
                    <img src={IconDelete} alt="IconDelete" /></button>
            </div>
            <span className="price"> {Price} {" "} SAR</span>
            <span className="color">
                <span>{language === "En" ? "Color": "اللون"}</span>{" "}
                <span>{Color}</span>
            </span>

            <span className="size">
                <span>{language === "En" ? "Weight": "الوزن"}</span>{" "}
                <span>{Size} K.g</span>
            </span>
        </div>
    </div>
  )
}

export default CardFav;