import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { ConditionGroupSeparatorBarSx, ConditionGroupSeparatorBoxSx } from './ConditionGroupSeparator';

interface IAddConditionGroupLayout {
  onAddCondition: () => void;
}

export default function AddConditionGroupLayout({ onAddCondition }: IAddConditionGroupLayout) {
  return (
    <Box sx={ConditionGroupSeparatorBoxSx}>
      <Box sx={ConditionGroupSeparatorBarSx} />
      <Button
        fullWidth
        size="large"
        aria-label="Add new condition group"
        variant="outlined"
        startIcon={<Add />}
        onClick={onAddCondition}
      >
        AND
      </Button>
    </Box>
  );
}
