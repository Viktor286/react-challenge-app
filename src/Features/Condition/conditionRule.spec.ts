import createConditionRule from './conditionRule';

describe('createConditionRule', () => {
  it('should create defined conditionRule', () => {
    const conditionRule = createConditionRule(['conditionOption']);
    expect(conditionRule.condition).toBe('conditionOption');
    expect(conditionRule.operand).toBeDefined();
    expect(conditionRule.operator).toBeDefined();
    expect(conditionRule.id).toBeDefined();
  });
});
