import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import type { PaginationProps } from '../../types/pagination';
import PaginationButton from '../UI/Button/PaginationButton';
import { PAGINATION_CONTAINER, PAGINATION_BUTTON_BASE, PAGINATION_BUTTON_ACTIVE, PAGINATION_BUTTON_INACTIVE, PAGINATION_BUTTON_DISABLED } from '../../constants/pagination';

const Pagination = ({ currentPage, totalPages, onPageChange, className = '' }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const maxVisible = 5;
    if (totalPages <= maxVisible) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | '...')[] = [];
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className={`${PAGINATION_CONTAINER} ${className}`}>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${PAGINATION_BUTTON_BASE} ${currentPage === 1 ? PAGINATION_BUTTON_DISABLED : PAGINATION_BUTTON_INACTIVE}`}
      >
        <FaChevronLeft /> Prev
      </PaginationButton>

      {visiblePages.map((page, idx) =>
        page === '...' ? (
          <span key={`dots-${idx}`} className={`${PAGINATION_BUTTON_BASE} cursor-default select-none`}>
            ...
          </span>
        ) : (
          <PaginationButton
            key={page}
            onClick={() => onPageChange(page)}
            disabled={page === currentPage}
            className={`${PAGINATION_BUTTON_BASE} ${
              page === currentPage ? PAGINATION_BUTTON_ACTIVE : PAGINATION_BUTTON_INACTIVE
            }`}
          >
            {page}
          </PaginationButton>
        )
      )}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${PAGINATION_BUTTON_BASE} ${currentPage === totalPages ? PAGINATION_BUTTON_DISABLED : PAGINATION_BUTTON_INACTIVE}`}
      >
        Next <FaChevronRight />
      </PaginationButton>
    </div>
  );
};

export default Pagination;