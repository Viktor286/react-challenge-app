import React from 'react';
import { render, screen } from '@testing-library/react';
import ConditionRuleDropdownLayout from './ConditionRuleDropdown';

describe('ConditionRule', () => {
  it('should provide labels and selected dropdown option', async () => {
    const cb = jest.fn();
    render(
      <ConditionRuleDropdownLayout
        labelId="my-label-id"
        label="my-super-label"
        selectedValue="my-option"
        onSelect={cb}
        dropdownOptions={['my-option']}
      />,
    );

    expect(screen.getByTestId('select-my-label-id')).toBeInTheDocument();
    expect(screen.getByLabelText('my-super-label')).toBeInTheDocument();
    expect(screen.getByText('my-option')).toBeInTheDocument();
  });
});
