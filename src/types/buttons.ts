export interface BackButtonProps {
    label?: string;
}

export interface ClearButtonProps {
    onClick: () => void;
    ariaLabel?: string;
    className?: string;
}

export interface SortSelectProps {
  value: 'price' | 'title';
  onChange: (value: 'price' | 'title') => void;
  className?: string;
}