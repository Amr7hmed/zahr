import React, { useState, useEffect, useContext } from "react";
import { Getfavourites } from "../../api/actions";
import Empty from "../../components/empty";
import CardFav from '../../components/favorite/cardfav';
import Loading from "../../layout/loading/loading";
import Imagrempity from "../../images/empty/wishlist_empty.png";

function Favorite(props) {
  const { language  } = props;
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    Getfavourites(setLoading,setProducts)
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
            مفضلتي
          </h5>
        </div>
        <div className="favorite__items">
        
        {products.map(item=>
          <CardFav Image={item.product.image}  Price={item.product.price} Color={"متعدد الألوان"}
            Size={"2.5"} Title={item.product.title} key={item.product.id}/>
            )}
        </div>
      </div>
    </section>
      )}
            </>
  )
}

export default Favorite;

/*

          
*/