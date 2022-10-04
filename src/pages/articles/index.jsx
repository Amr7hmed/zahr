import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { GetArticlesAll } from '../../api/actions';
import CardArticles from '../../components/articles/cardarticles';
import Links from '../../components/articles/links';
import AboutusBackground from "../../images/bg/blackgroud.png";
import ImageItem from '../../images/home/offer.jpg';
import { Authcontext } from '../../store/context';

function Articles() {
  const [loading, setLoading] = useState(false);
  const [getarticles, setGetarticles] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [perpage, setPerpage] = useState(0);
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

  useEffect(() => {
    GetArticlesAll(setLoading, setGetarticles, setPerpage);
  }, [loading]);

  const handlePageClick = (data) => {
    let number = 1 + data.selected;
    setpageCount(number)
  };
  
  return (
    <section className="articles">
      <div className="container">
        <Links/>
        <div className="articles__row">
              <div className="imgbakground"><img src={AboutusBackground}/></div>
              <div className="row">
                {getarticles.map(item =>
                <div className="col-6 col-md-4" key={item.id}>
                    <CardArticles Image={item.cover} 
                    TextArticles={language === "En" ? item.title_en: item.title_ar} Id={item.id}/>
                </div>
                  )}
              </div>
        </div>
        <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={perpage}
              pageSize={1}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={"pagination justify-content-center"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            />
        </div>
    </section>
  )
}

export default Articles;