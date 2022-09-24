import React, { useState } from 'react'
import Cover from './cover';
import Image from "../../images/product/image-proudect-one.png"
import Carousel from './carousel';
import Data from './data';
import ProudectEnd from './proudectend';
import ReviewsList from './reviews/reviewslist';
import SimilarProducts from './similarproducts';

function Ditels(props) {
    const {proudect,Similarproducts,Id}=props;
    const [index, setindex] = useState(0);
    console.log(proudect);
    return (
        <section className='proudect__ditels'>
            <div className="row">
                <div className="col-md-12 col-lg-5">
                    <Cover Image={proudect.image} Images={proudect.images} index={index}/>
                </div>

                <div className="col-md-12 col-lg-7">
                    <Data Proudect={proudect} Id={Id}/>
                </div>
                
                <div className="col-md-12 col-lg-5">
                    <Carousel Images={proudect.images} setindex={setindex}/>
                </div>

                
                <div className="col-md-12 col-lg-7">
                    <ProudectEnd proudect={proudect}/>
                </div>
            </div>

            <ReviewsList Rates={proudect.rates}/>

            <SimilarProducts Similarproducts={Similarproducts}/>
        </section>
    )
}

export default Ditels;