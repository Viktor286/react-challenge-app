import { createSlice } from '@reduxjs/toolkit';
import getDataTableKeys from '../getDataTableKeys';

interface IDataTableState {
  loadedData: [];
  filteredData: [];
  dataKeys: string[];
  isLoading: boolean;
}

export const initialState = {
  loadedData: [],
  filteredData: [],
  dataKeys: [''],
  isLoading: true,
};

export const dataTableSlice = createSlice({
  name: 'dataTable',

  initialState: initialState as IDataTableState,

  reducers: {
    setDataTable: (state, { payload: newLoadedData }) => {
      state.loadedData = newLoadedData;

      state.filteredData = newLoadedData;

      state.dataKeys = getDataTableKeys(newLoadedData);

      state.isLoading = false;
    },
  },
});

export const { setDataTable } = dataTableSlice.actions;

export default dataTableSlice.reducer;
