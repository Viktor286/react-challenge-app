import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { conditionRuleSx } from './ConditionRule';

interface IConditionRuleDropdownLayoutProps {
  labelId: string;
  label: string;
  selectedValue: string;
  dropdownOptions: string[];
  onSelect: (e: SelectChangeEvent) => any;
}

export default function ConditionRuleDropdownLayout({
  labelId,
  label,
  selectedValue,
  onSelect,
  dropdownOptions,
}: IConditionRuleDropdownLayoutProps) {
  return (
    <FormControl sx={conditionRuleSx}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        label={label}
        value={selectedValue}
        onChange={onSelect}
        data-testid={`select-${labelId}`}
      >
        {dropdownOptions.map((optionText) => (
          <MenuItem key={`key-${optionText}`} value={optionText}>
            {optionText}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
