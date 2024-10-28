import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const prevState = [...state.items]; // Копія стану перед зміною
      state.items.push(action.payload);
      console.log('Items before adding:', prevState);
      console.log('Items after adding:', state.items);
    },
    removeItem: (state, action) => {
      const prevState = [...state.items]; // Копія стану перед зміною
      state.items = state.items.filter(item => item.id !== action.payload);
      console.log('Items before removing:', prevState);
      console.log('Items after removing:', state.items);
    },
    setFilter: (state, action) => {
      const prevFilter = state.filter; // Копія стану перед зміною
      state.filter = action.payload;
      console.log('Filter before setting:', prevFilter);
      console.log('Filter after setting:', state.filter);
    },
  },
});

export const { addItem, removeItem, setFilter } = shoppingSlice.actions;
export default shoppingSlice.reducer;