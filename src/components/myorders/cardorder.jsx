import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';

function CardOrder(props) {
    const {Image,Item , Color ,Weight ,Price ,Status}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <div className='cardorder'>
        <div className="contect">

        <NavLink to={`/proudect/${Item.id}`}  className="image">
            <img src={Image} alt="Image" />
        </NavLink>

        <div className="text">
            <span className='title'>
                  {language === "En" ? Item.title: Item.title_ar}
                </span>

            <div className="colors">
                <span>
                {language === "En" ? "Colors" : "الالوان"}
                    </span>{" "}
                <span>{Color}</span>
            </div>

            
            <div className="weight">
                <span>
                {language === "En" ? "Weight" : "الوزن"}
                </span>{" "}
                <span>{Weight}  {" "}
                {language === "En" ? " K.g": "كجم"}
                </span>
            </div>

            <div className="weight">
                <span>
                {language === "En" ? "Order Status" : "حالة الطلب"}
                </span>{" "}
                <span>{Status}  {" "}
                </span>
            </div>
        </div>
        </div>
        <div className="price">{Price}</div>
    </div>
  )
}

export default CardOrder;