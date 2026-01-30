import type { PaginationButtonProps } from '../../../types/pagination';
import { PAGINATION_BUTTON_BASE, PAGINATION_BUTTON_DISABLED, PAGINATION_BUTTON_INACTIVE } from '../../../constants/pagination';

const PaginationButton = ({
  onClick,
  disabled = false,
  children,
  className = '',
}: PaginationButtonProps) => {
  const buttonClass = `${PAGINATION_BUTTON_BASE} ${
    disabled ? PAGINATION_BUTTON_DISABLED : PAGINATION_BUTTON_INACTIVE
  } ${className}`;

  return (
    <button onClick={onClick} disabled={disabled} className={buttonClass}>
      {children}
    </button>
  );
};

export default PaginationButton;