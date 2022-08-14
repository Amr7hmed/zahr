import React from "react";
import Slider from "react-slick";
import Image from "../../images/product/image-proudect-one.png"

function Carousel() {
    
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <>
      <div className="container">
        <div className="proudect__carousel">

          <div className="proudect__carousel__items">


          <Slider {...settings}>
            <div className="item">
              <img src={Image} alt="dress" className="img-ouer" />
            </div>

            <div className="item">
              <img src={Image} alt="dress" className="img-ouer" />
            </div>

            <div className="item">
              <img src={Image} alt="dress" className="img-ouer" />
            </div>
            <div className="item">
              <img src={Image} alt="dress" className="img-ouer" />
            </div>

            <div className="item">
              <img src={Image} alt="dress" className="img-ouer" />
            </div>

            <div className="item">
              <img src={Image} alt="dress" className="img-ouer" />
            </div>


            </Slider>

          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;