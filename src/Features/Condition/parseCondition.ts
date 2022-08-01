import operatorOptions from '../defaultSettings';

export function parseCondition(
  leftOperand: string,
  operator: typeof operatorOptions[number],
  rightOperand: string,
) {
  switch (operator) {
    case 'Equals':
      return leftOperand === rightOperand;
    case 'GreaterThan':
      let greaterThanResult;
      if (!isNaN(Number(leftOperand)) && !isNaN(Number(rightOperand))) {
        greaterThanResult = Number(leftOperand) > Number(rightOperand);
      }
      return greaterThanResult;
    case 'LessThan':
      let LessThanResult;
      if (!isNaN(Number(leftOperand)) && !isNaN(Number(rightOperand))) {
        LessThanResult = Number(leftOperand) < Number(rightOperand);
      }
      return LessThanResult;
    case 'Contain':
      return String(leftOperand).indexOf(String(rightOperand)) > -1;
    case 'Not Contain':
      return String(leftOperand).indexOf(String(rightOperand)) === -1;
    case 'Regex':
      let regExpResult;
      try {
        const regExp = new RegExp(String(rightOperand), 'ig');
        regExpResult = regExp.test(String(leftOperand));
      } catch (e) {
        // pass
      }
      return regExpResult;
    default:
      return undefined;
  }
}
