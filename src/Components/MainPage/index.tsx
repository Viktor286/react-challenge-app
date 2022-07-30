import React from 'react';
import MainPageLayout from '../../Layouts/MainPage';

interface IMainPageProps {
  children: React.ReactNode;
}

export default function MainPage({ children }: IMainPageProps) {
  return <MainPageLayout>{children}</MainPageLayout>;
}
