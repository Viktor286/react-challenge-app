import { parseCondition } from './parseCondition';

describe('parseCondition', () => {
  it('should return true for corresponding values', () => {
    expect(parseCondition('1', 'Equals', '1')).toBe(true);
    expect(parseCondition('2', 'GreaterThan', '1')).toBe(true);
    expect(parseCondition('1', 'LessThan', '2')).toBe(true);
    expect(parseCondition('cats', 'Contain', 'cat')).toBe(true);
    expect(parseCondition('cats', 'Not Contain', 'dog')).toBe(true);
    expect(parseCondition('1', 'Regex', '\\d')).toBe(true);
  });

  it('should return false for corresponding values', () => {
    expect(parseCondition('1', 'Equals', '0')).toBe(false);
    expect(parseCondition('0', 'GreaterThan', '1')).toBe(false);
    expect(parseCondition('1', 'LessThan', '0')).toBe(false);
    expect(parseCondition('cats', 'Contain', 'dog')).toBe(false);
    expect(parseCondition('cats', 'Not Contain', 'cat')).toBe(false);
    expect(parseCondition('a', 'Regex', '\\d')).toBe(false);
  });
});
