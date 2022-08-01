import React from 'react';
import { render, screen } from '@testing-library/react';
import ConditionRule from './ConditionRule';
import createConditionRuleLayout from '../../../Features/Condition/conditionRule';
import { createConditionRuleValidation } from '../../../Features/Validation/conditionRule';

describe('ConditionRule', () => {
  it('should provide labels and dropdown options', () => {
    render(
      <ConditionRule
        conditionRule={createConditionRuleLayout(['my-test-dd-option'])}
        dropdownOptions={['my-test-dd-option']}
        validation={createConditionRuleValidation(true, '', undefined)}
        currentConditionRuleIndex={0}
        currentConditionGroupIndex={0}
        actions={{}}
      />,
    );

    expect(screen.getByText('my-test-dd-option')).toBeInTheDocument();

    expect(screen.getByLabelText('Left Condition')).toBeInTheDocument();
    expect(screen.getByLabelText('Operator')).toBeInTheDocument();
    expect(screen.getByLabelText('Value')).toBeInTheDocument();
  });
});
