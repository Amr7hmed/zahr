/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { GetProductsAll } from "../../api/actions";
import CardProudects from "../../components/cards/cardproudects";
import Iconleft from "../../images/icon/left-arrow.svg";
import Image from "../../images/product/images.jpeg";
import Loading from "../../layout/loading/loading";

function Proudects() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState("");

  useEffect(() => {
    GetProductsAll(setLoading, setProducts);
  }, [loading]);

  const handlePageClick = (data) => {
    let number = 1 + data.selected;
  };
  return (
    <>
        {loading === false ? (
          <Loading />
        ) : (
          <section className="proudects__full">
            <div className="container">
              <div className="link">
                <ul>
                  <li className="active">
                    <NavLink to="/">الصفحه الرئيسية</NavLink>
                  </li>
                  <li className="arrow">
                    <img src={Iconleft} alt="" />
                  </li>
                  <li>
                    <NavLink to="/proudects">أحدث المنتجات </NavLink>
                  </li>
                </ul>
              </div>
              <div className="row">
                
              {products.map(item=>
                  <div className="col-lg-4 col-md-6 col-sm-12" key={item.id}>
                    <CardProudects Image={item.image} Title={item.title} Price={item.price} Id={item.id}/>
                  </div>)}
              </div>
      
              <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={4}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
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
                  
        )}
        
      </>
  );
}

export default Proudects;
