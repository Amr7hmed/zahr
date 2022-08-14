import React from 'react'
import CardServices from '../cards/cardservices';
import Image1 from "../../images/services/image-1.png";
import Image2 from "../../images/services/image-2.png";
import Image3 from "../../images/services/image-3.png";
import Backgroud from "../../images/services/backgroud.png";

function Services() {
    return (
        <section className='home__services'>
<div className="over_background">
<img src={Backgroud} alt="Backgroud" />
</div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <CardServices  Image={Image3} 
                        Title={"دفع سهل"}/>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <CardServices  Image={Image1} 
                        Title={" توصيلة علي الوقت"}/>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <CardServices  Image={Image2} 
                        Title={"صور واقعية"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;