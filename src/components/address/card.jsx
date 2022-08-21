import React from 'react'
import ModalEditeAddress from './modalediteaddress.jsx';

function CardAddress(Props) {
    const {Title,Nameuser,Addres,Phone ,ShowButtons}=Props;
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
        <ModalEditeAddress Nameuser={"محمد علي اسماعيل"} 
          Addres={"العليا- مبني 5 -شقة 12"} Phone={"+9665559164782"} />
    </div>
  )
}

export default CardAddress;