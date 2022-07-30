import { Typography, Box } from '@mui/material';
import { flexColumn } from '../../utils';

export const ConditionGroupSeparatorBoxSx = {
  ...flexColumn,
  width: 80,
  alignItems: 'center',
};

export const ConditionGroupSeparatorBarSx = {
  width: 2,
  height: 30,
  background: '#E1E5E9',
};

export default function ConditionGroupSeparatorLayout() {
  return (
    <Box sx={ConditionGroupSeparatorBoxSx}>
      <Box sx={ConditionGroupSeparatorBarSx} />
      <Typography variant="h6" fontWeight="bold" color="gray" sx={{ textAlign: 'center' }}>
        AND
      </Typography>
      <Box sx={ConditionGroupSeparatorBarSx} />
    </Box>
  );
}
