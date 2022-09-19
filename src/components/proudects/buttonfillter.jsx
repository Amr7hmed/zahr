import React from 'react';
import FillterIcon from "../../images/icon/filter-list.svg";

function ButtonFillter(props) {
    const {ToggleFilterclass}=props;
  return (
    <div className='btnscontener-filter'>
        
        <button className="btn btn-filter" onClick={ToggleFilterclass}>
                    <img src={FillterIcon} alt="Fillter Icon" />
                  </button>

    </div>
  )
}

export default ButtonFillter;