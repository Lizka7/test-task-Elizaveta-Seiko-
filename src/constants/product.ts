export const BUTTON_STYLES = {
    default: 'py-2 rounded-lg text-sm font-semibold transition-colors',
    inCart: 'bg-gray-400 dark:bg-gray-700 text-white cursor-not-allowed',
    available: 'bg-black dark:bg-emerald-600 text-white hover:bg-gray-800 dark:hover:bg-emerald-500',
    outOfStock: 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 cursor-not-allowed',
};

export const STOCK_INDICATOR = {
    inStock: {
      bg: 'bg-green-100 dark:bg-green-800',
      text: 'text-green-700 dark:text-green-400',
      dot: 'bg-green-600 dark:bg-green-400',
      label: 'In stock',
    },
    outOfStock: {
      bg: 'bg-red-100 dark:bg-red-800',
      text: 'text-red-700 dark:text-red-400',
      dot: 'bg-red-600 dark:bg-red-400',
      label: 'Out of stock',
    },
};

export const CARD_CONTAINER = 'bg-gray-200 dark:bg-gray-800 rounded-xl p-4 flex flex-col gap-3 shadow-sm transition-colors';
export const CARD_IMAGE_CONTAINER = 'bg-white dark:bg-gray-900 rounded-lg p-4 h-48 flex items-center justify-center transition-colors';
  