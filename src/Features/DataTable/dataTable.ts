import operatorOptions from '../defaultSettings';
import { IConditionGroup } from '../Condition/conditionGroup';
import { parseCondition } from '../Condition/parseCondition';

export interface IDataTableRow {
  [index: string]: string | number | null | object;
}

export type IDataTable = IDataTableRow[];

export interface IDataColumns {
  field: string;
  headerName: string;
}

export function getDataTableKeys(dataTable: IDataTable) {
  const conditions = new Set();
  for (let i = 0; i < dataTable.length; i++) {
    const currentDataCell = dataTable[i];
    for (const field of Object.keys(currentDataCell)) {
      if (!conditions.has(field)) conditions.add(field);
    }
  }
  return Array.from(conditions) as string[];
}

export function getDataTableColumns(dataKeys: string[] = []): IDataColumns[] {
  return dataKeys.map((key) => ({
    field: key,
    headerName: key,
  }));
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

    return groupsDecision.every((e) => e);
  });
}
