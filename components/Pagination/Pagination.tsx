import React from "react";

import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import {
  DOTS,
  IPagination,
  usePagination,
} from "../../libs/hooks/usePagination";
import styles from "./Pagination.module.css";

interface IPaginationProps extends IPagination {
  onPageChange: (page: number | string) => void;
}

export const Pagination = (props: IPaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  const disableNext = currentPage === lastPage;
  const disablePrevious = currentPage === 1;

  return (
    <ul className={styles.wrapper}>
      <li
        className={`${styles.arrow} ${disablePrevious ? styles.disable : ""}`}
        onClick={() => !disablePrevious && onPrevious()}
      >
        <ArrowLeftIcon /> Previous
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li key={i} className={`${styles.item} ${styles.dots}`}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={i}
            className={`${styles.item} ${
              currentPage === pageNumber ? styles.activePage : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles.arrow} ${disableNext ? styles.disable : ""}`}
        onClick={() => !disableNext && onNext()}
      >
        Next <ArrowRightIcon />
      </li>
    </ul>
  );
};
