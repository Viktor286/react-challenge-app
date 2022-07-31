import React from 'react';
import { Card } from '@mui/material';
import { flexColumn } from '../../utils';

interface IConditionGroupLayoutProps {
  children: React.ReactNode;
  currentConditionGroupIndex: number;
}

export default function ConditionGroupLayout({
  children,
  currentConditionGroupIndex,
}: IConditionGroupLayoutProps) {
  return (
    <Card
      sx={{ ...flexColumn, gap: 4, padding: 3 }}
      data-test-id={`condition-group-${currentConditionGroupIndex}`}
    >
      {children}
    </Card>
  );
}
