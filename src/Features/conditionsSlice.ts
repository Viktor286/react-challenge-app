import { createSlice } from '@reduxjs/toolkit';
import createConditionGroup, { IConditionGroup } from './createConditionGroup';
import { conditionOptions } from './tempConditionOptions';

interface IConditionsState {
  groups: IConditionGroup[];
  options: string[];
  // loadState: 0 // 0 not, 1 in-progress, 3 loaded
}

export const conditionsSlice = createSlice({
  name: 'conditions',

  initialState: {
    groups: [createConditionGroup()],
    options: conditionOptions,
    // loadState: 0 // 0 not, 1 in-progress, 3 loaded
  } as IConditionsState,

  reducers: {
    addConditionGroup: (state, payload) => {
      //
    },

    removeConditionGroup: (state, payload) => {
      //
    },

    addConditionRule: (state, payload) => {
      //
    },

    updateConditionRule: (state, { payload }) => {
      //
    },

    removeConditionRule: (state, payload) => {
      //
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
