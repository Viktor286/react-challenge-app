import React from 'react';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import ConditionRuleDropdown from './ConditionRuleDropdown';
import { AddConditionRuleButton, RemoveConditionRuleButton } from './ConditionRuleButtons';
import operatorOptions from '../../../Features/operatorOptions';
import { IConditionRule } from '../../../Features/createConditionRule';
import { conditionOptions } from '../../../Features/tempConditionOptions';

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
  height: 1,
};

interface IConditionRuleLayoutProps {
  conditionRule: IConditionRule;
  currentConditionGroupIndex: number;
  currentConditionRuleIndex: number;
  actions: any; // TODO: fill
}

export default function ConditionRuleLayout({
  conditionRule = { condition: '', operator: 0, operand: '', id: '' },
  currentConditionGroupIndex = 0,
  currentConditionRuleIndex = 0,
  actions = {},
}: IConditionRuleLayoutProps) {
  const { condition, operator, operand } = conditionRule;

  // TODO: validation:
  //  1. For comparison operators (Greater Than, Less Than), the entered value must be number. Visually indicate this invalid input value.

  return (
    <Box sx={ConditionRuleLayoutSx}>
      {currentConditionRuleIndex ? (
        <Typography color="primary" fontWeight="bold" fontSize={20} mx={2}>
          OR
        </Typography>
      ) : null}

      <ConditionRuleDropdown
        labelId="left-condition"
        label="Left Condition"
        dropdownOptions={conditionOptions}
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
          // error={boolean}
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
}
