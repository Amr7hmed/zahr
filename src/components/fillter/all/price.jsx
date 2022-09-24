import React, { useContext, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import removeIcon from "../../../images/icon/icon_remove.svg"
import { FilterDataAll } from "../../../api/actions";
import { Authcontext } from "../../../store/context";


function Price(props) {
  const { setProducts, maxValue
    ,minValue ,Datafilter ,set_minValue,set_maxValue, categories
    , city,setPerpage} = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const handleInput = async (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const removevalue = () => {
    set_minValue(0);
    set_maxValue(0);
  }

  const onClick = () => {
    console.log(minValue);
    console.log(maxValue);
    FilterDataAll(setPerpage, setProducts, categories, minValue, maxValue, city);
  }
  return (
    <div className='fillter__price'>
      <div className="title">
        {language === "En" ?  <h4>Price</h4> :  <h4>السعر</h4>}
        <button className='btn' id="btn-removeall" onClick={() => removevalue()}>

          <img src={removeIcon} alt="" />
        </button>
      </div>


      <div>
        <MultiRangeSlider
          min={parseInt(Datafilter.min_price)}
          max={parseInt(Datafilter.max_price) +1000}
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
        <div className="buttons-price">

          <button type="button" className="btn btn_search_price " onClick={onClick}>

            {language === "En" ? "Search" : "بحث"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Price;
