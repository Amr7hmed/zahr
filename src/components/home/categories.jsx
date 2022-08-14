import React from 'react'
import CardCategories from '../cards/cardcategories';
import Image1 from "../../images/categories/Image-3.png";
import Image2 from "../../images/categories/image-4.png";
import Image3 from "../../images/categories/Image-5.png";

function SectionCategories() {
    return (
        <section className='home__categories'>
            <div className="headr">
                <h3>الفئات</h3>
                <span></span>
            </div>
            <div className="container">

                <div className="home__categories__row">
                    <CardCategories Image={Image1} Title="زهور"  Id={"1"}/>
                    <CardCategories Image={Image2} Title="تحف"  Id={"1"}/>
                    <CardCategories Image={Image3} Title="أوانى منزليه"  Id={"1"}/>
                    <CardCategories Image={Image1} Title="تحف"  Id={"1"}/>
                    <CardCategories Image={Image3} Title="زهور"  Id={"1"}/>
                </div>
            </div>

        </section>
    )
}

export default SectionCategories;