import React, { useContext, useEffect } from 'react'
import { GetcartIcon, GetfavouritesIcon } from '../../../api/actions';
import { Authcontext } from '../../../store/context';

function IconWishlist() {
    const authcontext = useContext(Authcontext);
    const wishlist = authcontext.wishlist;
    const setWishlist = authcontext.setWishlist;

    

      useEffect(() => {
        GetfavouritesIcon(setWishlist)
     },[])
  return (<>
  {wishlist.length === 0 ?"":
    <span>{wishlist.length}</span>
  }
  </>
  )
}

export default IconWishlist;