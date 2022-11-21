import React from 'react';
import ReactPaginate from 'react-paginate';
import Style from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div c>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={event => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination;