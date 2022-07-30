import { generateId } from '../utils';
import { conditionOptions } from './tempConditionOptions';

export interface IConditionRule {
  condition: string;
  operator: number;
  operand: string;
  id: string;
}

export default function createConditionRule(): IConditionRule {
  return {
    condition: conditionOptions[0],
    operator: 0,
    operand: '',
    id: generateId(),
  };
}
