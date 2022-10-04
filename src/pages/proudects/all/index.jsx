/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import ReactPaginate from "react-paginate";
import { GetProductsAll } from "../../../api/actions";
import Fillter from "../../../components/fillter/all/index.jsx";
import AllProudect from "../../../components/proudects/all/allproudect";
import Proudectsnav from "../../../components/proudects/all/proudectsnav.jsx";
import Loading from "../../../layout/loading/loading";
import { Authcontext } from "../../../store/context";
import ButtonFillter from "../../../components/proudects/buttonfillter.jsx";

function Proudects() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const [pageCount, setpageCount] = useState(1);
  const [perpage, setPerpage] = useState(0);
  const [togglefilter, setTogglefilter] = useState("hidefillter");

  useEffect(() => {
    GetProductsAll(setLoading, setProducts, setPerpage);

  }, [loading]);

  const handlePageClick = (data) => {
    let number = 1 + data.selected;
    setpageCount(number)
  };

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
            <Proudectsnav setProducts={setProducts} />
            <ButtonFillter ToggleFilterclass={ToggleFilterclass} />
            <div className="proudects__all__row row">
              <div className={"col-md-12 col-lg-3 fillter_control " + togglefilter}>
                <Fillter setProducts={setProducts} setLoading={setLoading}
                  setPerpage={setPerpage} ToggleFilterclass={ToggleFilterclass} setTogglefilter={setTogglefilter} />
              </div>
              <div className="col-md-12 col-lg-9">
                
                <AllProudect Products={products} />
                 
              </div>
              <div className="col-12">
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
            </div>

            
          </div>
        </section>

      )}

    </>
  );
}

export default Proudects;
