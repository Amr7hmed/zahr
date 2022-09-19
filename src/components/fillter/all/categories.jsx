import React, { useContext } from 'react';
import { FilterDataAll } from '../../../api/actions';
import removeIcon from "../../../images/icon/icon_remove.svg";
import { Authcontext } from '../../../store/context';

function Categories(props) {
  const { getCategories, setProducts, setPerpage, maxValue, setCategories, minValue, categories
    , city } = props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;

  const handleChange = async (e) => {
    const value = e.target.id;
    console.log(value);
    setCategories(value)
    FilterDataAll(setPerpage, setProducts, value, minValue, maxValue, city);
  };

  const clearAllRadios=()=> {
    var radList = document.getElementsByName('filter');
    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) radList[i].checked = false;
    }
    const newcategories="";
    setCategories("")
   FilterDataAll(setPerpage, setProducts, newcategories, minValue, maxValue, city);
  }

return (
  <div className='fillter__categories'>
    <div className="title">

      {language === "En" ? <h4>Categories</h4> : <h4>الفئات</h4>}

        
      <button className='btn' id="btn-removeall" onClick={()=> clearAllRadios()} type="button">

        <img src={removeIcon} alt="" />
      </button>
    </div>

    <div className="accordion accordion-flush" id="accordionFlushExample">

      {getCategories.map(item =>
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className={item.branches.length === 0 ? "accordion-button accordion-button-noafter" : `accordion-button collapsed`} type="button"
              data-bs-toggle="collapse" data-bs-target={`#tage${item.id}`} aria-expanded="false" aria-controls={item.name}>
              <input type="radio" value={item.name} name="filter" id={item.id} onChange={handleChange}
              />
              {language === "En" ? <label htmlFor={item.name_en}>{item.name_en} </label> :
                <label htmlFor={item.name_ar}>
                  {item.name_ar}
                </label>}
            </button>
          </h2>
          {item.branches.map(elment =>
            <div id={`tage${item.id}`} className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample" key={elment.id}>
              <div className="accordion-body">
                <ul>
                  <li>
                    <input type="radio" value={elment.name} name="filter" onChange={handleChange}
                      id={elment.id} />

                    {language === "En" ? <label htmlFor={elment.name_en}>{elment.name_en}</label> :
                      <label htmlFor={elment.name_ar}>{elment.name_ar}</label>}
                  </li>
                </ul>
              </div>
            </div>
          )
          }
        </div>)}


    </div>
  </div>
)
}
export default Categories;