import React, { useEffect, useState } from 'react';

export const Authcontext = React.createContext();

export function Contextprovider(props) {

    //cart
    const [cart, setCart] = useState([]);
    //Wishlist
    const [wishlist, setWishlist] = useState([]);
    const [language, setLanguage] = useState("Ar");





    /*wishlist,setWishlist */
    const value = {
        //Cart
        cart: cart,
        setCart: setCart,
        //Wishlist
        wishlist: wishlist,
        setWishlist: setWishlist,
        language:language, 
        setLanguage:setLanguage,
    }

    return (
        <Authcontext.Provider value={value}>
            {props.children}
        </Authcontext.Provider>
    )
}