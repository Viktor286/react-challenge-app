import { configureStore } from '@reduxjs/toolkit';
import conditionsReducer from '../Features/conditionsSlice';

export const store = configureStore({
  reducer: {
    conditions: conditionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
