import React, { useEffect, useState } from "react";
import CardProudects from '../cards/cardproudects';
import { NavLink } from 'react-router-dom';



function SectionProudects(props) {
  const { Products } = props;
  
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
    <section className='home__proudects'>
        <div className="headr">
            <h3>أحدث المنتجات</h3>
        </div>
        <div className="container">
          <div className="row">
            {Products.map(item=>
            <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
              <CardProudects Image={item.image} Title={item.title} Price={item.price} Id={item.id} Style={"home_card"}/>
            </div>
              )}
          </div>
        </div>

      <NavLink to="/proudects"  className="show_all" onClick={scrollToTop}>عرض الكل</NavLink>
        </section>
  )
}

export default SectionProudects;