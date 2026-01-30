import { useState, useRef, useEffect } from 'react';
import { FiFilter } from 'react-icons/fi';
import type { SortSelectProps } from '../../../types/buttons';
import { DROPDOWN_CONTAINER, DROPDOWN_BUTTON, DROPDOWN_LIST, DROPDOWN_ITEM, DROPDOWN_ITEM_SELECTED } from '../../../constants/filter';

const SortSelect = ({ value, onChange, className = '' }: SortSelectProps) => {
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

  const options: { value: 'price' | 'title'; label: string }[] = [
    { value: 'price', label: 'Sort by Price' },
    { value: 'title', label: 'Sort by Name' },
  ];

  const handleSelect = (val: 'price' | 'title') => {
    onChange(val);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={`${DROPDOWN_CONTAINER} ${className}`}>
      <button type="button" onClick={() => setOpen(!open)} className={DROPDOWN_BUTTON}>
        <span className="flex items-center gap-2">
          <FiFilter className="text-gray-700 dark:text-gray-200" />
          {options.find(opt => opt.value === value)?.label}
        </span>
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
          {options.map(opt => (
            <li
              key={opt.value}
              className={`${DROPDOWN_ITEM} ${value === opt.value ? DROPDOWN_ITEM_SELECTED : ''}`}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortSelect;