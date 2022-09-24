import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Fillter from '../../../components/fillter/categories/index.jsx';
import AllProudect from '../../../components/proudects/categories/allproudect.jsx';
import Proudectsnav from '../../../components/proudects/categories/proudectsnav.jsx';
import { useParams } from 'react-router-dom';
import { GetProductsCategories } from "../../../api/actions.js";
import Loading from "../../../layout/loading/loading.jsx";
import ButtonFillter from "../../../components/proudects/buttonfillter.jsx";
import { Authcontext } from "../../../store/context.js";
import { useContext } from "react";

function ProductsCategories() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [products, setProducts] = useState("");
  const [perpage, setPerpage] = useState(0);
  const { id, name } = useParams();
  const [togglefilter, setTogglefilter] = useState("hidefillter");
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  useEffect(() => {
    GetProductsCategories(id, setLoading, setResults, setProducts);
  }, [id, loading]);

  const ToggleFilterclass = () => {
    if (togglefilter === "hidefillter") {
      setTogglefilter("showfillter")
    } else {
      setTogglefilter("hidefillter")
    }
  }
  return (
    <>
      {loading === false ? (
        <Loading />
      ) : (

        <section className="proudects__all">
          <div className="container">
            <Proudectsnav CategorieId={id} setProducts={setProducts} name={name} />
            <ButtonFillter ToggleFilterclass={ToggleFilterclass} />
            <div className="proudects__all__row row">
              <div className={"col-md-12 col-lg-3 fillter_control " + togglefilter}>
                <Fillter Id={id} setProducts={setProducts} setLoading={setLoading}
                  setPerpage={setPerpage} ToggleFilterclass={ToggleFilterclass} setTogglefilter={setTogglefilter} />
              </div>

              <div className="col-md-12 col-lg-9">
                <div className='header'>
                  {language === "En" ?
                    <h5>research results <span> ( result {results}) </span></h5>
                    :
                    <h5>نتائج البحث<span> ( {results} نتيجه ) </span></h5>
                  }
                </div>
                <AllProudect Products={products} />
              </div>
              <div className="col-12">
                <NavLink to="/proudects" className="btn btn-showall">
                  {language === "En" ?"View All":"عرض الكل"}
                  </NavLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default ProductsCategories;