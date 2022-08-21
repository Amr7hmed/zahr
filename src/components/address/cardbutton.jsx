import React from 'react'
import { NavLink } from 'react-router-dom';
import ModalAddAddress from './modaladdaddress.jsx';

function CardButton() {
  return (
    <div className='cardbutton'>
    <button type="button" data-bs-toggle="modal" data-bs-target="#modaladdaddress">
        + أضافة عنوان جديد
        </button>
        <ModalAddAddress />
        </div>
  )
}

export default CardButton