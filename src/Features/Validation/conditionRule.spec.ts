import { validateConditionRule } from './conditionRule';
import { generateId } from '../../utils';

describe('validateConditionRule', () => {
  it('should return error invalidation for non-numbers in case of GreaterThan', () => {
    const conditionRule = { condition: 'name', operator: 1, operand: 'abc', id: generateId() };
    expect(validateConditionRule(conditionRule).errorMsg).toBe('Applied operator supports only numbers');
    expect(validateConditionRule(conditionRule).isValid).toBe(false);
    expect(validateConditionRule(conditionRule).target).toBe('operand');
  });

  it('should return positive invalidation for general case', () => {
    const conditionRule = { condition: 'name', operator: 0, operand: 'name', id: generateId() };
    expect(validateConditionRule(conditionRule).errorMsg).toBe('');
    expect(validateConditionRule(conditionRule).isValid).toBe(true);
    expect(validateConditionRule(conditionRule).target).toBeUndefined();
  });
});
