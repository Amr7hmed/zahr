/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';

import ReactPaginate from "react-paginate";
import { Authcontext } from '../../store/context.js';
import CardProudects from '../cards/cardproudects.jsx';
function AllItems(props) {
  const { products , setpageCount ,perpage } = props;
  const authcontext = useContext(Authcontext);
  const language = authcontext.language;

   const handlePageClick = (data) => {
     let number = 1 + data.selected;
    setpageCount(number)
  };

  return (
    <section className='allproudect'>


      <div className="row">
        {products.map(item =>
          <div className="col-6 col-lg-4" key={item.id}>
            <CardProudects proudect={item} Image={item.image}
            Style={"home_card"}
            Title={item.title} Price={item.price} Id={item.id} />
          </div>
        )}

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
    </section>
  )
}

export default AllItems;
