export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating?: {
        rate: number;
        count: number;
    };
}

export interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
    isInCart?: boolean;
}

export interface SkeletonCardProps {
    imageHeight?: string; 
    titleWidth?: string;  
    priceWidth?: string; 
    className?: string;
}  

export interface UseFilteredProductsProps {
    products: Product[];
    search: string;
    sort: 'price' | 'title';
}