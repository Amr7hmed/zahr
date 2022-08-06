import React from 'react'
import SectionCategories from '../../components/home/categories.jsx';
import SectionProudects from '../../components/home/proudects.jsx';
import Slider from '../../components/home/slider.jsx';
import Offer from '../../components/home/offer.jsx';
import Services from '../../components/home/services.jsx';

function Home() {
  return (<section className='home'>
    <Slider />
    <SectionCategories />
    <SectionProudects />
    <Offer />
    <Services />
  </section>)
}

export default Home;