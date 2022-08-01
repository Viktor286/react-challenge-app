import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DataTableSkeleton from './DataTableSkeleton';
import { flexColumn } from '../utils';
import { IDataColumns, IDataTableRow } from '../../Features/dataTable';

interface IDataTableLayoutProps {
  loading: boolean;
  rows: IDataTableRow[];
  columns: IDataColumns[];
  totalRows: number;
}

export const dataStatInfoSx = { display: 'flex', gap: 2, mt: 1, width: '170px' };

export default function DataTableLayout({
  loading = false,
  totalRows = 0,
  rows = [],
  columns = [],
}: IDataTableLayoutProps) {
  return (
    <Box sx={{ ...flexColumn, minHeight: '500px', mt: 4 }} data-test-id="data-table">
      <Typography variant="h5" fontWeight="bold">
        Results
      </Typography>

      {!loading ? (
        <>
          <Box sx={dataStatInfoSx}>
            <Chip label={`Total: ${totalRows}`} />
            <Chip color="primary" label={`Filtered: ${rows.length}`} />
          </Box>
          <DataGrid rows={rows} columns={columns} sx={{ mt: 2 }} />
        </>
      ) : (
        <DataTableSkeleton />
      )}
    </Box>
  );
}
