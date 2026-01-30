import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import type { BackButtonProps } from '../../../types/buttons';
import { BUTTON_BASIC, BUTTON_BACK } from '../../../constants/components';

const BackButton = ({ label = 'Back' }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={`${BUTTON_BASIC} ${BUTTON_BACK}`}
    >
      <FiArrowLeft className="w-4 h-4" />
      {label}
    </button>
  );
};

export default BackButton;