import React, { useContext } from 'react'
import { Authcontext } from '../../store/context';

function CardOrder(props) {
    const {Image,Title , Color ,Weight ,Price}=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  return (
    <div className='cardorder'>
        <div className="contect">

        <div className="image">
            <img src={Image} alt="Image" />
        </div>

        <div className="text">
            <span className='title'>{Title}</span>

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
                <span>{Weight}kg</span>
            </div>
        </div>
        </div>
        <div className="price">{Price}</div>
    </div>
  )
}

export default CardOrder;