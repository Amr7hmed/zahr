/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { FilterSortCategories } from '../../../api/actions';
import SortIcon from "../../../images/icon/apps-sort_icon.png";
import { Authcontext } from '../../../store/context';

function ProudectsSort(props) {
  const{ CategorieId,setProducts  }=props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const Handelsubmit=(data)=>{
    console.log(CategorieId ,data);
    FilterSortCategories(CategorieId,data,setProducts);
  }
  return (
    <div className="dropdown">

      <a className="btn dropdown-toggle" href="#" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

        {language === "En" ?
          "Sort" :
          "ترتيب"
        }
        <img src={SortIcon} alt="Sort Icon" />
      </a>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li className="dropdown-item" onClick={() => Handelsubmit("desc")}>
          {language === "En" ?
            "From lowest to highest price" :
            "من الأقل الى الأعلى سعرا"
          }
        </li>
        <li className="dropdown-item" onClick={() => Handelsubmit("asc")}>
          {language === "En" ?
            "From highest to lowest price"
            :
            "من الأعلى الى الأقل سعرا"}
        </li>
      </ul>
    </div>
  )
}

export default ProudectsSort;