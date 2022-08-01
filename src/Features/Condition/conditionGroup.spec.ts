import createConditionGroup from './conditionGroup';

describe('createConditionGroup', () => {
  it('should create defined conditionGroup', () => {
    const conditionGroup = createConditionGroup(['conditionOption']);

    expect(conditionGroup.id).toBeDefined();
    expect(Array.isArray(conditionGroup.rules)).toBe(true);
    expect(conditionGroup.rules[0]).toMatchObject({
      condition: expect.any(String),
      operator: expect.any(Number),
      operand: expect.any(String),
      id: expect.any(String),
    });
  });
});
