import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GetDatapages } from '../../api/actions';
import Facebooklogo from "../../images/icon/fb.png";
import Insta from "../../images/icon/insta.png";
import Twiter from "../../images/icon/twiter.png";
import { Authcontext } from '../../store/context';

function FooterEnd() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    GetDatapages(setLoading,setPages)
  }, [loading]);


  return (
    
    <>
        {loading === false ? (
          ""
        ) : (
          
    <div className="footer-end">
    <ul>
      {pages.map(item =>
        
      <li key={item.id}>
        
        <a href={`/pages/${item.id}`} key={item.id} > {language === "En" ? item.name_en : item.name_ar}</a>
      </li>
        )}
    </ul>
      </div>
        )}
      </>
  )
}

export default FooterEnd;