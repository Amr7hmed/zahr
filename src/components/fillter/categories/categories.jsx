import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../../../store/context';

function Categories(props) {
  const { listcategories ,CategoriesId} = props;
  let navigate  = useNavigate();
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
    const Idpage=parseInt(CategoriesId);
    
  const handleChange = async (e) => {
    const id = e.target.id;
    const value =e.target.value;
    console.log(id);
    console.log(value);
    navigate(`/proudectscategories/${id}/${value}`);
  };

return (
  <div className='fillter__categories'>
    <div className="title">
      {language === "En" ? <h4>Categories</h4> : <h4>الفئات</h4>}
    </div>

    <div className="accordion accordion-flush" id="accordionFlushExample">

      {listcategories.map(item =>
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header" id="flush-headingTwo">
            <button 
            className={item.categories.length === 0 ? "accordion-button accordion-button-noafter" :
             `accordion-button collapsed`} 
            type="button"
              data-bs-toggle="collapse" data-bs-target={`#tage${item.id}`} 
              aria-expanded={item.id===Idpage ? "true" :"false"} aria-controls={item.name}>
              <input type="checkbox" value={item.name} name="filter" id={item.id} 
              onChange={handleChange} checked={item.id === Idpage ? true :false}
              className={item.id === Idpage ? "active" :""}
              />
              {language === "En" ? <label htmlFor={item.name_en}>{item.name_en} </label> :
                <label htmlFor={item.name_ar}>
                  {item.name_ar}
                </label>}
            </button>
          </h2>
          {item.categories.map(elment =>
            <div id={`tage${item.id}`} className={item.id === Idpage ? 
              "accordion-collapse collapse show" 
            :"accordion-collapse collapse"}
             aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample" key={elment.id}>
              <div className="accordion-body">
                <ul>
                  <li>
                    <input type="checkbox" value={elment.name} name="filter"
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