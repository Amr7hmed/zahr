import React from "react";
import Slider from "react-slick";
import Image from "../../images/product/image-proudect-one.png"

function Carousel(props) {
    const {Images ,setindex}=props;
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    dots: true,
    infinite: true,  
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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
          slidesToShow: 3,
          slidesToScroll: 4,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 5,
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
          {Images.map((item,index)=>
            <div className="item">
              <img src={item.image} alt="dress" className="img-ouer" onClick={()=>setindex(index)} />
            </div>
              )}
            {/*
          {Images.map(item=>)}
        */}




            </Slider>

          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;