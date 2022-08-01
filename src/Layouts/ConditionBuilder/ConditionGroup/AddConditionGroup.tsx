import { Box, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { ConditionGroupSeparatorBarSx, ConditionGroupSeparatorBoxSx } from './ConditionGroupSeparator';

interface IAddConditionGroupLayout {
  withBar: boolean;
  onAddCondition: () => void;
}

export default function AddConditionGroupLayout({
  withBar = true,
  onAddCondition = () => {},
}: IAddConditionGroupLayout) {
  return (
    <Box sx={ConditionGroupSeparatorBoxSx}>
      {withBar && <Box sx={ConditionGroupSeparatorBarSx} />}
      <Button
        fullWidth
        size="large"
        aria-label="Add new condition group"
        variant="outlined"
        startIcon={<Add />}
        onClick={onAddCondition}
        data-testid="add-condition-group"
      >
        AND
      </Button>
    </Box>
  );
}
