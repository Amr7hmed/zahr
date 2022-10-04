import React from "react";
import { FilterDataAll } from "../../../api/actions";
import removeIcon from "../../../images/icon/delete.png";

function City(props) {
  const { Getcity, setProducts, setPerpage,language ,setCity ,minValue,maxValue ,categories ,city} = props;

  const handleChange = (e) => {
    const value = e.target.id;
    setCity(value)
   FilterDataAll(setPerpage,setProducts,categories,minValue,maxValue,value);
  };

  const clearAllRadios=()=> {
    var radList = document.getElementsByName('city');
    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) radList[i].checked = false;
    }
    const newcity="";
    setCity("")
    FilterDataAll(setPerpage, setProducts,categories,minValue,maxValue,newcity);
  }
  return (
    <div className='fillter__city'>
    <div className="title">
        
        {language === "En" ?  <h4>City/Region</h4> : <h4>المدينه/المنطقه</h4>}

        
        <button className='btn' id="btn-removeall" onClick={()=> clearAllRadios()} type="button">

          <img src={removeIcon} alt="" />
        </button>
    </div>
        <ul>
          {Getcity.map((item,index) => 
          <li key={index}>
            <input type="radio" value={item.city} name="city" onChange={handleChange} id={item.city}/>
            <label htmlFor={item.city}>
            {item.city}
            </label>
          </li>
            )}
        </ul>
    </div>
  )
}

export default City

/*

*/