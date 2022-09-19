/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useContext } from 'react';
import { deleteCart } from '../../api/actions';
import IconDelete from "../../images/icon/delete.png";
import { Authcontext } from '../../store/context';
import OverIcon from '../../images/icon/sale-tag.png';

function Cardcart(props) {
    const {Image , Price ,Size ,Color , Hidebutton ,Title,Cartid,Id,setLoading ,Count}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <div className='cardcart'>
        <div className="img">
            <img src={Image} alt="Image" className='cover'/>
            <span className="over">
                <img src={OverIcon} alt="Over Icon" className='overicon'/>
            </span>
        </div>

        <div className='contenet'>
            <div className="top">
                <h6>{Title}</h6>
                {Hidebutton === false ?"":
                <button type="button" className="heart" onClick={()=>deleteCart(Cartid,Id,setLoading)}>
                    <img src={IconDelete} alt="IconDelete" /></button>
                }
            </div>
            <span className="price"> {Price} {" "} SAR</span>
            <span className="color">
                <span>{language === "En" ? "Color": "اللون"}</span>{" "}
                <span>{Color}</span>
            </span>
            <span className="size">
                <span>{language === "En" ? "Quantity": "الكميه"}</span>{" "}
                <span>{Count}</span>
            </span>

            <span className="size">
                <span>{language === "En" ? "Weight": "الوزن"}</span>{" "}
                <span>{Size} K.g</span>
            </span>
        </div>
    </div>
  )
}

export default Cardcart;