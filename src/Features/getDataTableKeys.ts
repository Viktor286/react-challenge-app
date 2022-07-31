import { IDataTable } from './dataTable';

export default function getDataTableKeys(dataTable: IDataTable) {
  const conditions = new Set();
  for (let i = 0; i < dataTable.length; i++) {
    const currentDataCell = dataTable[i];
    for (const field of Object.keys(currentDataCell)) {
      if (!conditions.has(field)) conditions.add(field);
    }
  }
  return Array.from(conditions) as string[];
}
