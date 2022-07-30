import ConditionRule from '../ConditionRule';
import ConditionGroupLayout from '../../../Layouts/ConditionBuilder/ConditionGroup/ConditionGroup';
import { ConditionRuleSkeleton } from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRuleSkeleton';
import { IConditionGroup } from '../../../Features/createConditionGroup';

interface IConditionGroupProps {
  conditionGroup: IConditionGroup;
  currentConditionGroupIndex: number;
}

export default function ConditionGroup({ conditionGroup, currentConditionGroupIndex }: IConditionGroupProps) {
  const { rules: conditionRules = [] } = conditionGroup;
  const isLoading = false;

  return (
    <ConditionGroupLayout>
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
}
