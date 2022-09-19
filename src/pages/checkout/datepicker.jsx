import React from 'react';
import DatePicker from "react-datepicker";

function DatePickerdata(props) {
const {startDate,setStartDate}=props;

  return (<>
    <DatePicker 
        className="data-input" 
        selected={startDate}
        minDate={new Date()} 
        onChange={(date) => setStartDate(date)}
        placeholder={"date"}/>
        </>
  )
}

export default DatePickerdata;