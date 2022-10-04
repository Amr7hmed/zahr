/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { deleteFavorite } from '../../api/actions';
import IconDelete from "../../images/icon/delete.png";
import { Authcontext } from '../../store/context.js';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

function CardFav(props) {
  const { Image, Price, Size, Color, Id, setLoading, Item } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [isVisible, setIsVisible] = useState(false);
  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className='cardfav'>
      <NavLink to={`/proudect/${Id}`} className="img" onClick={scrollToTop}>
        <img src={Image} alt="Image" />
      </NavLink>

      <div className='contenet'>
        <div className="top">
          <h6>
            {language === "En" ? Item.title : Item.title_ar}
          </h6>
          <button type="button" className="heart" onClick={() => deleteFavorite(Id, setLoading)}>
            <img src={IconDelete} alt="IconDelete" /></button>
        </div>
        <span className="price">

          {Item.price_before_discount > Item.price ?
            <>
              <span className='overprice'>
                {Item.price_before_discount}  {" "}
                {language === "En" ? "SAR" : " ر.س "}  {" "}
              </span>
              {" "}
              <span>
                {Item.price}  {" "}
                {language === "En" ? "SAR" : "ر.س"}  {" "}
              </span>
            </>
            :
            <span>
              {Item.price}  {" "}
              {language === "En" ? "SAR" : "ر.س"}  {" "}
            </span>

          }
        </span>
        <span className="color">
          <span>{language === "En" ? "Color" : "اللون"}</span>{" "}
          <span>{Color}</span>
        </span>

        <span className="size">
          <span>{language === "En" ? "Weight" : "الوزن"}</span>{" "}
          <span>{Size} {" "}
            {language === "En" ? " K.g" : "كجم"}
          </span>
        </span>
      </div>
    </div>
  )
}

export default CardFav;