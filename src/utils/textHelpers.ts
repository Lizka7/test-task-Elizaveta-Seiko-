export const normalizeText = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  
export const truncateText = (text: string, length: number) =>
    text.length > length ? text.slice(0, length) + '…' : text;