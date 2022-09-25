import React, { useContext } from 'react'
import { Authcontext } from '../../store/context.js';
import ModalEditeAddress from './modalediteaddress.jsx';

function CardAddress(Props) {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const { Title, Nameuser, Addres, Phone, ShowButtons, Id, Item } = Props;
    return (<>
        {Title === "المنزل" ?
            <h5>{language === "En" ? "Main Address" : "العنوان الاساسي"}</h5>
            :
            <h5>{language === "En" ? "Another Address" : "عنوان اخر"}</h5>
        }
        <div className='cardaddress'>
            <span className='title'>{Title}</span>
            <span className='nameuser'>{Nameuser}</span>
            <span className='addres'>{Addres}</span>
            <span className='phone'>{Phone}</span>
            {ShowButtons === false ? "" :
                <div className="buttons">
                    <button className="btn-delete">
                        {language === "En" ? ("Delete ") : ("حذف")}
                    </button>
                    <button className="btn-edite" data-bs-toggle="modal" data-bs-target="#modalediteaddress">
                        {language === "En" ? ("Edite ") : ("تعديل")}
                    </button>
                </div>
            }
            <ModalEditeAddress Id={Id} />
        </div>
    </>
    )
}

export default CardAddress;