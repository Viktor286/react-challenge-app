import React from 'react';
import MainPage from './Components/MainPage';
import InputDataUrl from './Components/InputDataUrl';
import ConditionBuilder from './Components/ConditionBuilder';
import DataTable from './Components/DataTable';

function App() {
  return (
    <MainPage>
      <InputDataUrl />
      <ConditionBuilder />
      <DataTable />
    </MainPage>
  );
}

export default App;
