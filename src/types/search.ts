export interface SearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    onEnter?: () => void;
}

export interface SearchState {
  query: string;
}