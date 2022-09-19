import React from 'react'
import ModalEditeAddress from './modalediteaddress.jsx';

function CardAddress(Props) {
    const {Title,Nameuser,Addres,Phone ,ShowButtons, Id}=Props;
  return (
    <div className='cardaddress'>
        <span className='title'>{Title}</span>
        <span className='nameuser'>{Nameuser}</span>
        <span className='addres'>{Addres}</span>
        <span className='phone'>{Phone}</span>
        {ShowButtons===false ?"":
        <div className="buttons">
            <button className="btn-delete">
                حذف
            </button>
            <button className="btn-edite" data-bs-toggle="modal" data-bs-target="#modalediteaddress">
                تعديل
            </button>
        </div>
        }
        <ModalEditeAddress Id={Id}/>
    </div>
  )
}

export default CardAddress;