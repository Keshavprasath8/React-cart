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
  },
});

export const { cartto } = cartSlice.actions;
export default cartSlice.reducer;
