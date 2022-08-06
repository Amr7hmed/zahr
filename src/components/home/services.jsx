import React from 'react'
import CardServices from '../cards/cardservices';

function Services() {
    return (
        <section className='home__services'>

            <div className='container'>
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <CardServices  Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} 
                        Title={"دفع سهل"}/>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <CardServices  Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} 
                        Title={" توصيلة علي الوقت"}/>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <CardServices  Image={"https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg"} 
                        Title={"صور واقعية"}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;