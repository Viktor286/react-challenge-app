import { IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

interface IAddConditionRuleButtonProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export function AddConditionRuleButton({
  onMouseEnter,
  onMouseLeave,
  onClick,
}: IAddConditionRuleButtonProps) {
  return (
    <IconButton
      size="large"
      color="primary"
      aria-label="Add condition rule"
      {...{ onMouseEnter, onMouseLeave, onClick }}
    >
      <Add />
    </IconButton>
  );
}

interface IRemoveConditionRuleButtonProps {
  onClick: () => void;
}

export function RemoveConditionRuleButton({ onClick }: IRemoveConditionRuleButtonProps) {
  return (
    <IconButton size="large" color="warning" aria-label="Remove condition rule" onClick={onClick}>
      <Delete />
    </IconButton>
  );
}
