import { TimePicker } from 'antd';
import React from 'react';

function TimePickerdata(props) {
    const {startTime, setStartTime}=props;
    const onChange = (time, timeString) => {
        console.log(time);
        console.log(timeString);
        setStartTime(timeString)
      };
  return (
    <>
        <TimePicker use12Hours onChange={onChange} />
    </>
  )
}

export default TimePickerdata;
/*

                            <span className="button_zone">
                                <button type="button" className="btn-zone">AM</button>
                                <button type="button" className="btn-zone notactive">PM</button>
                            </span>
                            <input type="number" min={"00"} max={"59"} placeholder={state.minutes} name="minutes" onChange={handleChange} />
                            <span className="bulltes">:</span>
                            <input type="number" min={"1"} max={"12"} placeholder={state.hour} name="hour" onChange={handleChange} />
*/