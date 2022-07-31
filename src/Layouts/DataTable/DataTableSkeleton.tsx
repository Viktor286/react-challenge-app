import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { flexColumn } from '../utils';
import { dataStatInfoSx } from './index';

const dataRowHeight = '2rem';

export default function DataTableSkeleton() {
  return (
    <Box sx={{ ...flexColumn, gap: 2 }}>
      <Box sx={dataStatInfoSx}>
        <Skeleton variant="rectangular" width="50%" height={dataRowHeight} />
        <Skeleton variant="rectangular" width="50%" height={dataRowHeight} />
      </Box>
      <Skeleton variant="rectangular" height={dataRowHeight} />
      <Skeleton variant="rectangular" height={dataRowHeight} />
      <Skeleton variant="rectangular" height={dataRowHeight} />
      <Skeleton variant="rectangular" height={dataRowHeight} />
      <Skeleton variant="rectangular" height={dataRowHeight} />
      <Skeleton variant="rectangular" height={dataRowHeight} />
    </Box>
  );
}
