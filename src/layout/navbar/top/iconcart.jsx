import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { GetcartIcon } from '../../../api/actions';
import { Authcontext } from '../../../store/context';

function IconCart() {
    const authcontext = useContext(Authcontext);
    const cart = authcontext.cart;
    const setCart = authcontext.setCart;

    

      useEffect(() => {
       GetcartIcon(setCart)
     },[])
  return (
      <span>{cart.length}</span>
  )
}

export default IconCart;