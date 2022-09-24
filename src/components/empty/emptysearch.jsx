import React, { useContext } from 'react'
import { Authcontext } from '../../store/context';

function EmptySearch(props) {
    const {Image,Title ,Description }=props;
    const authcontext = useContext(Authcontext);
    const language = authcontext.language;
  
  return (
    <section className='empty-contener emptysearch'>
    {language === "En" ? 
    <p>No results for
       <span>{Title}</span>
      </p>
      :
    <p>لا توجد نتائج لـ
       <span>{Title}</span>
      </p>
    }
        <div className="img">
        <img src={Image} alt="" />
        </div>
        <p>{Description}</p>
    </section>
  )
}

export default EmptySearch;