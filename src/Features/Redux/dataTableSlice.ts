import { createSlice } from '@reduxjs/toolkit';

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
    setDataTable: (state, { payload: { dataTable: newLoadedData, dataTableKeys } }) => {
      state.loadedData = newLoadedData;
      state.filteredData = newLoadedData;
      state.dataKeys = dataTableKeys;
      state.isLoading = false;
    },

    setFilteredData: (state, { payload: { filteredData } }) => {
      state.filteredData = filteredData;
    },
  },
});

export const { setDataTable, setFilteredData } = dataTableSlice.actions;

export default dataTableSlice.reducer;
