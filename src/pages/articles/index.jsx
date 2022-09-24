import React from 'react'
import ReactPaginate from 'react-paginate';
import CardArticles from '../../components/articles/cardarticles';
import Links from '../../components/articles/links';
import AboutusBackground from "../../images/bg/blackgroud.png";
import ImageItem from '../../images/home/offer.jpg';

function Articles() {
  return (
    <section className="articles">
      <div className="container">
        <Links/>
        <div className="articles__row">
              <div className="imgbakground"><img src={AboutusBackground}/></div>
              <div className="row">
                <div className="col-6 col-md-4">
                    <CardArticles Image={ImageItem} TextArticles={"عنوان المقال عنوان المقال"}/>
                </div>
                <div className="col-6 col-md-4">
                    <CardArticles Image={ImageItem} TextArticles={"عنوان المقال عنوان المقال"}/>
                    </div>
                <div className="col-6 col-md-4">
                    <CardArticles Image={ImageItem} TextArticles={"عنوان المقال عنوان المقال"}/>
                    </div>
                <div className="col-6 col-md-4">
                    <CardArticles Image={ImageItem} TextArticles={"عنوان المقال عنوان المقال"}/>
                    </div>
                <div className="col-6 col-md-4">
                    <CardArticles Image={ImageItem} TextArticles={"عنوان المقال عنوان المقال"}/>
                    </div>
                <div className="col-6 col-md-4">
                    <CardArticles Image={ImageItem} TextArticles={"عنوان المقال عنوان المقال"}/>
                </div>
              </div>
        </div>
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={24}
              pageSize={1}
              marginPagesDisplayed={1}
              pageRangeDisplayed={1}
              onPageChange={"handlePageClick"}
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