import { createSlice } from '@reduxjs/toolkit';
const initialState = {
 items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartto: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { cartto,removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
