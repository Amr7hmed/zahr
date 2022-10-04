import React, { useState, useEffect, useContext } from "react";
import { Getfavourites } from "../../api/actions";
import Empty from "../../components/empty";
import CardFav from '../../components/favorite/cardfav';
import Loading from "../../layout/loading/loading";
import Imagrempity from "../../images/empty/wishlist_empty.png";
import { Authcontext } from "../../store/context";

function Favorite() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const setWishlist = authcontext.setWishlist;



  useEffect(() => {
    Getfavourites(setLoading,setProducts,setWishlist)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);


  return (<>
    {loading === false ? (
        <Loading />
        ): products.length === 0 ? <>
      <Empty Image={Imagrempity} 
      Description={language === "En" ? ("There Is Nothing In The Favourites")
       : ("لا يوجد شئ في المفضلة")}
       Showbutton={false} 
      Title={language === "En" ? ("My Favourite")
      : ("مفضلتي")}
      />
      </>
        :(<section className='favorite'>
      <div className="container">
        <div className="favorite__header">
          <h5>
          {language === "En" ? "My Favourite": "مفضلتي"}
          </h5>
        </div>
        <div className="favorite__items">
        
        {products.map(item=>
          <CardFav Image={item.product.image}  Price={item.product.price} Color={item.product.colors}
            Size={item.product.weight} key={item.product.id}
             Id={item.product.id} setLoading={setLoading} Item={item.product}/>
            )}
        </div>
      </div>
    </section>
      )}
            </>
  )
}

export default Favorite;

