import { createSlice } from '@reduxjs/toolkit';
import createConditionGroup, { IConditionGroup } from '../Condition/conditionGroup';
import createConditionRule, { IConditionRule } from '../Condition/conditionRule';

interface IConditionsState {
  groups: IConditionGroup[];
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

export const initialState = {
  groups: [createConditionGroup([''])],
};

export const conditionsSlice = createSlice({
  name: 'conditions',

  initialState: initialState as IConditionsState,

  reducers: {
    resetConditionGroups: (state, { payload: { conditionOptions } }) => {
      state.groups = [createConditionGroup(conditionOptions)];
    },

    addConditionGroup: (state, { payload: { conditionOptions } }) => {
      state.groups.push(createConditionGroup(conditionOptions));
    },

    removeConditionGroup: (state, { payload: { conditionGroupIndex } }) => {
      state.groups.splice(conditionGroupIndex, 1);
    },

    addConditionRule: (state, { payload: { conditionGroupIndex, conditionRuleIndex, conditionOptions } }) => {
      state.groups[conditionGroupIndex].rules.splice(
        conditionRuleIndex + 1,
        0,
        createConditionRule(conditionOptions),
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
  resetConditionGroups,
} = conditionsSlice.actions;

export default conditionsSlice.reducer;
