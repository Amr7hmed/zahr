import React, { useContext, useEffect, useState } from 'react'
import Links from '../../components/checkout/links';
import { useNavigate, useParams } from 'react-router-dom';
import CardButton from '../../components/address/cardbutton.jsx';
import CardAddress from '../../components/address/card.jsx';
import { AddOrderAddress, GetLastAddress } from '../../api/actions';
import { Authcontext } from '../../store/context';
import swal from 'sweetalert';

function CheckOut() {
  let navigate = useNavigate();
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(() => {
    GetLastAddress(setLoading, setAddress)
  }, [loading]);

  console.log(address);

  const handleDone = (e) => {
    e.preventDefault();
    {
      address === null ? language === "En" ?
        swal({text: "Please add a Address !",icon: "warning",buttons: false,timer: 3000})
        :
        swal({text: "يرجى اضافه عنوان",icon: "warning",buttons: false,timer: 3000})
      :
      scrollToTop();
      //navigate(`/checkoutdata/${id}`);
      AddOrderAddress(address,id)
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
          <div className={address === null ? "checkout__rows checkout__rows_center" : "checkout__rows"}>
            {address === null ?
              "" :
              <CardAddress Index={0} Nameuser={address.name}
                Addres={`${address.city} ${" - "} ${address.address}`}
                Phone={address.phone} ShowButtons={false} Id={address.id} />
            }
            <CardButton setLoading={setLoading} />
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