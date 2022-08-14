import React from 'react'
import { NavLink } from 'react-router-dom'

function CardButton() {
  return (
    <div className='cardbutton'>
    <NavLink to="/" >
        + أضافة عنوان جديد
        </NavLink>
        </div>
  )
}

export default CardButton