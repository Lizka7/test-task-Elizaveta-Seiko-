import { useState, useRef, useEffect } from 'react';
import type { FilterProps } from '../../types/filter';
import { DROPDOWN_CONTAINER, DROPDOWN_BUTTON, DROPDOWN_LIST, DROPDOWN_ITEM, DROPDOWN_ITEM_SELECTED } from '../../constants/filter';

const Filter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  className = '',
}: FilterProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const normalizeText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

  const handleSelect = (category: string) => {
    onSelectCategory(category);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={`${DROPDOWN_CONTAINER} ${className}`}>
      <button type="button" onClick={() => setOpen(!open)} className={DROPDOWN_BUTTON}>
        <span>{selectedCategory ? normalizeText(selectedCategory) : 'All Categories'}</span>
        <span className="ml-2 flex items-center">
          <svg
            className="w-4 h-4 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {open && (
        <ul className={DROPDOWN_LIST}>
          <li
            className={`${DROPDOWN_ITEM} ${selectedCategory === '' ? DROPDOWN_ITEM_SELECTED : ''}`}
            onClick={() => handleSelect('')}
          >
            All Categories
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              className={`${DROPDOWN_ITEM} ${selectedCategory === cat ? DROPDOWN_ITEM_SELECTED : ''}`}
              onClick={() => handleSelect(cat)}
            >
              {normalizeText(cat)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;