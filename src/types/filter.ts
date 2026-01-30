export interface FilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    className?: string;
}