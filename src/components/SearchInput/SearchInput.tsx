import { useState } from 'react';
import type { SearchProps } from '../../types/search';
import ClearButton from '../UI/Button/ClearButton';
import { INPUT_BASE, TOOLTIP_STYLES } from '../../constants/components';

const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search products...',
  onEnter,
}: SearchProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleInputChange = (inputValue: string) => {
    const hasRussian = /[а-яА-ЯёЁ]/.test(inputValue);

    if (hasRussian) {
      setShowTooltip(true);
      return;
    }

    setShowTooltip(false);
    onChange(inputValue);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnter) onEnter();
  };

  const handleClear = () => {
    onChange('');
    setShowTooltip(false);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyUp={handleKeyUp}
          className={INPUT_BASE}
        />

        {value && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <ClearButton onClick={handleClear} aria-label="Clear search" />
          </div>
        )}
      </div>

      {showTooltip && (
        <div className={TOOLTIP_STYLES}>
          Russian symbols are not allowed
        </div>
      )}
    </div>
  );
};

export default SearchInput;