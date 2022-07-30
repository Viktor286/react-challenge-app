import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Features/Redux/hooks';
import { addConditionGroup } from '../../Features/Redux/conditionsSlice';
import ConditionGroup from './ConditionGroup';
import AddConditionGroupLayout from '../../Layouts/ConditionBuilder/ConditionGroup/AddConditionGroup';
import ConditionGroupSeparatorLayout from '../../Layouts/ConditionBuilder/ConditionGroup/ConditionGroupSeparator';

export default function ConditionBuilder() {
  const dispatch = useAppDispatch();
  const conditions = useAppSelector((state) => state.conditions);

  const onAddConditionGroup = () => {
    dispatch(addConditionGroup());
  };

  return (
    <>
      {conditions.groups.map((conditionGroup, index) => (
        <React.Fragment key={conditionGroup.id}>
          {index ? <ConditionGroupSeparatorLayout /> : null}
          <ConditionGroup conditionGroup={conditionGroup} currentConditionGroupIndex={index} />
        </React.Fragment>
      ))}
      <AddConditionGroupLayout withBar={conditions.groups.length > 0} onAddCondition={onAddConditionGroup} />
    </>
  );
}
