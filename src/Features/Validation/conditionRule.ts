import { IValidationInspectionObject } from './InspectionObject';
import { IConditionRule } from '../Condition/conditionRule';

export interface IConditionRuleValidation extends IValidationInspectionObject {
  target: 'operand' | undefined;
}

export function createConditionRuleValidation(
  isValid: boolean,
  errorMsg: string,
  target: 'operand' | undefined,
): IConditionRuleValidation {
  return {
    isValid,
    errorMsg,
    target,
  };
}

export function validateConditionRule(conditionRule: IConditionRule): IConditionRuleValidation {
  let errorMsgStack: string[] = [];
  let isValid = true;

  // Cases for 'GreaterThan', 'LessThan'
  if (
    (conditionRule.operator === 1 || conditionRule.operator === 2) &&
    isNaN(Number(conditionRule.operand))
  ) {
    errorMsgStack.push('Applied operator supports only numbers');
    isValid = false;

    return {
      isValid,
      target: 'operand',
      errorMsg: errorMsgStack.join(' '),
    };
  }

  // Regexp check
  if (conditionRule.operator === 5) {
    try {
      const regExp = new RegExp(String(conditionRule.operand), 'ig');
      regExp.test(String(conditionRule.operand));
    } catch (e) {
      errorMsgStack.push('Please enter valid regexp expression');
      isValid = false;

      return {
        isValid,
        target: 'operand',
        errorMsg: errorMsgStack.join(' '),
      };
    }
  }

  return {
    isValid,
    target: undefined,
    errorMsg: errorMsgStack.join(' '),
  };
}
