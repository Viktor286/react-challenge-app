import React from 'react';
import ConditionRule from '../ConditionRule';
import ConditionGroupLayout from '../../../Layouts/ConditionBuilder/ConditionGroup/ConditionGroup';
import { ConditionRuleSkeleton } from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRuleSkeleton';
import { IConditionGroup } from '../../../Features/Condition/conditionGroup';

interface IConditionGroupProps {
  conditionGroup: IConditionGroup;
  currentConditionGroupIndex: number;
  isLoading: boolean;
}

export default React.memo(function ConditionGroup({
  conditionGroup,
  currentConditionGroupIndex,
  isLoading,
}: IConditionGroupProps) {
  const { rules: conditionRules = [] } = conditionGroup;

  return (
    <ConditionGroupLayout currentConditionGroupIndex={currentConditionGroupIndex}>
      {isLoading ? (
        <ConditionRuleSkeleton />
      ) : (
        conditionRules.map((conditionRule, currentConditionRuleIndex) => (
          <ConditionRule
            key={conditionRule.id}
            {...{ currentConditionGroupIndex, currentConditionRuleIndex, conditionRule }}
          />
        ))
      )}
    </ConditionGroupLayout>
  );
});
