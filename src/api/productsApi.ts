import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../types/product';

const PRODUCT_URL = import.meta.env.VITE_PRODUCT_API_URL;
console.log ('url:', PRODUCT_URL);

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${PRODUCT_URL}`}),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    getCategories: builder.query<string[], void>({
      query: () => 'products/categories',
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const { 
  useGetProductsQuery, 
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery 
} = productsApi;
