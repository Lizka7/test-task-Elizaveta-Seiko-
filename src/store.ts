import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './api/productsApi';
import cartReducer from './features/cartSlice';
import searchReducer from './features/searchSlice'; 

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;