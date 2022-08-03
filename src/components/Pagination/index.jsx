import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

const Pagination = ({ onChangePage, currentPage }) => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={currentPage}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
