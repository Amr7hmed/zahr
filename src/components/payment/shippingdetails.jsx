import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShippingDetails(Props) {
    let navigate  = useNavigate();
  
    const handleDone = (e) => {
      e.preventDefault();
      navigate("/checkout");
  };
    const {Title,Nameuser,Addres,Phone }=Props;
  return (
    <div className="shippingdetails">
        <h6> الشحن الي</h6>
        <span className='title'>{Title}</span>
        <span className='nameuser'>{Nameuser}</span>
        <span className='addres'>{Addres}</span>
        <span className='phone'>{Phone}</span>
        <div className="buttons">
            <button  type="button" className='btn-editepyment'  onClick={handleDone}>
                تعديل
            </button>
</div>
</div>
  )
}

export default ShippingDetails;