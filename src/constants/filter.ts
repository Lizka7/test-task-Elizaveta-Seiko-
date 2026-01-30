export const DROPDOWN_CONTAINER = 'relative w-60 text-gray-900 dark:text-gray-100';
export const DROPDOWN_BUTTON = `
  w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
  rounded-lg px-4 py-2 text-left flex justify-between items-center cursor-pointer
  hover:border-black dark:hover:border-white focus:outline-none focus:ring-2
  focus:ring-black dark:focus:ring-white transition-colors
`;
export const DROPDOWN_LIST = `
  absolute z-50 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700
  rounded-lg shadow-lg max-h-60 overflow-auto text-gray-900 dark:text-gray-100
`;
export const DROPDOWN_ITEM = `
  px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
`;
export const DROPDOWN_ITEM_SELECTED = 'bg-gray-200 dark:bg-gray-700 font-semibold';