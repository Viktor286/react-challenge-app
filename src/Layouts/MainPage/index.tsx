import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';

interface IMainPageLayoutProps {
  children: React.ReactNode;
}

export default function MainPageLayout({ children }: IMainPageLayoutProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', mt: 2, mb: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
          Condition Builder
        </Typography>
        {children}
      </Container>
    </>
  );
}
