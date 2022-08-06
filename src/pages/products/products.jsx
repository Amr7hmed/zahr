/* eslint-disable no-unused-vars */
import React from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import CardProudects from "../../components/cards/cardproudects";
import Iconleft from "../../images/icon/left-arrow.svg";
import Image from "../../images/product/images.jpeg";

function Products() {
  const handlePageClick = (data) => {
    let number = 1 + data.selected;
  };
  return (
    <section className="products">
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
              <NavLink to="/products">أحدث المنتجات </NavLink>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
              Style="stylecardproudects"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <CardProudects
              Image={Image}
              Title={"زهور طبيعيه"}
              Price={"74.75"}
            />
          </div>
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
  );
}

export default Products;
