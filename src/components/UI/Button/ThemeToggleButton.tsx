import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BUTTON_THEME_TOGGLE } from '../../../constants/components';

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    () => localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const handleToggle = () => setDarkMode(prev => !prev);

  return (
    <button onClick={handleToggle} className={BUTTON_THEME_TOGGLE} aria-label="Toggle theme">
      {darkMode ? <FaMoon /> : <FaSun />}
      <span>{darkMode ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggleButton;