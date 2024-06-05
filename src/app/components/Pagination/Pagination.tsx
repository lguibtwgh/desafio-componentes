'use client'

import styles from './Pagination.module.scss';

interface PaginationProps {
  totalPages: number;
  activePage: number;
  paginate: (number: number) => void;
  goToPrevPage: (number: number) => void;
  goToNextPage: (number: number) => void;
  goToLastPage: () => void;
  goToFirstPage: () => void;
}

export function Pagination({ totalPages, paginate, activePage, goToPrevPage, goToNextPage, goToFirstPage, goToLastPage }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i);
  }

  const isPageActive = (number: number) => activePage === number;
  const shouldRenderNextButtons = activePage < totalPages;
  const shouldRenderPrevButtons = activePage !== 1;

  return (
    <nav data-testid="pagination" className={styles.paginationContainer}>
      {shouldRenderPrevButtons && (
        <>
          <button data-testid="go-to-first-page" className={styles.paginationButton} onClick={goToFirstPage}>{'<<'}</button>
          <button data-testid="go-to-prev-page" className={styles.paginationButton} onClick={() => goToPrevPage(activePage)}>{'<'}</button>
        </>
      )}

      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number}>
            <button data-testid="page-number" onClick={() => paginate(number)}
              className={`${styles.paginationButton} ${isPageActive(number) ? styles.paginationButtonActive : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>

      {
        shouldRenderNextButtons && (
          <>
            <button data-testid="go-to-next-page" className={styles.paginationButton} onClick={() => goToNextPage(activePage)}>{'>'}</button>
            <button data-testid="go-to-last-page" className={styles.paginationButton} onClick={goToLastPage}>{'>>'}</button>
          </>
        )
      }
    </nav >
  )
}