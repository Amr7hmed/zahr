import React from "react";
import { useContext } from "react";
import { FilterDataCity } from "../../../api/actions";
import { Authcontext } from "../../../store/context";

function City(props) {
  const { Id, setProducts, cities } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const handleChange = (e) => {
    const value = e.target.id;
    FilterDataCity(Id, setProducts, value)
  };

  return (
    <div className='fillter__city'>
      <div className="title">

          {language === "En" ? <h4>City/Region</h4> : <h4>المدينه/المنطقه</h4>}

      </div>
      <ul>
        {cities.map(item =>
          <li key={item.city}>
            <input type="radio" value={item.city} name="filter" onChange={handleChange} id={item.city} />
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