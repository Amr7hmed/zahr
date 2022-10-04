import React, { useContext } from 'react'
import { deleteAddress } from '../../api/actions.js';
import { Authcontext } from '../../store/context.js';
import ModalEditeAddress from './modalediteaddress.jsx';

function CardAddress(Props) {
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const { Index, Nameuser, Addres, Phone, ShowButtons, Id, Item ,setLoading } = Props;
    
  const handleClick = (Id) => {
    console.log(Id);
    deleteAddress(Id, setLoading);
  };
    return (<div>
        {Index === 0 ?
            <h5>{language === "En" ? "Main Address" : "العنوان الاساسي"}</h5>
            :
            <h5>{language === "En" ? "Another Address" : "عنوان اخر"}</h5>
        }
        <div className='cardaddress'>
            <span className='nameuser'>{Nameuser}</span>
            <span className='addres'>{Addres}</span>
            <span className='phone'>{Phone}</span>
            {ShowButtons === false ? "" :
                <div className="buttons">
                    <button className="btn-delete" type="button"  onClick={() => handleClick(Id)}>
                        {language === "En" ? ("Delete ") : ("حذف")}
                    </button>
                    <button className="btn-edite" data-bs-toggle="modal" data-bs-target={`#modalediteaddress${Id}`}>
                        {language === "En" ? ("Edite ") : ("تعديل")}
                    </button>
                </div>
            }
            <ModalEditeAddress Id={Id} setLoading={setLoading}/>
        </div>
    </div>
    )
}

export default CardAddress;