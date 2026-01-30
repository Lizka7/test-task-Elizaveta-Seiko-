import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BUTTON_SCROLL_TOP } from '../../../constants/components';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className={BUTTON_SCROLL_TOP}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-4 h-4 sm:w-3 sm:h-3" />
    </button>
  );
};

export default ScrollToTopButton;