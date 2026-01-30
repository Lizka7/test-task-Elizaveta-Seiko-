import type { CartTotalProps } from '../../types/cart';
import { CART_TOTAL_CONTAINER, CHECKOUT_BUTTON } from '../../constants/cart';

const CartTotal = ({ total }: CartTotalProps) => (
  <div className={CART_TOTAL_CONTAINER}>
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
      Total: ${total.toFixed(2)}
    </h2>

    <button className={`${CHECKOUT_BUTTON} w-full sm:w-auto`}>
      Checkout
    </button>
  </div>
);

export default CartTotal;