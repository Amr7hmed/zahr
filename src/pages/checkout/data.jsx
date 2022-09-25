import React, { useContext, useState } from "react";
import Links from '../../components/checkout/links';
import { useNavigate, useParams } from 'react-router-dom';
import swal from "sweetalert";
import { Authcontext } from "../../store/context";
import DatePickerdata from "./datepicker";
import TimePickerdata from "./timepicker";
import { CheckoutDate } from "../../api/actions";
import { Api } from "../../api";
import axios from "axios";

function CheckOutData() {
  let navigate = useNavigate();
  const { id } = useParams();
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");


  const CheckoutDate = (startDate, startTime) => {
    const options = {
      method: "post",
      url: `${Api}order/date`,
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      data: JSON.stringify({
        "date": startDate,
        "time": startTime
      })
    };
    axios(options).then(function (response) {
      console.log("handle success");
      navigate(`/payment/${id}`);
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
    if (startDate === new Date() || startTime === "") {
      {
        language === "En" ?
        swal("Please Select A Shipping Date !", "", "warning") :
        swal("يرجي تحديد موعد الشحن", "", "warning")
      }
    } else {
      CheckoutDate(startDate, startTime)
    }
  };

  return (
    <section className='checkout'>
      <div className="container">
        <Links Stylebultes={"vectorotwo"} />
        <div className='checkout__data'>

          <div className="checkout__header">
            <h5>
              {language === "En" ? "Determine The Date Of Receipt" : "تحديد موعد الاستلام"}
            </h5>
          </div>

          <div className="checkout__form">
            <div className="item">
              <label>
                {language === "En" ? "The Date Of Application" : "تاريخ الطلب"}

              </label>
              <div className="data">
                <DatePickerdata startDate={startDate} setStartDate={setStartDate} />
              </div>
            </div>



            <div className="item">
              <label>
                {language === "En" ? "Determine The Time" : "تحديد الوقت"}
              </label>
              <div className="time">
                <TimePickerdata setStartTime={setStartTime} />
              </div>
            </div>



            <div className="buttons">
              <button type="button" className='btn-done' onClick={handleDone}>
                {language === "En" ? "Continuation" : "استمرار"}

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckOutData;