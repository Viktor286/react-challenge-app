import { generateId } from '../utils';
import createConditionRule, { IConditionRule } from './createConditionRule';

export interface IConditionGroup {
  id: string;
  rules: Array<IConditionRule>;
}

export default function createConditionGroup(conditionOptions: string[] = []): IConditionGroup {
  return {
    id: generateId(),
    rules: [createConditionRule(conditionOptions)],
  };
}
