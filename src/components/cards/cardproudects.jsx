import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../images/icon/heart-icon.svg";
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';
import swal from "sweetalert";
import { AddToFavourite } from "../../api/actions";

function CardProudects(props) {
  const { Image, Title, Price, Style, Id, proudect } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const setWishlist = authcontext.setWishlist;
  const wishlist = authcontext.wishlist;

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

  const addWishlist = (id) => {
    setWishlist([...wishlist, proudect])
    // setShowalertWishlist(true);

    AddToFavourite(id)
    if (language === "En") {
      swal("Item Has Been Added !", "", "success");
    } else {
      swal("تمت إضافة المنتج", "", "success");
    }
  }
  return (
    <div className={Style + " proudects_card"}>
      <NavLink to={`/proudect/${Id}`} className="img" onClick={scrollToTop}>
        <img src={Image} alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
          }} />

      </NavLink>

      <div className="text">
        <span className='title'>{Title}</span>

        <span className='end'>
          <span className="price">
            {Price} SAR
          </span>

          {localStorage.getItem("token") === null ?
            <button className="btn-fivorte" data-bs-toggle="modal" data-bs-target="#exampleModalcart">
              <img src={CartIcon} alt="" />
            </button>
            :
            <button className="btn-fivorte" onClick={() => addWishlist(Id)}>
              <img src={CartIcon} alt="" />
            </button>
          }

        </span>
      </div>
    </div>
  )
}

export default CardProudects;