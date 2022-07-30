import { createSlice } from '@reduxjs/toolkit';
import createConditionGroup, { IConditionGroup } from '../createConditionGroup';
import createConditionRule, { IConditionRule } from '../createConditionRule';
import { conditionOptions } from '../tempConditionOptions';

interface IConditionsState {
  groups: IConditionGroup[];
  options: string[];
  // loadState: 0 // 0 not, 1 in-progress, 3 loaded
}

interface IUpdateConditionRuleAction {
  type: string;
  payload: {
    conditionGroupIndex: number;
    conditionRuleIndex: number;
    fieldName: keyof IConditionRule;
    fieldValue: IConditionRule[keyof IConditionRule];
  };
}

export const conditionsSlice = createSlice({
  name: 'conditions',

  initialState: {
    groups: [createConditionGroup(conditionOptions)],
    options: conditionOptions,
    // loadState: 0 // 0 not, 1 in-progress, 3 loaded
  } as IConditionsState,

  reducers: {
    addConditionGroup: (state) => {
      state.groups.push(createConditionGroup(state.options));
    },

    removeConditionGroup: (state, { payload: { conditionGroupIndex } }) => {
      state.groups.splice(conditionGroupIndex, 1);
    },

    addConditionRule: (state, { payload: { conditionGroupIndex, conditionRuleIndex } }) => {
      state.groups[conditionGroupIndex].rules.splice(
        conditionRuleIndex + 1,
        0,
        createConditionRule(state.options),
      );
    },

    updateConditionRule: (
      state,
      {
        payload: { conditionGroupIndex, conditionRuleIndex, fieldName, fieldValue },
      }: IUpdateConditionRuleAction,
    ) => {
      // @ts-ignore
      state.groups[conditionGroupIndex].rules[conditionRuleIndex][fieldName] = fieldValue;
    },

    removeConditionRule: (state, { payload: { conditionGroupIndex, conditionRuleIndex } }) => {
      state.groups[conditionGroupIndex].rules.splice(conditionRuleIndex, 1);
    },
  },
});

export const {
  addConditionGroup,
  removeConditionGroup,
  addConditionRule,
  removeConditionRule,
  updateConditionRule,
} = conditionsSlice.actions;

export default conditionsSlice.reducer;
