import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useGetProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery } from '../api/productsApi';
import { useAppDispatch } from '../hooks/state/useAppDispatch';
import { useAppSelector } from '../hooks/state/useAppSelector';
import useDebounce from '../hooks/utils/useDebounce';
import usePagination from '../hooks/ui/usePagination';
import useFilteredProducts from '../hooks/data/useFilteredProducts';
import type { Product } from '../types/product';
import type { CartItem } from '../types/cart';
import { addToCart } from '../features/cartSlice';
import Filter from '../components/Filter/Filter';
import SortSelect from '../components/UI/Select/SortSelect';
import ScrollToTopButton from '../components/UI/Button/ScrollToTopButton';
import Pagination from '../components/Pagination/Pagination';
import ProductCard from '../components/Cards/ProductCard';
import SkeletonCard from '../components/Cards/SkeletonCard';
import Header from '../components/Header/Header';
import { CATALOG_CLASSES } from '../constants/catalog';

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const cartItems: CartItem[] = useAppSelector(state => state.cart.items);

  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<'price' | 'title'>('price');
  const itemsPerPage = 12;

  const searchQuery = useAppSelector(state => state.search.query ?? '');
  const debouncedSearch = useDebounce(searchQuery, 300);

  const { data: categories = [] as string[] } = useGetCategoriesQuery();
  const { data: productsData = [] as Product[], isLoading, error } = category
    ? useGetProductsByCategoryQuery(category)
    : useGetProductsQuery();

  const filteredProducts = useFilteredProducts({
    products: productsData,
    search: debouncedSearch,
    sort,
  });

  const { currentItems, currentPage, totalPages, setCurrentPage } =
    usePagination<Product>({ data: filteredProducts, itemsPerPage });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart(product));
      toast.success(`${product.title} added to cart!`, { position: 'top-right', autoClose: 2000 });
    },
    [dispatch]
  );

  return (
    <div className={CATALOG_CLASSES.page}>
      <Header />

      <div className={CATALOG_CLASSES.container + ' py-6'}>
        <div className={CATALOG_CLASSES.filterWrapper}>
          <Filter
            categories={categories}
            selectedCategory={category}
            onSelectCategory={setCategory}
            className="w-48"
          />
          <SortSelect value={sort} onChange={setSort} className="w-36 whitespace-nowrap" />
        </div>
      </div>

      <div className={CATALOG_CLASSES.container + ' py-8'}>
        {isLoading ? (
          <div className={CATALOG_CLASSES.grid}>
            {Array(itemsPerPage).fill(0).map((_, idx) => <SkeletonCard key={idx} />)}
          </div>
        ) : error ? (
          <p className={CATALOG_CLASSES.errorText}>Error loading products</p>
        ) : filteredProducts.length === 0 ? (
          <p className={CATALOG_CLASSES.emptyText}>No products found</p>
        ) : (
          <div className={CATALOG_CLASSES.grid}>
            {currentItems.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={cartItems.some(item => item.id === product.id)}
              />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className={CATALOG_CLASSES.paginationWrapper}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              className="dark:bg-gray-900 dark:text-gray-100 transition-colors"
            />
          </div>
        )}
      </div>

      <ScrollToTopButton />
    </div>
  );
};

export default CatalogPage;