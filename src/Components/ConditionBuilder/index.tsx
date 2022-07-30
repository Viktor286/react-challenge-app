import React from 'react';
import ConditionGroup from './ConditionGroup';
import AddConditionGroupLayout from '../../Layouts/ConditionBuilder/ConditionGroup/AddConditionGroup';
import ConditionGroupSeparatorLayout from '../../Layouts/ConditionBuilder/ConditionGroup/ConditionGroupSeparator';
import createConditionGroup from '../../Features/createConditionGroup';

export default function ConditionBuilder() {
  const conditions = { groups: [createConditionGroup()] };

  const onAddConditionGroup = () => console.log('onAddConditionGroup');

  return (
    <>
      {conditions.groups.map((conditionGroup, index) => (
        <React.Fragment key={conditionGroup.id}>
          {index ? <ConditionGroupSeparatorLayout /> : null}
          <ConditionGroup conditionGroup={conditionGroup} currentConditionGroupIndex={index} />
        </React.Fragment>
      ))}
      <AddConditionGroupLayout onAddCondition={onAddConditionGroup} />
    </>
  );
}
