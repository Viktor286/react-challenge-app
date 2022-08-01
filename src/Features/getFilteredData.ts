import { IConditionGroup } from './createConditionGroup';
import { IDataTable } from './dataTable';
import operatorOptions from './operatorOptions';

function parseCondition(leftOperand: string, operator: typeof operatorOptions[number], rightOperand: string) {
  switch (operator) {
    case 'Equals':
      return leftOperand === rightOperand;
    case 'GreaterThan':
      return Number(leftOperand) > Number(rightOperand);
    case 'LessThan':
      return Number(leftOperand) < Number(rightOperand);
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

export default function getFilteredData(loadedData: IDataTable = [], filterRules: IConditionGroup[]) {
  if (!filterRules || filterRules.length < 1) {
    return loadedData;
  }

  return loadedData.filter((dataRow) => {
    let groupsDecision = filterRules.map(({ rules }) => {
      let conditionDecision;
      let atLeastOncePositive = false;

      // process rules to obtain the conditionDecision
      rules.forEach((rule) => {
        const { condition, operator, operand } = rule;
        const targetFieldKey = String(dataRow[condition]).toLowerCase();
        const targetFieldValue = String(operand).toLowerCase();

        if (!targetFieldKey || !targetFieldValue) {
          return;
        }

        const decision = parseCondition(targetFieldKey, operatorOptions[operator], targetFieldValue);
        if (decision !== undefined) conditionDecision = decision;
        if (decision === true) atLeastOncePositive = true;
      });

      if (atLeastOncePositive) {
        return true;
      } else {
        return conditionDecision !== undefined ? conditionDecision : true;
      }
    });
    console.log('groupsDecision', groupsDecision);
    return groupsDecision.every((e) => e);
  });
}
