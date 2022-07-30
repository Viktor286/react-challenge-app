import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';
import { flexColumn } from '../utils';

interface IMainPageLayoutProps {
  children: React.ReactNode;
}

export default function MainPageLayout({ children }: IMainPageLayoutProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ ...flexColumn, mt: 2, mb: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Condition Builder
        </Typography>
        {children}
      </Container>
    </>
  );
}
