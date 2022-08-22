import React, { useState, useEffect } from "react";
import { Getcart } from "../../api/actions";
import Cardcart from '../../components/cart/Cardcart';
import OrderDetails from '../../components/cart/orderdetails';
import Loading from "../../layout/loading/loading";
import Imagrempity from "../../images/empty/shoppingcart-empty.png";
import Empty from "../../components/empty/index.jsx";

function Cart(props) {
  const { language  } = props;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartid, setCartid] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Getcart(setLoading, setProducts, setCartid);
  }, [loading]);
  return (
    <>
      {loading === false ? (
        <Loading />
        ) : products.length === 0 ? <>
        <Empty Image={Imagrempity} 
        Description={language === "En" ? ("Your Cart Is Empty")
         : ("عربة التسوق الخاصة بك فارغة")}
         Showbutton={true} ButtonTitle={language === "En" ? ("Shop Now"): ("تسوق الان")}
        Title={language === "En" ? ("Shopping Cart"): ("حقيبة التسوق")}
        />
        </>
        :(
        <section className='cart'>
          <div className="container">
            <div className="cart__header">
              <h5>حقيبة التسوق</h5>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-8">

                {products.map(item =>
                  <Cardcart Image={item.image}
                    Title={item.title} Id={item.id}
                    Color={item.colors}
                    Size={item.sizes} key={item.id} />
                )}
              </div>
              <div className="col-md-12 col-lg-4">
                <OrderDetails />
              </div>
            </div>

          </div>
        </section>
      )}
    </>
  )
}

export default Cart;


/*
*/