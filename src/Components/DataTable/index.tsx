import React, { useEffect } from 'react';
import DataTableLayout from '../../Layouts/DataTable';
import { useAppDispatch, useAppSelector } from '../../Features/Redux/hooks';
import getFilteredData, {
  getDataTableColumns,
  IDataColumns,
  IDataTableRow,
} from '../../Features/DataTable/dataTable';
import { setFilteredData } from '../../Features/Redux/dataTableSlice';

export default function DataTable() {
  const dispatch = useAppDispatch();
  const { groups: filterRules } = useAppSelector((state) => state.conditions);
  const { dataKeys, isLoading, filteredData, loadedData } = useAppSelector((state) => state.dataTable);

  let totalRows = 0;
  let rows: IDataTableRow[] = [];
  let columns: IDataColumns[] = [{ field: '', headerName: '' }];

  useEffect(() => {
    const filteredData = getFilteredData(loadedData, filterRules);
    dispatch(setFilteredData({ filteredData }));
  }, [dispatch, loadedData, filterRules]);

  if (!isLoading) {
    rows = filteredData;
    columns = getDataTableColumns(dataKeys); // todo: we can calc this once
    totalRows = loadedData.length;
  }

  return <DataTableLayout loading={isLoading} rows={rows} columns={columns} totalRows={totalRows} />;
}
