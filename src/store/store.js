import { configureStore } from '@reduxjs/toolkit';
import shoppingReducer from '../components/shoppingList/shoppingSlice.jsx';

const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export default store;