import { configureStore } from '@reduxjs/toolkit';
import { heroesReducer } from './heroSlice';

export const store = configureStore({
  reducer: {
    heroesData: heroesReducer,
  },
});
