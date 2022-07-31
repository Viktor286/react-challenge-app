export interface IDataTableRow {
  [index: string]: string | number | null | object;
}

export type IDataTable = IDataTableRow[];

export interface IDataColumns {
  field: string;
  headerName: string;
}
