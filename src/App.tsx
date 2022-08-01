import React, { useEffect } from 'react';
import { batch } from 'react-redux';
import MainPage from './Components/MainPage';
import InputDataUrl from './Components/InputDataUrl';
import ConditionBuilder from './Components/ConditionBuilder';
import DataTable from './Components/DataTable';
import { setDataTable } from './Features/Redux/dataTableSlice';
import { useAppDispatch } from './Features/Redux/hooks';
import { dataTable } from './Fixtures/y77d-th95';
import getDataTableKeys from './Features/getDataTableKeys';
import { resetConditionGroups } from './Features/Redux/conditionsSlice';

function App() {
  const dispatch = useAppDispatch();

  batch(() => {
    const dataTableKeys = getDataTableKeys(dataTable);
    dispatch(resetConditionGroups({ conditionOptions: dataTableKeys }));
    dispatch(setDataTable({ dataTable, dataTableKeys }));
  });

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(setDataTable(dataTable));
    // }, 3000);
  }, []);

  // perform request
  // set
  return (
    <MainPage>
      <InputDataUrl />
      <ConditionBuilder />
      <DataTable />
    </MainPage>
  );
}

export default App;
