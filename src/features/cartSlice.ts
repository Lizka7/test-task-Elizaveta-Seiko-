import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CartState, CartItem } from '../types/cart';
import type { Product } from '../types/product';

const createCartItem = (product: Product): CartItem => ({
  id: product.id,
  title: product.title,
  price: product.price,
  image: product.image,
  quantity: 1,
});

const loadCartFromLocalStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem('cart');
    if (stored) return JSON.parse(stored);
    return [];
  } catch {
    return [];
  }
};

const saveCartToLocalStorage = (items: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

const initialState: CartState = {
  items: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push(createCartItem(product));
      }

      saveCartToLocalStorage(state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(i => i.id !== id);
      } else {
        item.quantity = quantity;
      }

      saveCartToLocalStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;