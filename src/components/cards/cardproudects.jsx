import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../images/icon/heart-icon.svg";
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context';
import swal from "sweetalert";
import { AddToFavourite } from "../../api/actions";

function CardProudects(props) {
  const { Image, Price, Style, Id, proudect } = props;
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
    if(language === "En" ){
      swal({
        text: "Item Has Been Added !",
        icon: "success",
        buttons: false,
        timer: 3000
      })
    }else{
     swal({
      text: "تمت إضافة المنتج",
      icon: "success",
      buttons: false,
      timer: 3000
    })
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
        <span className='title'>
                  {language === "En" ? proudect.title: proudect.title_ar}
          </span>

        <span className='end'>
          
        <span className="price">
        {proudect.price_before_discount > proudect.price ?
          <>
          <span className='overprice'>
            {proudect.price_before_discount}  {" "} 
                {language === "En" ? "SAR": " ر.س "}
            </span>
            {" "}
          <span>
            {proudect.price}  {" "} 
            {language === "En" ? "SAR": "ر.س"}
          </span>
          </>
          :
          <span>
            {proudect.price}  {" "} 
            {language === "En" ? "SAR": "ر.س"}
          </span>
          
          }
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