import React from "react";

function City() {

  const handleChange = (e) => {
    const value = e.target.id;
  };
  
  return (
    <div className='fillter__city'>
    <div className="title">

         <h4>المدينه/المنطقه</h4>
    </div>
        <ul>
          <li >
            <input type="radio" value="الرياض" name="filter" onChange={handleChange} id="الرياض"/>
            <label htmlFor="الرياض">
           الرياض
            </label>
          </li>

          <li >
            <input type="radio" value="جده" name="filter" onChange={handleChange} id="جده"/>
            <label htmlFor="جده">
           جده
            </label>
          </li>

          
          <li >
            <input type="radio" value="ابها" name="filter" onChange={handleChange} id="ابها"/>
            <label htmlFor="ابها">
           ابها
            </label>
          </li>
        </ul>
    </div>
  )
}

export default City

/*

        {language === "En" ?  <h4>City/Region</h4> : <h4>المدينه/المنطقه</h4>}
*/