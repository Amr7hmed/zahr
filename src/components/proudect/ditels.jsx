import React from 'react'
import Cover from './cover';
import Image from "../../images/product/image-proudect-one.png"
import Carousel from './carousel';
import Data from './data';
import ProudectEnd from './proudectend';
import ReviewsList from './reviews/reviewslist';
import SimilarProducts from './similarproducts';

function Ditels() {
    return (
        <section className='proudect__ditels'>
            <div className="row">
                <div className="col-md-12 col-lg-5">
                    <Cover Image={Image} />
                </div>

                <div className="col-md-12 col-lg-7">
                    <Data />
                </div>
                
                <div className="col-md-12 col-lg-5">
                    <Carousel />
                </div>

                
                <div className="col-md-12 col-lg-7">
                    <ProudectEnd/>
                </div>
            </div>

            <ReviewsList/>

            <SimilarProducts/>
        </section>
    )
}

export default Ditels;