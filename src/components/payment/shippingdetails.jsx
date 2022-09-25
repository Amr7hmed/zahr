import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../store/context';

function ShippingDetails(props) {
  const {Title,Nameuser,Addres,Phone ,Cartid}=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
    let navigate  = useNavigate();
  
    const handleDone = (e) => {
      e.preventDefault();
      navigate(`/checkout/${Cartid}`);
  };
  return (
    <div className="shippingdetails">
        <h6> 
            {language === "En" ? "Shipping to" : "الشحن الي"}
        </h6>
        <span className='title'>{Title}</span>
        <span className='nameuser'>{Nameuser}</span>
        <span className='addres'>{Addres}</span>
        <span className='phone'>{Phone}</span>
        <div className="buttons">
            <button  type="button" className='btn-editepyment'  onClick={handleDone}>
            {language === "En" ? "Modify" : "تعديل"}
                
            </button>
</div>
</div>
  )
}

export default ShippingDetails;