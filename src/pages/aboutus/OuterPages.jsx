import React, { useContext, useEffect, useState } from "react";
import AboutusImage from "../../images/bg/mainframe.png";
import AboutusBackground from "../../images/bg/blackgroud.png";
import { useParams } from 'react-router-dom';
import Loading from "../../layout/loading/loading";
import { GetDatapage } from "../../api/actions";
import { Authcontext } from "../../store/context";

function OuterPages() {
  const { id } = useParams();
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([]);
  
  useEffect(() => {
   GetDatapage(id,setLoading,setPage)
  }, [loading,id]);

  return (<>
    {loading === false ? (
      <Loading />
    ) : (
      <div className="aboutus">
        <div className="imgbakground">
          <img src={AboutusBackground} alt="About us Background" />
        </div>
        <div className="container">
          <div className="section__header">
            <h3>
            {language === "En" ? page.name_en : page.name_ar}
            </h3>
          </div>
  
          <div className="aboutus__detiles">
            <div className="text">
              
            {language === "En" ? page.longText_en: page.longText_ar}
            </div>
  
            <div className="image">
              <img src={AboutusImage} alt="About us Image" />
            </div>
          </div>
        </div>
      </div>

      )}
      </>
  );
}

export default OuterPages;
