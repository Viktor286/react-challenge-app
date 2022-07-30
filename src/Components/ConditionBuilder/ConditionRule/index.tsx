import { useCallback, useState } from 'react';
import ConditionRuleLayout from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRule';
import { ConditionRuleSkeletonSolid } from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRuleSkeleton';
import createConditionRule, { IConditionRule } from '../../../Features/createConditionRule';

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
  const [isItemSkeletonVisible, setIsItemSkeletonVisible] = useState(false);
  const showItemSkeleton = useCallback(() => setIsItemSkeletonVisible(true), []);
  const hideItemSkeleton = useCallback(() => setIsItemSkeletonVisible(false), []);

  const actions = {
    onConditionSelect: () => console.log('onConditionSelect'),
    onOperatorSelect: () => console.log('onOperatorSelect'),
    onOperandChange: () => console.log('onOperandChange'),
    onAddConditionRuleButton: () => console.log('onAddConditionRuleButton'),
    onRemoveConditionRuleButton: () => console.log('onRemoveConditionRuleButton'),
  };

  return (
    <>
      <ConditionRuleLayout
        key={conditionRule.id}
        {...{
          currentConditionRuleIndex,
          currentConditionGroupIndex,
          conditionRule,
          actions: {
            ...actions,
            onMouseEnterAddConditionRuleButton: showItemSkeleton,
            onMouseLeaveAddConditionRuleButton: hideItemSkeleton,
          },
        }}
      />
      {isItemSkeletonVisible && <ConditionRuleSkeletonSolid />}
    </>
  );
}
