import { useMemo } from 'react';
import type { Product, UseFilteredProductsProps } from '../../types/product';

const useFilteredProducts = ({
  products,
  search,
  sort,
}: UseFilteredProductsProps): Product[] => {
  return useMemo(() => {
    if (!products.length) return [];

    let result = [...products];

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q)
      );
    }

    const sorted = [...result].sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      return a.title.localeCompare(b.title);
    });

    return sorted;
  }, [products, search, sort]);
};

export default useFilteredProducts;