import { IDataColumns } from './dataTable';

export default function getDataTableColumns(dataKeys: string[] = []): IDataColumns[] {
  return dataKeys.map((key) => ({
    field: key,
    headerName: key,
  }));
}
