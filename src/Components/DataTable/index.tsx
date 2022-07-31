import React from 'react';
import DataTableLayout from '../../Layouts/DataTable';
import { useAppSelector } from '../../Features/Redux/hooks';
import getDataTableColumns from '../../Features/getRowsAndCols';
import { IDataColumns, IDataTableRow } from '../../Features/dataTable';

export default function DataTable() {
  const { dataKeys, isLoading, filteredData, loadedData } = useAppSelector((state) => state.dataTable);

  let totalRows = 0;
  let rows: IDataTableRow[] = [];
  let columns: IDataColumns[] = [{ field: '', headerName: '' }];

  if (!isLoading) {
    rows = loadedData;
    columns = getDataTableColumns(dataKeys);
    totalRows = loadedData.length;
  }

  console.log('filteredData', filteredData);

  return <DataTableLayout loading={isLoading} rows={rows} columns={columns} totalRows={totalRows} />;
}
