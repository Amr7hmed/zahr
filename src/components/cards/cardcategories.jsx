import React from 'react';
import { NavLink } from 'react-router-dom';

function CardCategories(props) {
    const {Image ,Title , Id}=props;
  return (
    <NavLink to={`/proudectscategories/${Id}`} className='categories_card'>
        <div className="img">
            <img src={Image} alt="" />
        </div>
        <div className="text">
            <h6>{Title}</h6>
        </div>
    </NavLink>
  )
}

export default CardCategories;