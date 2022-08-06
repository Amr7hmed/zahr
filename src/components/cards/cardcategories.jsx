import React from 'react';
import { NavLink } from 'react-router-dom';

function CardCategories(props) {
    const {Image ,Title}=props;
  return (
    <NavLink to="/" className='categories_card'>
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