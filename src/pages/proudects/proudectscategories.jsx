import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Fillter from '../../components/fillter/index.jsx';
import AllProudect from '../../components/proudects/allproudect.jsx';
import Proudectsnav from '../../components/proudects/proudectsnav';
import { useParams } from 'react-router-dom';
import { GetProductsCategories } from "../../api/actions.js";
import Loading from "../../layout/loading/loading.jsx";

function ProductsCategories() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState("");
  const [products, setProducts] = useState("");
  const { id } = useParams();

  useEffect(() => {
    GetProductsCategories(id, setLoading, setResults, setProducts);
  }, [loading]);

  return (
    <>
        {loading === false ? (
          <Loading />
        ) : (
          
        <section className="proudects__categories">
          <div className="container">
            <Proudectsnav />
            <div className="proudects__categories__row row">
              <div className="col-md-12 col-lg-3 fillter_control">
                <Fillter />
              </div>
    
              <div className="col-md-12 col-lg-9">
                <div className='header'>
                  <h5>نتائج البحث<span> ( {results} نتيجه ) </span></h5>
                </div>
                <AllProudect Products={products}/>
              </div>
              <div className="col-12">
                <NavLink to="/proudects" className="btn btn-showall">عرض الكل</NavLink>
              </div>
            </div>
          </div>
        </section>
        )}
      </>
  )
}

export default ProductsCategories;

/*
<>
    {loading === false ? (
      <Loading />
    ) : (
      
    <section className="proudects__categories">
      <div className="container">
        <Proudectsnav />
        <div className="proudects__categories__row row">
          <div className="col-md-12 col-lg-3 fillter_control">
            <Fillter />
          </div>

          <div className="col-md-12 col-lg-9">
            <div className='header'>
              <h5>نتائج البحث<span> ( {results} نتيجه ) </span></h5>
            </div>
            <AllProudect />
          </div>
          <div className="col-12">
            <NavLink to="/proudects" className="btn btn-showall">عرض الكل</NavLink>
          </div>
        </div>
      </div>
    </section>
    )}
  </>
*/