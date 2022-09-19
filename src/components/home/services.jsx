import React from 'react'
import CardServices from '../cards/cardservices';
import Image1 from "../../images/services/image-1.png";
import Image2 from "../../images/services/image-2.png";
import Image3 from "../../images/services/image-3.png";
import Backgroud from "../../images/services/backgroud.png";

import Slider from "react-slick";

function Services() {
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",    
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    return (
        <section className='home__services'>
            <div className="over_background">
                <img src={Backgroud} alt="Backgroud" />
            </div>
            <div className='container'>
                    
          <Slider {...settings}>
                        <CardServices Image={Image3} Title={"دفع سهل"} />
                        <CardServices Image={Image1} Title={" توصيلة علي الوقت"} />
                        <CardServices Image={Image2} Title={"صور واقعية"} />
                        <CardServices Image={Image3} Title={"دفع سهل"} />
                        <CardServices Image={Image1} Title={" توصيلة علي الوقت"} />
                        <CardServices Image={Image2} Title={"صور واقعية"} />
                        <CardServices Image={Image3} Title={"دفع سهل"} />
                        <CardServices Image={Image1} Title={" توصيلة علي الوقت"} />
                        <CardServices Image={Image2} Title={"صور واقعية"} />
           </Slider>
            </div>
        </section>
    )
}

export default Services;


