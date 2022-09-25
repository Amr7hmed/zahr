import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Authcontext } from '../../store/context.js';
import ModalAddAddress from './modaladdaddress.jsx';

function CardButton() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  return (
    <div className='cardbutton'>
    <button type="button" data-bs-toggle="modal" data-bs-target="#modaladdaddress">
              {language === "En" ? "Add A New Title +" : "+ أضافة عنوان جديد"}
        </button>
        <ModalAddAddress />
        </div>
  )
}

export default CardButton