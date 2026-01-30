import type { CartItemRowProps } from '../../types/cart';
import { CART_ROW_CONTAINER, CART_BUTTON, PRICE_REMOVE_CONTAINER, REMOVE_BUTTON } from '../../constants/cart';

const CartItemRow = ({ item, onUpdateQuantity, onRemove }: CartItemRowProps) => {
  const handleDecrement = () => {
    if (item.quantity > 1) onUpdateQuantity(item.id, item.quantity - 1);
  };

  const handleIncrement = () => onUpdateQuantity(item.id, item.quantity + 1);

  return (
    <div className={CART_ROW_CONTAINER}>
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-md"
      />

      <div className="flex-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">${item.price.toFixed(2)} each</p>

        <div className="flex items-center gap-2 mt-2">
          <button onClick={handleDecrement} className={CART_BUTTON}>-</button>
          <span className="px-2 text-gray-900 dark:text-gray-100 font-medium">{item.quantity}</span>
          <button onClick={handleIncrement} className={CART_BUTTON}>+</button>
        </div>
      </div>

      <div className={PRICE_REMOVE_CONTAINER}>
        <button onClick={() => onRemove(item.id)} className={REMOVE_BUTTON}>Remove</button>
        <p className="text-gray-900 dark:text-gray-100 font-semibold">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItemRow;