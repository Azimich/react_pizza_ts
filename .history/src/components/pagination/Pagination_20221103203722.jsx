import React from 'react';
import ReactPaginate from 'react-paginate';
import Styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={Styles.pagination__container}>
      <ReactPaginate
      className={Styles.pagination__container}
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