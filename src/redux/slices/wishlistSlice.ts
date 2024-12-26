import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface WishlistItem {
    _id: string;
    courseName: string;
    slug: string;
    poster: string
    rating: string;
    price: number;
    discount: number;
}

interface WishlistState {
    items: WishlistItem[];
    quantity: number
}

const initialState: WishlistState = {
    items: [],
    quantity: 0
};

const wishlistItemSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        setWishlistItems: (state, action: PayloadAction<WishlistItem[]>) => {
            state.items = action.payload;
            state.quantity = action.payload.length;
        },
        addToWishlist(state, action: PayloadAction<WishlistItem>) {
            state.items.unshift(action.payload);
            state.quantity += 1;
        },
        removeFromWishlist(state, action: PayloadAction<string>) {
            state.items = state.items.filter((item) => item._id !== action.payload);
            state.quantity = Math.max(0, state.quantity - 1);
        },
    }
})

export const {
    setWishlistItems,
    addToWishlist,
    removeFromWishlist
} = wishlistItemSlice.actions

export default wishlistItemSlice.reducer