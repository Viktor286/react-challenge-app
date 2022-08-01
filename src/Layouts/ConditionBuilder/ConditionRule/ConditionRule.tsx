import React from 'react';
import { Box, FormControl, TextField, Typography, Stack, FormHelperTextProps } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ConditionRuleDropdown from './ConditionRuleDropdown';
import { AddConditionRuleButton, RemoveConditionRuleButton } from './ConditionRuleButtons';
import { IConditionRule } from '../../../Features/Condition/conditionRule';
import operatorOptions from '../../../Features/defaultSettings';
import { IConditionRuleValidation } from '../../../Features/Validation/conditionRule';

// Styles could be consolidated into theme tokens
export const conditionRuleHeight = '55px';

export const ConditionRuleLayoutSx = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',
  minHeight: conditionRuleHeight,
  gap: 2,
};

export const conditionRuleSx = {
  flex: 1,
  width: 1,
  minHeight: conditionRuleHeight,
};

interface IConditionRuleLayoutProps {
  conditionRule: IConditionRule;
  dropdownOptions: string[];
  currentConditionGroupIndex: number;
  currentConditionRuleIndex: number;
  actions: any; // TODO: fill
  validation: IConditionRuleValidation;
}

const HelperText = ({ children }: FormHelperTextProps) => (
  <Stack direction="row" spacing={0.5} alignItems="center" sx={{ position: 'absolute', top: '-1.5rem' }}>
    <Typography component="span" variant="caption" color="error">
      {children}
    </Typography>
  </Stack>
);

export default React.memo(function ConditionRuleLayout({
  conditionRule = { condition: '', operator: 0, operand: '', id: '' },
  dropdownOptions = [''],
  currentConditionGroupIndex = 0,
  currentConditionRuleIndex = 0,
  actions = {},
  validation,
}: IConditionRuleLayoutProps) {
  const { condition, operator, operand, id } = conditionRule;

  return (
    <Box sx={ConditionRuleLayoutSx} data-testid={`condition-rule-${id}`}>
      {currentConditionRuleIndex ? (
        <Typography color="primary" fontWeight="bold" fontSize={20} mx={2}>
          OR
        </Typography>
      ) : null}

      <ConditionRuleDropdown
        labelId="left-condition"
        label="Left Condition"
        dropdownOptions={dropdownOptions}
        selectedValue={condition}
        onSelect={(e: SelectChangeEvent) =>
          actions.onConditionSelect(e.target.value, currentConditionGroupIndex, currentConditionRuleIndex)
        }
      />

      <ConditionRuleDropdown
        labelId="operator"
        label="Operator"
        dropdownOptions={operatorOptions}
        selectedValue={operatorOptions[operator]}
        onSelect={(e: SelectChangeEvent) =>
          actions.onOperatorSelect(
            operatorOptions.indexOf(e.target.value),
            currentConditionGroupIndex,
            currentConditionRuleIndex,
          )
        }
      />

      <FormControl sx={conditionRuleSx}>
        <TextField
          label="Value"
          placeholder="Value"
          value={operand}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            actions.onOperandChange(e.target.value, currentConditionGroupIndex, currentConditionRuleIndex)
          }
          data-testid="input-operand"
          error={!validation.isValid && validation.target === 'operand'}
          helperText={
            validation.target === 'operand' && validation.errorMsg.length > 1 ? validation.errorMsg : ''
          }
          FormHelperTextProps={{ component: HelperText } as Partial<FormHelperTextProps<'p', {}>>}
        />
      </FormControl>

      <Box>
        <AddConditionRuleButton
          onMouseEnter={actions.onMouseEnterAddConditionRuleButton}
          onMouseLeave={actions.onMouseLeaveAddConditionRuleButton}
          onClick={() =>
            actions.onAddConditionRuleButton(currentConditionGroupIndex, currentConditionRuleIndex)
          }
        />
        <RemoveConditionRuleButton
          onClick={() =>
            actions.onRemoveConditionRuleButton(currentConditionGroupIndex, currentConditionRuleIndex)
          }
        />
      </Box>
    </Box>
  );
});
