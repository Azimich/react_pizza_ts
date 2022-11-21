import React from 'react';
import ReactPaginate from 'react-paginate';
import Styles from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };
  return (
    <div className={Styles.pagination__container}>
      <ReactPaginate
        className={Styles.paginations}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={5}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}

export default Pagination;