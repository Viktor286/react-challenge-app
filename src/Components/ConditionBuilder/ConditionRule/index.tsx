import { useCallback, useState, useMemo } from 'react';
import ConditionRuleLayout from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRule';
import { ConditionRuleSkeletonSolid } from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRuleSkeleton';
import createConditionRule, { IConditionRule } from '../../../Features/createConditionRule';
import { useAppDispatch, useAppSelector } from '../../../Features/Redux/hooks';
import {
  updateConditionRule,
  addConditionRule,
  removeConditionRule,
  removeConditionGroup,
} from '../../../Features/Redux/conditionsSlice';

interface IConditionRuleProp {
  conditionRule: IConditionRule;
  currentConditionGroupIndex: number;
  currentConditionRuleIndex: number;
}

export default function ConditionRule({
  conditionRule = createConditionRule(),
  currentConditionGroupIndex = 0,
  currentConditionRuleIndex = 0,
}: IConditionRuleProp) {
  const dispatch = useAppDispatch();
  const dataKeys = useAppSelector((state) => state.dataTable.dataKeys);
  const conditionGroup = useAppSelector((state) => state.conditions.groups[currentConditionGroupIndex]);

  const [isItemSkeletonVisible, setIsItemSkeletonVisible] = useState(false);
  const showItemSkeleton = useCallback(() => setIsItemSkeletonVisible(true), []);
  const hideItemSkeleton = useCallback(() => setIsItemSkeletonVisible(false), []);

  const actions = useMemo(
    () => ({
      onConditionSelect: (fieldValue: string, conditionGroupIndex: number, conditionRuleIndex: number) => {
        dispatch(
          updateConditionRule({
            conditionRuleIndex,
            conditionGroupIndex,
            fieldName: 'condition',
            fieldValue,
          }),
        );
      },

      onOperatorSelect: (fieldValue: string, conditionGroupIndex: number, conditionRuleIndex: number) => {
        dispatch(
          updateConditionRule({ conditionRuleIndex, conditionGroupIndex, fieldName: 'operator', fieldValue }),
        );
      },

      onOperandChange: (fieldValue: string, conditionGroupIndex: number, conditionRuleIndex: number) => {
        dispatch(
          updateConditionRule({ conditionRuleIndex, conditionGroupIndex, fieldName: 'operand', fieldValue }),
        );
      },

      onAddConditionRuleButton: (conditionGroupIndex: number, conditionRuleIndex: number) => {
        dispatch(addConditionRule({ conditionGroupIndex, conditionRuleIndex, conditionOptions: dataKeys }));
        hideItemSkeleton();
      },

      onRemoveConditionRuleButton: (conditionGroupIndex: number, conditionRuleIndex: number) => {
        if (conditionGroup.rules.length <= 1) {
          dispatch(removeConditionGroup({ conditionGroupIndex }));
        } else {
          dispatch(removeConditionRule({ conditionGroupIndex, conditionRuleIndex }));
        }
      },

      onMouseEnterAddConditionRuleButton: showItemSkeleton,
      onMouseLeaveAddConditionRuleButton: hideItemSkeleton,
    }),
    [dispatch, hideItemSkeleton, showItemSkeleton, conditionGroup, dataKeys],
  );

  return (
    <>
      <ConditionRuleLayout
        key={conditionRule.id}
        {...{
          currentConditionRuleIndex,
          currentConditionGroupIndex,
          conditionRule,
          dropdownOptions: dataKeys,
          actions,
        }}
      />
      {isItemSkeletonVisible && <ConditionRuleSkeletonSolid />}
    </>
  );
}
