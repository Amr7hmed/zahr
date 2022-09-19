import React, { useState, useEffect } from "react";
import SectionCategories from '../../components/home/categories.jsx';
import SectionProudects from '../../components/home/proudects.jsx';
import Slider from '../../components/home/slider.jsx';
import Offer from '../../components/home/offer.jsx';
import Services from '../../components/home/services.jsx';
import { GetDataHome } from "../../api/actions.js";
import Loading from "../../layout/loading/loading.jsx";

function Home() {
  const [categories, setCategories] = useState("");
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetDataHome(setLoading, setCategories, setProducts);
  }, [loading]);
  
  return (<>
    {loading === false ? (
      <Loading />
    ) : (
      <section className='home'>
        <Slider />
        
        <SectionCategories Categories={categories}/>
        <SectionProudects Products={products}/>
         
           
        <Offer />
        <Services />
      </section>
    )}
  </>)
}

export default Home;
