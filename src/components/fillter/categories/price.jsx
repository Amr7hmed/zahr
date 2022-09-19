import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import removeIcon from "../../../images/icon/icon_remove.svg"
import { FilterDataPrice } from "../../../api/actions";
import { Authcontext } from "../../../store/context";
import { useContext } from "react";


function Price(props) {
  const{Id , setProducts ,maxprice , minprice }=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(10000);

  const handleInput = async (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
    FilterDataPrice(Id ,setProducts ,e.minValue,e.maxValue);
  };

  const removevalue = ()=>{
    set_minValue(0);
    set_maxValue(10000);
    FilterDataPrice(Id ,setProducts ,minValue,maxValue);
  }
  return (
    <div className='fillter__price'>
      <div className="title">
        {language === "En" ? <h4>Price</h4>:<h4>السعر</h4>}
        <button className='btn' id="btn-removeall" onClick={()=> removevalue()}>

          <img src={removeIcon} alt="" />
        </button>
      </div>


      <div>
        <MultiRangeSlider
          min={0}
          max={10000}
          step={5}
          ruler={false}
          label={false}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />

        <div className="textinp">
          <span>{maxValue} sr</span>
          <span>{minValue} sr</span>
        </div>
      </div>
    </div>
  )
}

export default Price;
