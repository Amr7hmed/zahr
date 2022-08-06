import React from 'react'
import CardCategories from '../cards/cardcategories';
import Image1 from "../../images/categories/Image-3.png";

function SectionCategories() {
    return (
        <section className='home__categories'>
            <div className="headr">
                <h3>الفئات</h3>
                <span></span>
            </div>
            <div className="container">

                <div className="home__categories__row">
                    <CardCategories Image={Image1} Title="زهور" />
                    <CardCategories Image={Image1} Title="تحف" />
                    <CardCategories Image={Image1} Title="أوانى منزليه" />
                    <CardCategories Image={Image1} Title="تحف" />
                    <CardCategories Image={Image1} Title="زهور" />
                </div>
            </div>

        </section>
    )
}

export default SectionCategories;