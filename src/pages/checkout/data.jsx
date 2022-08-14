import React, { useState } from "react";
import Links from '../../components/checkout/links';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';

function CheckOutData() {
    let navigate = useNavigate();

    const [state, setState] = useState({
        date: new Date(),
        hour: "7",
        minutes: "00",
    });


    const handleChangeData = (e) => {
        const value = e;
        setState({
            ...state,
            date: value,
        });
    };



    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const handleDone = (e) => {
        e.preventDefault();
        //navigate("/checkoutdata");
        console.log(state);
    };


    return (
        <section className='checkout'>
            <div className="container">
                <Links Stylebulteone={"vector"} Stylebultetwo={"active"} />
                <div className="checkout__header">
                    <h5> تحديد موعد الاستلام</h5>
                </div>

                <div className="checkout__form">
                    <div className="item">
                        <label>تاريخ الطلب</label>
                        <div className="data">
                            <DatePicker onChange={handleChangeData}
                                className="data-input" minDate={new Date()} placeholder={state.date} />
                        </div>
                    </div>



                    <div className="item">
                        <label>تحديد الوقت</label>
                        <div className="time">
                            <span className="button_zone">
                                <button type="button" className="btn-zone">AM</button>
                                <button type="button" className="btn-zone">PM</button>
                            </span>
                            <input type="number" min={"00"} max={"59"} placeholder={state.minutes} name="minutes" onChange={handleChange} />
                            <span>:</span>
                            <input type="number" min={"1"} max={"12"} placeholder={state.hour} name="hour" onChange={handleChange} />
                        </div>
                    </div>



                    <div className="buttons">
                        <button type="button" className='btn-done' onClick={handleDone}>استمرار</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckOutData;