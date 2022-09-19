import React, { useContext, useEffect, useState } from 'react'
import Links from '../../components/checkout/links';
import { useNavigate, useParams } from 'react-router-dom';
import CardButton from '../../components/address/cardbutton.jsx';
import CardAddress from '../../components/address/card.jsx';
import { GetLastAddress } from '../../api/actions';
import { Authcontext } from '../../store/context';
import swal from 'sweetalert';

function CheckOut() {
  let navigate = useNavigate();
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const { id } = useParams();

  useEffect(() => {
    GetLastAddress(setLoading, setAddress)
  }, [loading]);

  const handleDone = (e) => {
    e.preventDefault();
    {address === null ? language === "En"?
      swal("Please add a Address !", "", "warning"):
      swal("يرجى اضافه عنوان", "", "warning")
      :
      navigate(`/checkoutdata/${id}`);
    }
  };


  console.log(address);
  return (
    <section className='checkout'>
      <div className="container">
        <Links Stylebultes={"vectorone"} />
        <div className='checkout__data'>
          
        <div className="checkout__header">
          <h5>
            {language === "En" ? "Shipping Address" : " عنوان الشحن"}
          </h5>
        </div>
        {address === null ? "" :
          <div className="checkout__detiles">
            <h6>
              {language === "En" ? "Main Address" : "العنوان الاساسي"}
            </h6>
          </div>
        }
        <div className={address === null ? "checkout__rows checkout__rows_center" : "checkout__rows"}>
          {address === null ?
            "" :
            <CardAddress Title={"المنزل"} Nameuser={address.name}
              Addres={`${address.city} ${" - "} ${address.address}`}
              Phone={address.phone} ShowButtons={false} Id={address.id} />
          }
          <CardButton />
        </div>

        <div className="buttons">
          {address === null ?
            <button type="button" className='btn-done button-disabled' onClick={handleDone}>
              {language === "En" ? "Continuation" : "استمرار"}
            </button>
            :
            <button type="button" className='btn-done' onClick={handleDone}>
              {language === "En" ? "Continuation" : "استمرار"}
            </button>
          }
        </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOut;