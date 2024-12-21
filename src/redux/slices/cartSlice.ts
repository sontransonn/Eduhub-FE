import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
    _id: string;
    courseName: string;
    poster: string
    slug: string;
    rating: string;
    price: number;
    discount: number;
}

interface CartState {
    items: CartItem[];
    quantity: number
}

const initialState: CartState = {
    items: [],
    quantity: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems: (state, action: PayloadAction<CartItem[]>) => {
            state.items = action.payload;
            state.quantity = action.payload.length;
        },
        addToCart(state, action: PayloadAction<CartItem>) {
            state.items.push(action.payload);
            state.quantity += 1;
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item._id !== action.payload);
            state.quantity = Math.max(0, state.quantity - 1);
        },
    }
})

export const {
    setCartItems,
    addToCart,
    removeFromCart
} = cartSlice.actions

export default cartSlice.reducer