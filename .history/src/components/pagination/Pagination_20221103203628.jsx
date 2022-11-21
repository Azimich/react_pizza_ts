import React from 'react';
import ReactPaginate from 'react-paginate';
import Style from ""

const Pagination = () => {
  return (
    <div>
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