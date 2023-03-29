import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';
import Styles from './Pagination.module.scss';

interface IPaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ currentPage, onChangePage }) => (
  <div className={Styles.pagination__container}>
    <ReactPaginate
      className={Styles.paginations}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={3}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  </div>
);

export default Pagination;
