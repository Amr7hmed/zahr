import React from "react";
import { useContext } from "react";
import { FilterDataCategoryPage, FilterDataCity } from "../../../api/actions";
import { Authcontext } from "../../../store/context";
import removeIcon from "../../../images/icon/delete.png";

function City(props) {
  const {cities, Id, setProducts,setCity ,minValue,maxValue } = props;

  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const handleChange = (e) => {
    const value = e.target.id;
    setCity(value)
    FilterDataCategoryPage(Id,setProducts,minValue,maxValue,value)
  };

  const clearAllRadios=()=> {
    var radList = document.getElementsByName('city');
    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) radList[i].checked = false;
    }
    const newcity="";
    setCity("")
   FilterDataCategoryPage(Id,setProducts,minValue,maxValue,newcity)
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
        {cities.map(item =>
          <li key={item.city}>
            <input type="radio" value={item.city} onChange={handleChange}
             name="city"
            id={item.city} />
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