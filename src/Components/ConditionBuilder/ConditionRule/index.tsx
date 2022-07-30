import ConditionRuleLayout from '../../../Layouts/ConditionBuilder/ConditionRule/ConditionRule';
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
          },
        }}
      />
    </>
  );
}
