import { FiX } from 'react-icons/fi';
import type { ClearButtonProps } from '../../../types/buttons';
import { BUTTON_BASE, BUTTON_CLEAR } from '../../../constants/components';

const ClearButton = ({
  onClick,
  ariaLabel = 'Clear',
  className = '',
}: ClearButtonProps) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${BUTTON_BASE} ${BUTTON_CLEAR} ${className}`}
    >
      <FiX className="w-3 h-3" />
    </button>
  );
};

export default ClearButton;
