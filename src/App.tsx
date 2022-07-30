import React from 'react';
import { store } from './Features/Redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import MainPage from './Components/MainPage';
import InputDataUrl from './Components/InputDataUrl';
import ConditionBuilder from './Components/ConditionBuilder';
import DataTable from './Components/DataTable';

function App() {
  return (
    <ReduxProvider store={store}>
      <MainPage>
        <InputDataUrl />
        <ConditionBuilder />
        <DataTable />
      </MainPage>
    </ReduxProvider>
  );
}

export default App;
