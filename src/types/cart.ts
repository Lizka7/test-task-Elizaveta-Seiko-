export interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
}
  
export interface CartState {
    items: CartItem[];
}

export interface CartItemRowProps {
    item: CartItem;
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export interface CartTotalProps {
    total: number;
}