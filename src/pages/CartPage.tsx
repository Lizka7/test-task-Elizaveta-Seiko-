import { useMemo, useCallback } from 'react';
import type { CartItem } from '../types/cart';
import { useAppDispatch } from '../hooks/state/useAppDispatch';
import { useAppSelector } from '../hooks/state/useAppSelector';
import { updateQuantity, removeFromCart } from '../features/cartSlice';
import Header from '../components/Header/Header';
import BackButton from '../components/UI/Button/BackButton';
import CartItemRow from '../components/Cart/CartItemRow';
import CartTotal from '../components/Cart/CartTotal';
import { CART_CLASSES } from '../constants/cart';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems: CartItem[] = useAppSelector(state => state.cart.items);

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const handleUpdateQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const handleRemove = useCallback(
    (id: number) => dispatch(removeFromCart(id)),
    [dispatch]
  );

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <main className={CART_CLASSES.pageBg}>
          <div className={CART_CLASSES.emptyCartWrapper}>
            <h2 className={CART_CLASSES.emptyTitle}>Your cart is empty</h2>
            <p className={CART_CLASSES.emptyText}>Add some products from the catalog</p>
            <BackButton />
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className={CART_CLASSES.pageBg}>
        <div className={CART_CLASSES.container}>
          <div className="flex items-center justify-between mb-8">
            <h1 className={CART_CLASSES.sectionTitle}>Shopping Cart</h1>
            <BackButton />
          </div>

          <div className={CART_CLASSES.grid}>
            <div className={CART_CLASSES.itemsWrapper}>
              {cartItems.map(item => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <div className={CART_CLASSES.totalWrapper}>
              <CartTotal total={totalPrice} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;