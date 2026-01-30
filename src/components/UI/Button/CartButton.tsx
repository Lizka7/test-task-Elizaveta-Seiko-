import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppSelector } from '../../../hooks/state/useAppSelector';
import { BUTTON_CART, BADGE } from '../../../constants/components';

const CartButton = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" title="Go to Cart" className={BUTTON_CART}>
      <FaShoppingCart className="w-4 h-4" />
      {cartCount > 0 && (
        <span className={`${BADGE} animate-pulse`}>
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartButton;