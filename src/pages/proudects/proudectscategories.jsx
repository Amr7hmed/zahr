import React from 'react'
import { NavLink } from 'react-router-dom';
import Fillter from '../../components/fillter/index.jsx';
import AllProudect from '../../components/proudects/allproudect.jsx';
import Proudectsnav from '../../components/proudects/proudectsnav';

function ProductsCategories() {
  return (
    <section className="proudects__categories">
      <div className="container">
        <Proudectsnav />

        <div className="proudects__categories__row row">
          <div className="col-md-12 col-lg-3 fillter_control">
            <Fillter />
          </div>

          <div className="col-md-12 col-lg-9">
            <div className='header'>
              <h5>نتائج البحث<span> ( ٢٣ نتيجه ) </span></h5>
            </div>

            <AllProudect/>
          </div>


          <div className="col-12">
            
      <NavLink to="/proudects"  className="btn btn-showall">عرض الكل</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsCategories;

/*
import Fillter from '../../components/fillter/index.jsx';
import AllProudect from '../../components/proudects/allproudect';
import Proudectsnav from '../../components/proudects/proudectsnav';
import Loading from "../../layout/loading/loading.jsx";
import { Api } from "../../api/index.js";
import axios from "axios";

function Proudects() {





  return (
    <>

      {loading === false ? (
        <Loading />
      ) : (
        <main >
          <section className="proudects">
            <div className="container">
              <Proudectsnav  language={language}
                    setProducts={setProducts}/>

              <div className="proudects_row row">
                <div className="col-md-12 col-lg-3 fillter_control">
                  <Fillter
                    Datafilter={datafilter}
                    setProducts={setProducts}
                    setPerpage={setPerpage}
                    pageCount={pageCount}
                    setLoading={setLoading}
                    language={language}
                  />
                  <button className="btn btn-filter">Filter</button>
                </div>
                <div className="col-md-12 col-lg-9">
                  <AllProudect products={products} setpageCount={setpageCount}
                    pageCount={pageCount} perpage={perpage}  language={language} />
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

    </>
  )
}

export default Proudects;
*/