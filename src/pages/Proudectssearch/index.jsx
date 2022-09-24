/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import Loading from "../../layout/loading/loading.jsx";
import { useParams } from "react-router-dom";
import { FilterSearchData } from "../../api/actions.js";
import AllItems from "../../components/proudectssearch/AllItems.jsx";
import Navresults from "../../components/proudectssearch/navresults.jsx";
import Imagrempity from "../../images/empty/magnifying-glass-solid.svg";
import EmptySearch from "../../components/empty/emptysearch.jsx";
import { Authcontext } from "../../store/context.js";

function Proudectssearch() {
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  const { search } = useParams();
  const [data, setData] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [perpage, setPerpage] = useState(0);
  const [loading, setLoading] = useState(false);
  console.log(search);
  const [results, setResults] = useState(0);


  useEffect(() => {
    FilterSearchData(setLoading, search, setData, setPerpage, setResults);
  }, [loading,search]);




  return (
    <>

      {loading === false ? (
        <Loading />
      ) : 
      data.length === 0 ? <>
        <EmptySearch language={language}
          Title={search}
            Image={Imagrempity} Description=
          {language === "En" ? "Use Different Search Words" : "استخدم كلمات بحث مختلفة"}

        />
      </>:
      (

        <main >
          <section className="proudects__all">
            <div className="container">
              <Navresults language={language} search={search} results={results} />
              <div className="proudects__all__row row">
                <div className="col-12">
                  <AllItems products={data} setpageCount={setpageCount}
                    pageCount={pageCount} perpage={perpage} language={language} />

                </div>
              </div>
            </div>
          </section>
        </main>
      )}

    </>
  )
}

export default Proudectssearch;