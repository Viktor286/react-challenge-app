import { generateId } from '../utils';
import createConditionRule, { IConditionRule } from './createConditionRule';

export interface IConditionGroup {
  id: string;
  rules: IConditionRule[];
}

export default function createConditionGroup(): IConditionGroup {
  return {
    id: generateId(),
    rules: [createConditionRule()],
  };
}
