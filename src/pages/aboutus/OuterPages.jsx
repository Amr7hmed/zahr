import React, { useEffect, useState } from "react";
import AboutusImage from "../../images/bg/mainframe.png";
import AboutusBackground from "../../images/bg/blackgroud.png";
import { useParams } from 'react-router-dom';
import Loading from "../../layout/loading/loading";
import { GetDatapage } from "../../api/actions";

function OuterPages() {
  const { id } = useParams();
  const  language  = "Ar";
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState([]);
  
  useEffect(() => {
   GetDatapage(id,setLoading,setPage)
  }, [loading]);

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
