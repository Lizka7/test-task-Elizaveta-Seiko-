import { useMemo } from 'react';
import type { ProductCardProps } from '../../types/product';
import { normalizeText, truncateText } from '../../utils/textHelpers';
import { BUTTON_STYLES, STOCK_INDICATOR, CARD_CONTAINER, CARD_IMAGE_CONTAINER } from '../../constants/product';

const ProductCard = ({ product, onAddToCart, isInCart = false }: ProductCardProps) => {
  const inStock = useMemo(() => (product.rating?.count ?? 0) > 0, [product.rating?.count]);

  const normalizedTitle = useMemo(() => normalizeText(product.title), [product.title]);
  const truncatedDescription = useMemo(
    () => truncateText(product.description, 80),
    [product.description]
  );

  const stockStyle = inStock ? STOCK_INDICATOR.inStock : STOCK_INDICATOR.outOfStock;

  return (
    <div className={CARD_CONTAINER}>
      <div className={CARD_IMAGE_CONTAINER}>
        <img src={product.image} alt={product.title} className="max-h-full object-contain" />
      </div>

      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 transition-colors">
        {normalizedTitle}
      </h3>

      <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 transition-colors">
        ${product.price.toFixed(2)}
      </p>

      <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors">
        {truncatedDescription}
      </p>

      <div className={`inline-flex items-center gap-2 text-sm font-medium px-3 py-1 rounded-full w-fit transition-colors ${stockStyle.bg} ${stockStyle.text}`}>
        <span className={`w-2 h-2 rounded-full transition-colors ${stockStyle.dot}`} />
        {stockStyle.label}
      </div>

      <button
        onClick={() => onAddToCart(product)}
        disabled={!inStock || isInCart}
        aria-label={isInCart ? `${product.title} is in cart` : `Add ${product.title} to cart`}
        className={`${BUTTON_STYLES.default} ${
          isInCart ? BUTTON_STYLES.inCart : inStock ? BUTTON_STYLES.available : BUTTON_STYLES.outOfStock
        } mt-auto`}
      >
        {isInCart ? 'In cart' : 'Add to cart'}
      </button>
    </div>
  );
};

export default ProductCard;