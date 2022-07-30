import React from 'react';
import { Card } from '@mui/material';
import { flexColumn } from '../../utils';

interface IConditionGroupLayoutProps {
  children: React.ReactNode;
}

export default function ConditionGroupLayout({ children }: IConditionGroupLayoutProps) {
  return <Card sx={{ ...flexColumn, gap: 4, padding: 3 }}>{children}</Card>;
}
