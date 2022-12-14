import React, { useContext, useEffect, useState } from "react";
import Links from '../../components/checkout/links';
import { useNavigate, useParams } from 'react-router-dom';
import OrderDetails from "../../components/payment/orderdetails";
import ShippingDetails from "../../components/payment/shippingdetails.jsx";
import Accept from "../../images/icon/accept.png";
import Paymentform from "../../components/payment/paymentform.jsx";
import { GetLastAddress } from "../../api/actions";
import { Api } from "../../api";
import axios from "axios";
import { Authcontext } from "../../store/context";
import swal from "sweetalert";


function Payment() {
  const [payment, Setpayment] = useState("");
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const setCart = authcontext.setCart;
  let navigate = useNavigate();

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


 const PaymentPay = (data) => {
  const options = {
    method: "post",
    url: `${Api}order/payment`,
    headers: {
      Accept: "application/json",
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    },
    data: JSON.stringify({
      "payment": data
    })
  };
  axios(options).then(function (response) {
    console.log("handle success");
    console.log(response.messge);
    setCart([])
      if(data==="cash" ){
        console.log(data)
        navigate(`/paymentdone/${id}`);
        scrollToTop();
      }else if(data==="visa"){
        console.log(data)
        scrollToTop();
      }else{
        return null;
      }
  })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

  const handleDone = (e) => {
    e.preventDefault();
    if (payment === "") {
      {language === "En"?
      swal({text: "Please select a payment method !",icon: "warning",buttons: false,timer: 3000})
      :
      swal({text: "???????? ?????????? ?????????? ??????????",icon: "warning",buttons: false,timer: 3000})
    }
    } else {
      //navigate(`/paymentdone/${id}`);
      PaymentPay(payment)
    }
  };

  const handleCash = () => {
    Setpayment("cash")
   // PaymentPay("cash")
  };

  const handleVisa = () => {
    Setpayment("visa")
    //PaymentPay("visa")
  };

  useEffect(() => {
    GetLastAddress(setLoading, setAddress)
  }, [loading]);

  return (
    <section className='payment'>
      <div className="container">
        <Links Stylebultes={"vectorothree"} />

        <div className='checkout__data'>

          <div className="checkout__header">
            <h5>?????????? ??????????</h5>
          </div>


          <div className="row">
            <div className="col-md-12 col-lg-8">
              <button type="button" className={payment === "visa" ? "btn-payment active" : "btn-payment"} onClick={handleVisa}>
                
            {language === "En" ? "Pay With A Visa Card" : "?????????? ???????????????? ???????? ??????????"}  
                
                

                <img src={Accept} alt="Accept" />
              </button>

              <button type="button" className={payment === "cash" ? "btn-payment active" : "btn-payment"} onClick={handleCash}>
               
            {language === "En" ? "Pay Cash" : " ?????????? ????????"}  

                <img src={Accept} alt="Accept" />
              </button>
              {payment === "visa" ? <Paymentform /> : ""}
            </div>
            <div className="col-md-12 col-lg-4">
              <OrderDetails />

              <ShippingDetails Title={"????????????"}
                Cartid={address.id}
                Nameuser={address.name}
                Addres={`${address.city} ${" - "} ${address.address}`}
                Phone={address.phone} ShowButtons={true} />
            </div>

            <div className="buttons col-12">
              <button className="btn-done" type="button" onClick={handleDone}>
            {language === "En" ? "Confirmation" : "?????????? ??????????"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment;