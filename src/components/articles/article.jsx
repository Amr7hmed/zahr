import React, { useContext, useEffect, useState } from "react";
import AboutusBackground from "../../images/bg/blackgroud.png";
import { useParams } from "react-router-dom";
import { Authcontext } from "../../store/context";
import { GetArticle } from "../../api/actions";

function Article() {
  const { id } = useParams();
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);

   
  useEffect(() => {
   // GetDataProduct(id,setLoading,setProudect,setSimilarproducts);
   GetArticle(id,setLoading,setArticle) ;
  }, [loading,id]);
  return (
    <div className="aboutus">
      <div className="imgbakground">
        <img src={AboutusBackground} alt="About us Background" />
      </div>
      <div className="container">
        <div className="section__header">
          <h3>
            {language === "En" ? article.title_en : article.title_ar } 
            </h3>
        </div>

        <div className="aboutus__detiles">
          <div className="text">
            {language === "En" ? article.description_en : article.description_ar} 
          </div>

          <div className="image">
            <img src={article.cover} alt="About us Image" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.aaronfaber.com/wp-content/uploads/2017/03/product-placeholder-wp.jpg";
                }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article;