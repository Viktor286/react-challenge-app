import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { RemoveConditionRuleButton } from './ConditionRuleButtons';

describe('RemoveConditionRuleButton', () => {
  it('should fire provided callback', () => {
    const myCb = jest.fn();
    render(<RemoveConditionRuleButton onClick={myCb} />);
    fireEvent.click(screen.getByLabelText('Remove condition rule'));
    expect(myCb).toHaveBeenCalled();
  });
});
