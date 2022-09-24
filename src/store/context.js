import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Api } from '../api';
import { AddToCart, AddToFavourite } from '../api/actions';

export const Authcontext = React.createContext();

export function Contextprovider(props) {
    const [language, setLanguage] = useState("Ar");

    //cart
    const [cart, setCart] = useState([]);
    //Wishlist
    const [wishlist, setWishlist] = useState([]);
    
    useEffect(() => {

      if(localStorage.getItem("language") !== null){
        setLanguage("En")
      }else{
        setLanguage("Ar")
      }
    }, [language]);
    

    /*wishlist,setWishlist */
    const value = {
        language: language,
        setLanguage: setLanguage,
        cart: cart,
        setCart: setCart,
        //Wishlist
        wishlist: wishlist,
        setWishlist: setWishlist,
    }

    return (
        <Authcontext.Provider value={value}>
            {props.children}
        </Authcontext.Provider>
    )
}


/*


  const addCart = (id) => {
    setCart([...cart, Item])
    //alert("This Item Is Add To Cart!")
    AddToCart(id)
    if(language === "En" ){
      swal("Item Has Been Added !", "", "success");
    }else{
      swal("تمت إضافة العنصر", "", "success");
    }
    
  }
  const addWishlist = (id) => {
    setWishlist([...wishlist, Item])
    AddToFavourite(id)
    if(language === "En" ){
      swal("Item Has Been Added !", "", "success");
    }else{
      swal("تمت إضافة العنصر", "", "success");
    }
  }

*/