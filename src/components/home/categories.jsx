import React from 'react'
import { useContext } from 'react';
import { Authcontext } from '../../store/context';
import CardCategories from '../cards/cardcategories';

function SectionCategories(props) {
    const { Categories } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    return (
        <section className='home__categories'>
            <div className="headr">
      {language === "En" ? <h3>Categories</h3> : <h3>الفئات</h3>}
                <span></span>
            </div>
            <div className="container">

                <div className="home__categories__row">
                    {Categories.map(item =>
                        <CardCategories Image={item.image} NameEn={item.name_en}
                            NameAr={item.name_ar} Id={item.id} key={item.id} />
                    )}
                </div>
            </div>

        </section>
    )
}

export default SectionCategories;