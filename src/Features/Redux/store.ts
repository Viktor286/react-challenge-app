import { configureStore } from '@reduxjs/toolkit';
import conditionsReducer from './conditionsSlice';
import dataTableReducer from './dataTableSlice';

export const store = configureStore({
  reducer: {
    conditions: conditionsReducer,
    dataTable: dataTableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
