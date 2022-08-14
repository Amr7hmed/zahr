import React from 'react'
import { NavLink } from 'react-router-dom';

function Slider() {
  return (
    <div className='home__slider'>
      <div className="overload"> </div>
      <div className="content">
        <h2>
          مرحبا بكم في زهر!
        </h2>
        <p>
          تحف وزهور عالية الجودة يتم شحنها إليك مباشرة
        </p>
        
      <NavLink to="/proudects"  className="btn">تسوق الان </NavLink>
      </div>
    </div>
  )
}

export default Slider;