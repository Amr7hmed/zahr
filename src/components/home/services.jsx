import React, { useState, useEffect, useContext } from "react";
import CardServices from '../cards/cardservices';
import Image1 from "../../images/services/image-1.png";
import Image2 from "../../images/services/image-2.png";
import Image3 from "../../images/services/image-3.png";
import Backgroud from "../../images/services/backgroud.png";

import Slider from "react-slick";
import { GetDataServices } from '../../api/actions';
import { Authcontext } from "../../store/context";


function Services() {
const [Services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  useEffect(() => {
    GetDataServices(setLoading,setServices);
  }, [loading]);
  

    
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
    return (<>
      {loading === false ? (
        ""
      ) : (
        <section className='home__services'>
            <div className="over_background">
                <img src={Backgroud} alt="Backgroud" />
            </div>
            <div className='container'>
                    
          <Slider {...settings}>
            {Services.map(item =>
                        <CardServices Image={item.image} 
                        Title={language === "En" ? item.title_en : item.title_ar} key={item.id}/>
              )}
           </Slider>
            </div>
        </section>
        )}
  </>)
}

export default Services;
