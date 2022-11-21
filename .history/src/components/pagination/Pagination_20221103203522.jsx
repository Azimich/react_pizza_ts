import React from 'react';

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