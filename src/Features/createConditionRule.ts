import { generateId } from '../utils';

export interface IConditionRule {
  condition: string;
  operator: number;
  operand: string;
  id: string;
}

export default function createConditionRule(conditionOptions: string[] = []): IConditionRule {
  return {
    condition: conditionOptions[0],
    operator: 0,
    operand: '',
    id: generateId(),
  };
}
