export const CART_ROW_CONTAINER = `
  flex flex-col sm:flex-row
  gap-4 p-4 sm:p-6
  transition-colors border-b border-gray-200 dark:border-gray-800 last:border-b-0
  bg-white dark:bg-gray-900 rounded-lg
`;

export const CART_BUTTON = `
  w-8 h-8 flex items-center justify-center
  rounded-md bg-gray-200 dark:bg-gray-700
  text-gray-900 dark:text-gray-100
  hover:bg-gray-300 dark:hover:bg-gray-600
  transition
`;

export const REMOVE_BUTTON = `
  text-red-600 dark:text-red-400
  hover:text-red-700 dark:hover:text-red-300
  transition font-semibold
`;

export const PRICE_REMOVE_CONTAINER = `
  flex flex-col sm:items-end items-start
  gap-2 mt-4 sm:mt-0
`;

export const CART_TOTAL_CONTAINER = `
  mt-6 p-4 sm:p-6 bg-gray-100 dark:bg-gray-800
  rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4
  transition-colors shadow-sm
`;

export const CHECKOUT_BUTTON = `
  px-6 py-2 sm:py-3 rounded-lg bg-emerald-600 dark:bg-emerald-500
  text-white font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-400
  transition-colors
`;

export const CART_CLASSES = {
    pageBg: 'min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors',
    container: 'max-w-5xl mx-auto px-4 py-10',
    sectionTitle: 'text-3xl font-bold text-gray-900 dark:text-gray-100',
    grid: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
    itemsWrapper: 'lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm divide-y divide-gray-200 dark:divide-gray-800 transition-colors',
    totalWrapper: 'bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 h-fit transition-colors',
    emptyCartWrapper: 'text-center px-4 py-24',
    emptyTitle: 'text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100',
    emptyText: 'text-gray-600 dark:text-gray-400 mb-6',
};
  